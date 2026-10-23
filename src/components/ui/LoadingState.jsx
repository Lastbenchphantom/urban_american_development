/**
 * Simple loading spinner.
 */
export function LoadingState({ message = "Loading...", className = "" }) {
  return (
    <div
      className={["flex flex-col items-center justify-center py-20 gap-3 text-slate-600", className].filter(Boolean).join(" ")}
      role="status"
      aria-live="polite"
    >
      <div className="w-8 h-8 border-4 border-slate-200 border-t-navy-900 rounded-full animate-spin" />
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
}
