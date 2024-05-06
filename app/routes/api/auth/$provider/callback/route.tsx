import { LoaderFunctionArgs } from '@remix-run/node';
import { match } from 'ts-pattern';
import { authenticator } from '~api/services/auth/auth.server';
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
      redirect: '/login',
    };
  }

  return authenticator.authenticate(provider, request, {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
  });
}
