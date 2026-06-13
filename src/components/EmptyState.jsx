import { SearchX } from "lucide-react";

const EmptyState = ({ searchQuery, activeCategory }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-5 animate-fadeIn">
      <div className="w-20 h-20 rounded-2xl bg-slate-800/50 flex items-center justify-center animate-float">
        <SearchX className="w-10 h-10 text-slate-500" />
      </div>
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold text-slate-200">
          No results found
        </h3>
        <p className="text-sm text-slate-400 max-w-md">
          {searchQuery
            ? `No products matching "${searchQuery}"${activeCategory !== "all" ? ` in ${activeCategory}` : ""}`
            : `No products found in this category`}
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
