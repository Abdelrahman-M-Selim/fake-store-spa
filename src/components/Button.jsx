import { memo } from "react";

const VARIANTS = {
  primary:
    "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105",
  secondary:
    "glass text-slate-300 hover:text-white hover:bg-white/[0.08]",
  ghost:
    "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]",
};

const SIZES = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

const Button = memo(({ children, variant = "primary", size = "md", className = "", ...props }) => {
  return (
    <button
      className={`inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
