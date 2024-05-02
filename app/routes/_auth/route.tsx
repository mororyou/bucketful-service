import { Outlet } from '@remix-run/react';

export default function AuthRouteOutlet() {
  return (
    <div className="grid min-h-screen items-center justify-center gap-6 px-4 md:px-6">
      <div className="space-y-6 md:min-w-[480px]">
        <Outlet />
      </div>
    </div>
  );
}
