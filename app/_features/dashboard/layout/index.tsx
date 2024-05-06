import { useAuthUser } from '~app/routes/_client/route';
import ProfileAlert from '../profle-alert';
import DashboardHeader from './header';
import DashboardSidebar from './sidebar';

export default function DashboardLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const user = useAuthUser();
  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <DashboardSidebar />
      <div className="flex flex-col">
        <DashboardHeader title={title} />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          {user.createdAt === user.updatedAt && <ProfileAlert />}
          <div className="rounded-lg border p-2 shadow-sm">{children}</div>
        </main>
      </div>
    </div>
  );
}
