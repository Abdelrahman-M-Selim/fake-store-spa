import { memo } from "react";
import { LayoutGrid, Cpu, Gem, Shirt } from "lucide-react";

const CATEGORY_ICONS = {
  all: LayoutGrid,
  electronics: Cpu,
  jewelery: Gem,
  "men's clothing": Shirt,
  "women's clothing": Shirt,
};

const CATEGORY_LABELS = {
  all: "All",
  electronics: "Electronics",
  jewelery: "Jewelery",
  "men's clothing": "Men's",
  "women's clothing": "Women's",
};

const CategoryFilter = memo(({ categories, activeCategory, onCategoryChange }) => {
  const allCategories = ["all", ...categories];

  return (
    <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
      {allCategories.map((category) => {
        const isActive = category === activeCategory;
        const Icon = CATEGORY_ICONS[category] || LayoutGrid;

        return (
          <button
            id={`filter-${category.replace(/\s+/g, "-")}`}
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
              isActive
                ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/25 scale-105"
                : "glass text-slate-400 hover:text-slate-200 hover:bg-white/[0.06]"
            }`}
          >
            <Icon className="w-4 h-4" />
            {CATEGORY_LABELS[category] || category}
          </button>
        );
      })}
    </div>
  );
});

CategoryFilter.displayName = "CategoryFilter";

export default CategoryFilter;
