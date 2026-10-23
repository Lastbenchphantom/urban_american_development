/**
 * Generic empty state component.
 */
export function EmptyState({
  icon,
  title,
  description,
  action,
  className = "",
}) {
  return (
    <div className={["flex flex-col items-center justify-center py-20 text-center", className].filter(Boolean).join(" ")}>
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
      {description && (
        <p className="text-slate-600 max-w-sm mb-6">{description}</p>
      )}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
