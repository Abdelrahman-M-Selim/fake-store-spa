
const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4 animate-fadeIn">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-slate-800" />
        <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-t-indigo-500 border-r-violet-500 animate-spin" />
      </div>
      <p className="text-sm text-slate-400 font-medium">Loading products...</p>
    </div>
  );
};

export default LoadingSpinner;
