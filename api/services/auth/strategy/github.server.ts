import { GitHubStrategy } from 'remix-auth-github';
import { loginGithubAccount } from '../providers/github/login';
import { registerGithubAccount } from '../providers/github/register';

const githubStrategy = new GitHubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID!,
    clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    callbackURL: process.env.GITHUB_CALLBACK_URL!,
  },
  async ({ profile }) => {
    if (
      !(
        process.env.GITHUB_CLIENT_ID &&
        process.env.GITHUB_CLIENT_SECRET &&
        process.env.GITHUB_CALLBACK_URL
      )
    ) {
      throw new Error(
        'GITHUB_CLIENT_ID、GITHUB_CLIENT_SECRET、GITHUB_CALLBACK_URLが設定されていません。',
      );
    }

    const user = await loginGithubAccount(profile);

    if (user) return user;

    const newUser = await registerGithubAccount(profile);

    return newUser;
  },
);

export default githubStrategy;
