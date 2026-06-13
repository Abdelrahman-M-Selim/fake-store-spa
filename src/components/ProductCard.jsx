import { memo } from "react";
import { Star, ShoppingCart } from "lucide-react";

const ProductCard = memo(({ product, index }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${
          i < Math.round(rating)
            ? "text-amber-400 fill-amber-400"
            : "text-slate-600"
        }`}
      />
    ));
  };

  return (
    <div
      className="glass rounded-2xl overflow-hidden hover-glow transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 animate-fadeIn group"
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: "backwards" }}
    >
      <div className="relative h-52 sm:h-56 bg-white/[0.03] p-6 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 z-20">
          <span className="glass px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-semibold text-indigo-300 capitalize">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-5 space-y-3">
        <h3 className="text-sm sm:text-base font-semibold text-slate-200 line-clamp-2 leading-snug min-h-[2.5rem]">
          {product.title}
        </h3>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">{renderStars(product.rating.rate)}</div>
          <span className="text-xs text-slate-500 font-medium">
            ({product.rating.count})
          </span>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="flex items-baseline gap-1">
            <span className="text-lg sm:text-xl font-bold gradient-text">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <button
            id={`add-to-cart-${product.id}`}
            className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 flex items-center justify-center hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <ShoppingCart className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = "ProductCard";

export default ProductCard;
