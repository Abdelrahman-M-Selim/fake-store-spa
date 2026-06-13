const SkeletonCard = () => {
  return (
    <div className="glass rounded-2xl overflow-hidden">
      <div className="h-52 sm:h-56 shimmer-bg" />
      <div className="p-4 sm:p-5 space-y-3">
        <div className="h-4 w-3/4 rounded-lg shimmer-bg" />
        <div className="h-4 w-1/2 rounded-lg shimmer-bg" />
        <div className="h-3 w-1/3 rounded-lg shimmer-bg" />
        <div className="flex items-center justify-between pt-1">
          <div className="h-6 w-20 rounded-lg shimmer-bg" />
          <div className="w-10 h-10 rounded-xl shimmer-bg" />
        </div>
      </div>
    </div>
  );
};

const SkeletonGrid = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {Array.from({ length: count }, (_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
};

export { SkeletonCard, SkeletonGrid };
export default SkeletonGrid;
