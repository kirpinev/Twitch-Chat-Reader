# Twitch Chat Reader

This project is a simple program that reads messages from a Twitch chat and
outputs them to the console. It uses a WebSocket connection to the Twitch chat.

### Installation

1. Install Deno. To do this, you need to go to the official Deno website at
   https://deno.land and follow the installation instructions.
2. Clone the repository using git clone.
3. Set environment variables for your Twitch username, OAuth token, and channel.
   You can use the export command in your terminal to do this:

```
export TWITCH_USERNAME=your_username
export TWITCH_OAUTH_TOKEN=your_oauth_token
export TWITCH_CHANNEL=channel_name
```

4. Run the program using the command:

```
deno run --allow-net --allow-env main.ts
```

### Usage

When the program is running, it will connect to the Twitch chat servers and
begin outputting messages to the console. To send a message to the Twitch chat,
you simply need to send a message to the channel that the program is connected
to.

### Configuration Options

You can change the configuration options for the program using environment
variables. Here is a list of the options and their default values:

- `TWITCH_USERNAME` - Twitch username. Default is undefined.
- `TWITCH_OAUTH_TOKEN` - OAuth token for your Twitch account. Default is
  undefined.
- `TWITCH_CHANNEL` - Twitch channel name that the program will be connected to.
  Default is undefined.

### Notes

- This program does not send messages to the Twitch chat. It only reads messages
  and outputs them to the console.
- To use a WebSocket connection to the Twitch chat servers, you need to have an
  OAuth token for your Twitch account. You can learn more about this on the
  [Twitch Developer Documentation](https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/)
  page.
- If you have trouble connecting to the Twitch chat, make sure your OAuth token
  is valid and that you have specified the correct username and channel name.
- If you get a "network is unreachable" error when trying to connect to the
  Twitch chat servers, make sure you have Internet access and that your firewall
  is not blocking the connection.
