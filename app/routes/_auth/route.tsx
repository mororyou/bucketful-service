import { Outlet } from '@remix-run/react';

export default function AuthRouteOutlet() {
  return (
    <div className="grid min-h-screen items-center justify-center">
      <Outlet />
    </div>
  );
}
