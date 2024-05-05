import SidebarContainer from './content';
import SidebarFooter from './footer';
import SidebarHeader from './header';

export default function DashboardSidebar() {
  return (
    <div className="hidden border-r bg-gray-100/40 dark:bg-gray-800/40 lg:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <SidebarHeader />

        <SidebarContainer />

        <SidebarFooter />
      </div>
    </div>
  );
}
