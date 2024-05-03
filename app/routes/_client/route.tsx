import { LoaderFunctionArgs } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import { authenticator } from '~api/services/auth/auth.server';
import { failureRedirectLoginUrl } from '~com/constants/configs';

export async function loader({ request }: LoaderFunctionArgs) {
  return authenticator.isAuthenticated(request, {
    failureRedirect: failureRedirectLoginUrl,
  });
}

export default function DashboardOutlet() {
  return (
    <div className="grid min-h-screen items-center justify-center gap-6 px-4 md:px-6">
      <Outlet />
    </div>
  );
}
