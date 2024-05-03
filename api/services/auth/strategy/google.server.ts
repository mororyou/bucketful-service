import { GoogleStrategy } from 'remix-auth-google';
import { loginGoogleAccount } from '../providers/google/login';
import { registerGoogleAccount } from '../providers/google/register';

const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: process.env.GOOGLE_CALLBACK_URL!,
  },
  async ({ profile }) => {
    if (
      !(
        process.env.GOOGLE_CLIENT_ID &&
        process.env.GOOGLE_CLIENT_SECRET &&
        process.env.GOOGLE_CALLBACK_URL
      )
    ) {
      throw new Error(
        'GOOGLE_CLIENT_ID、GOOGLE_CLIENT_SECRET、GOOGLE_CALLBACK_URLが設定されていません。',
      );
    }

    const user = await loginGoogleAccount(profile);

    if (user) return user;

    const newUser = await registerGoogleAccount(profile);

    return newUser;
  },
);

export default googleStrategy;
