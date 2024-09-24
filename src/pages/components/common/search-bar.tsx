import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="relative border border-[#4D4D4D] rounded-full flex items-center gap-2  w-auto 2xl:h-[52px] h-[40px] 2xl:px-5 px-4">
      <Search className="text-[#6A6A6A]" size={16} />
      <input
        type="text"
        className="outline-0 2xl:text-lg text-base w-full text-[#6A6A6A] bg-transparent"
        placeholder="Search"
      />
    </div>
  );
};
