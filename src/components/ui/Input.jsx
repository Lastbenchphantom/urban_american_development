/**
 * Styled text input with label and validation message support.
 */
export function Input({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  error,
  disabled,
  className = "",
  ...props
}) {
  return (
    <div className="mb-5">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        aria-invalid={!!error}
        aria-required={required}
        className={[
          "block w-full rounded-lg border px-4 py-2.5 text-slate-900 placeholder-slate-400",
          "focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent",
          "transition-colors",
          error ? "border-rose-500 focus:ring-rose-500" : "border-slate-300",
          disabled ? "bg-slate-100 text-slate-500 cursor-not-allowed" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-rose-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
