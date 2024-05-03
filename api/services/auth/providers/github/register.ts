import { GitHubProfile } from 'remix-auth-github';
import registerUserService from '~api/services/produce-public/user/registerService';

export async function registerGithubAccount(profile: GitHubProfile) {
  try {
    if (!profile.emails) {
      throw new Error('メールアドレスが取得できませんでした。');
    }

    const newUser = await registerUserService({
      name: profile.displayName,
      email: profile.emails[0].value,
      password: '',
      avator: profile.photos
        ? profile.photos[0].value
        : '/images/avator/default.png',
      provider: 'github',
      role: 'guest',
    });

    return newUser;
  } catch (error) {
    console.log(error);
  }
}
