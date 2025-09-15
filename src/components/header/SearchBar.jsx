import { CiSearch } from "react-icons/ci";
import { Input } from "@base-ui-components/react";
const SearchBar = () => {
  return (
    <div className="flex items-center border border-[#E6E6E6] rounded-md overflow-hidden">
      <Input className="flex-1 min-w-0 px-3 py-[7px] border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-300" />
      <button className="flex items-center gap-1 bg-blue-900 text-white px-4 sm:py-[8px] py-[10px] cursor-pointer hover:bg-blue-900">
        <CiSearch size={20} />
        <span className="hidden sm:block">Search</span>
      </button>
    </div>
  );
};

export default SearchBar;
