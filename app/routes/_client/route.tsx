import { LoaderFunctionArgs, json } from '@remix-run/node';
import { Outlet, useLoaderData, useOutletContext } from '@remix-run/react';
import { authenticator } from '~api/services/auth/auth.server';
import { failureRedirectLoginUrl } from '~com/constants/configs';
import { AuthUser } from '~com/schemas/types/user';

export async function loader({ request }: LoaderFunctionArgs) {
  const user = (await authenticator.isAuthenticated(request, {
    failureRedirect: failureRedirectLoginUrl,
  })) as AuthUser;
  return json({
    user,
  });
}

export function useAuthUser() {
  return useOutletContext<AuthUser>();
}

export default function DashboardOutlet() {
  const { user } = useLoaderData<typeof loader>();
  return <Outlet context={user} />;
}
