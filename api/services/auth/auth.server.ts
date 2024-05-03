import { Authenticator } from 'remix-auth';
import { sessionStorage } from './session.server';
import discordStrategy from './strategy/discord.server';
import githubStrategy from './strategy/github.server';
import googleStrategy from './strategy/google.server';
import formStrategy from './strategy/mail.server';

const authenticator = new Authenticator(sessionStorage);

authenticator.use(formStrategy, 'user-pass');
authenticator.use(googleStrategy, 'user-google');
authenticator.use(discordStrategy, 'user-discord');
authenticator.use(githubStrategy, 'user-github');

export { authenticator };
