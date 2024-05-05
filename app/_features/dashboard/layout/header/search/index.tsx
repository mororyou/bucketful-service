import { Input } from '~app/components/atoms/forms/input';
import SearchIcon from '~app/components/atoms/icons/serch';

export default function DashboardHeaderSearch() {
  return (
    <form className="ml-auto flex-1 sm:flex-initial">
      <div className="relative">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
        <Input
          className="bg-white pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
          placeholder="Search orders..."
          type="search"
        />
      </div>
    </form>
  );
}
