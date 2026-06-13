import { memo } from "react";
import { Search, X } from "lucide-react";

const SearchBar = memo(({ value, onChange }) => {
  return (
    <div className="relative group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="w-5 h-5 text-slate-400 group-focus-within:text-indigo-400 transition-colors duration-300" />
      </div>
      <input
        id="search-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products..."
        className="w-full pl-12 pr-12 py-3.5 sm:py-4 rounded-2xl glass-strong text-sm sm:text-base text-slate-200 placeholder-slate-500 outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/40 transition-all duration-300"
      />
      {value && (
        <button
          id="search-clear-btn"
          onClick={() => onChange("")}
          className="absolute inset-y-0 right-0 pr-4 flex items-center"
        >
          <X className="w-5 h-5 text-slate-400 hover:text-slate-200 transition-colors duration-200 cursor-pointer" />
        </button>
      )}
    </div>
  );
});

SearchBar.displayName = "SearchBar";

export default SearchBar;
