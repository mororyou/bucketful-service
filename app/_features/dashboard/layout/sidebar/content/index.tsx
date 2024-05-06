import { Link } from '@remix-run/react';
import BucketIcon from '~app/components/atoms/icons/bucket';
import CompleteIcon from '~app/components/atoms/icons/complete';
import DashboardIcon from '~app/components/atoms/icons/dashboard';
import FolderIcon from '~app/components/atoms/icons/folder';
import SettingIcon from '~app/components/atoms/icons/setting';

export default function SidebarContainer() {
  return (
    <div className="flex-1 overflow-auto py-2">
      <nav className="grid items-start gap-y-2 px-4 text-sm font-medium">
        <Link
          to={'/dashboard'}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
        >
          <DashboardIcon className="h-4 w-4 text-gray-500 hover:text-gray-900" />
          Dashboard
        </Link>
        <Link
          to={'/bucket'}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
        >
          <BucketIcon className="h-4 w-4 text-gray-500 hover:text-gray-900" />
          バケットリスト
        </Link>
        <Link
          to={'/bucket/archive'}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
        >
          <CompleteIcon className="h-4 w-4 text-gray-500 hover:text-gray-900" />
          バケットリスト（アーカイブ）
        </Link>
        <Link
          to={'/category'}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
        >
          <FolderIcon className="h-4 w-4 text-gray-500 hover:text-gray-900" />
          カテゴリ一覧
        </Link>
        <Link
          to={'/setting'}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
        >
          <SettingIcon className="h-4 w-4 text-gray-500 hover:text-gray-900" />
          設定一覧
        </Link>
      </nav>
    </div>
  );
}
