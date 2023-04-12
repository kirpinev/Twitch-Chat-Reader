import {
  connectTwitchChat,
  TwitchChatClientOptions,
} from "./twitch-chat-client.ts";

function getEnvironmentVariable(name: string): string {
  const value = Deno.env.get(name);
  if (!value) {
    throw new Error(`Environment variable ${name} is not set.`);
  }
  return value;
}

const options: TwitchChatClientOptions = {
  username: getEnvironmentVariable("TWITCH_USERNAME"),
  oauthToken: getEnvironmentVariable("TWITCH_OAUTH_TOKEN"),
  channel: getEnvironmentVariable("TWITCH_CHANNEL"),
};

(async () => {
  await connectTwitchChat(options);
  console.log("Connected to Twitch chat.");
})();
