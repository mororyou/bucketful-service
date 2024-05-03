import { AuthorizationError } from 'remix-auth';
import { GoogleProfile } from 'remix-auth-google';
import getUserDataService from '~api/services/produce-public/user/getDataService';

export async function loginGoogleAccount(profile: GoogleProfile) {
  try {
    if (!profile.emails) {
      throw new AuthorizationError('メールアドレスが取得できませんでした。');
    }

    const user = await getUserDataService({
      email: profile.emails[0].value,
    });

    if (!user) return null;

    if (user.leave) throw new AuthorizationError('退会済みユーザーです。');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = user;

    return userWithoutPassword;
  } catch (error) {
    console.error(error);
  }
}
