import { Search } from "@mui/icons-material";

const SearchInput = () => {
  return (
    <div class="w-full flex items-center justify-center">
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-[#5D5FEF]" />
            </div>
            <input
                type="text"
                className="w-full pl-10 pr-4 py-2 text-sm text-gray-700 bg-[#F9FAFB] border-1 rounded-lg shadow-sm focus:ring focus:ring-[#5D5FEF] focus:outline-none focus:border-[#5D5FEF]"
                placeholder="Search here..."
            />
        </div>
    </div>
  )
};

export default SearchInput;