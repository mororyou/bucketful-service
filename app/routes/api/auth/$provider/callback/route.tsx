import { LoaderFunctionArgs } from '@remix-run/node';
import { match } from 'ts-pattern';
import { authenticator } from '~api/services/auth/auth.server';
import {
  FAILURE_REDIRECT_LOGIN_URL,
  SUCCESS_REDIRECT_URL,
} from '~com/constants/configs';
import { Providers } from '~com/schemas/types/user';

export async function loader({ params, request }: LoaderFunctionArgs) {
  const provider = match(params.provider as Providers)
    .with('discord', () => {
      return 'user-discord';
    })
    .with('google', () => {
      return 'user-google';
    })
    .with('github', () => {
      return 'user-github';
    })
    .otherwise(() => {
      return 'unknown';
    });

  if (provider === 'unknown') {
    return {
      status: 404,
      redirect: FAILURE_REDIRECT_LOGIN_URL,
    };
  }

  return authenticator.authenticate(provider, request, {
    successRedirect: SUCCESS_REDIRECT_URL,
    failureRedirect: FAILURE_REDIRECT_LOGIN_URL,
  });
}
