import { Link } from '@remix-run/react';
import { Button } from '~app/components/atoms/forms/button';
import BellIcon from '~app/components/atoms/icons/bell';
import PackageIcon from '~app/components/atoms/icons/package';
import { APP_NAME } from '~com/constants/configs';

export default function SidebarHeader() {
  return (
    <div className="flex h-[60px] items-center border-b px-6">
      <Link className="flex items-center gap-2 font-semibold" to="#">
        <PackageIcon className="h-6 w-6" />
        <span className="">{APP_NAME}</span>
      </Link>
      <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
        <BellIcon className="h-4 w-4" />
        <span className="sr-only">Toggle notifications</span>
      </Button>
    </div>
  );
}
