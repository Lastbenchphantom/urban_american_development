/**
 * Reusable button component with consistent styling.
 * variant: "primary" | "secondary" | "outline" | "ghost" | "text"
 * size: "sm" | "md" | "lg"
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  type = "button",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-navy-900 text-white hover:bg-navy-800 focus-visible:ring-navy-900",
    secondary:
      "bg-slate-100 text-slate-900 hover:bg-slate-200 focus-visible:ring-slate-400",
    outline:
      "border border-slate-300 bg-transparent text-slate-900 hover:bg-slate-50 focus-visible:ring-slate-400",
    ghost:
      "bg-transparent text-slate-600 hover:bg-slate-100 focus-visible:ring-slate-400",
    text: "bg-transparent text-slate-600 hover:underline focus-visible:ring-transparent",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
