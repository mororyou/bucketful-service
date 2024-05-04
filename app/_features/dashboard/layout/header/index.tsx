import { Link } from '@remix-run/react';
import PackageIcon from '~app/components/atoms/icons/package';
import DashboardHeaderDropDownMenu from './dropdown-menu';
import DashboardHeaderSearch from './search';

export default function DashboardHeader() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 lg:h-[60px]">
      <Link className="lg:hidden" to="#">
        <PackageIcon className="h-6 w-6" />
        <span className="sr-only">Home</span>
      </Link>
      <div className="flex-1">
        <h1 className="text-lg font-semibold">Recent Orders</h1>
      </div>
      <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <DashboardHeaderSearch />
        <DashboardHeaderDropDownMenu />
      </div>
    </header>
  );
}
