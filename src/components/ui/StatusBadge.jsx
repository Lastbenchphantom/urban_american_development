/**
 * Status badge for project status, availability, etc.
 * variant: "info" | "success" | "warning" | "neutral"
 */
export function StatusBadge({ children, variant = "neutral", className = "" }) {
  const variants = {
    info: "bg-blue-50 text-blue-700 border-blue-100",
    success: "bg-green-50 text-green-700 border-green-100",
    warning: "bg-amber-50 text-amber-700 border-amber-100",
    neutral: "bg-slate-50 text-slate-700 border-slate-200",
  };
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wider",
        variants[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
