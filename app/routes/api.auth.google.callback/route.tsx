import { LoaderFunctionArgs } from '@remix-run/node';
import { authenticator } from '~api/services/auth/auth.server';

export const loader = ({ request }: LoaderFunctionArgs) => {
  return authenticator.authenticate('user-google', request, {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
  });
};
