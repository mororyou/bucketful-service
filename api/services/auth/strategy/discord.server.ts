import { DiscordStrategy } from 'remix-auth-discord';
import { loginDiscordAccount } from '../providers/discord/login';
import { registerDiscordAccount } from '../providers/discord/register';

const discordStrategy = new DiscordStrategy(
  {
    clientID: process.env.DISCORD_CLIENT!,
    clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    callbackURL: process.env.DISCORDE_CALLBACK_URL!,
  },
  async ({ profile }) => {
    if (
      !(
        process.env.DISCORD_CLIENT &&
        process.env.DISCORD_CLIENT_SECRET &&
        process.env.DISCORDE_CALLBACK_URL
      )
    ) {
      throw new Error(
        'DISCORD_CLIENT、DISCORD_CLIENT_SECRET、DISCORD_CALLBACK_URLが設定されていません。',
      );
    }

    const user = await loginDiscordAccount(profile);

    if (user) return user;

    const newUser = await registerDiscordAccount(profile);

    return newUser;
  },
);

export default discordStrategy;
