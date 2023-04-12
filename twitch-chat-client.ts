import {
  StandardWebSocketClient,
  WebSocketClient,
} from "https://deno.land/x/websocket@v0.1.4/mod.ts";

export interface TwitchChatClientOptions {
  username: string;
  oauthToken: string;
  channel: string;
}

export async function connectTwitchChat(
  options: TwitchChatClientOptions,
): Promise<WebSocketClient> {
  const url = `wss://irc-ws.chat.twitch.tv:443`;
  const socket: WebSocketClient = new StandardWebSocketClient(url);

  socket.on("open", () => {
    sendRaw(socket, `PASS oauth:${options.oauthToken}`);
    sendRaw(socket, `NICK ${options.username}`);
    sendRaw(socket, `JOIN #${options.channel}`);
  });

  socket.on("message", (event) => {
    onMessage(socket, event.data);
  });

  socket.on("error", (event) => {
    console.error("WebSocket error:", event);
  });

  socket.on("close", (event) => {
    console.log("WebSocket closed:", event);
  });

  await socket;

  return socket;
}

function sendRaw(socket: WebSocketClient, message: string) {
  socket.send(message);
}

function onMessage(socket: WebSocketClient, message: string) {
  if (message.startsWith("PING")) {
    sendRaw(socket, "PONG :tmi.twitch.tv");
  } else {
    parseChatMessage(message);
  }
}

function parseChatMessage(message: string) {
  const parsedMessage = /:(\w+)!\w+@\w+\.tmi\.twitch\.tv PRIVMSG #\w+ :(.+)/
    .exec(message);
  if (parsedMessage) {
    const [, user, content] = parsedMessage;
    console.log(`${user}: ${content}`);
  }
}
