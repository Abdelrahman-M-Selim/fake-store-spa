import { memo } from "react";
import { ShoppingBag } from "lucide-react";

const Header = memo(({ productCount }) => {
  return (
    <header className="relative px-4 sm:px-6 lg:px-8 pt-8 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
                <span className="gradient-text">FakeStore</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 font-medium -mt-0.5">
                Premium Product Explorer
              </p>
            </div>
          </div>

          {productCount > 0 && (
            <div className="glass rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
              <span className="text-xs sm:text-sm font-semibold text-slate-300">
                {productCount}{" "}
                <span className="text-slate-500 hidden sm:inline">products</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
