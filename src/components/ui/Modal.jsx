import { X } from "lucide-react";

/**
 * Simple accessible modal dialog.
 */
export function Modal({ isOpen, onClose, title, children, className = "" }) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        role="presentation"
      />
      <div
        className={[
          "fixed left-[50%] top-[50%] z-50 w-full max-w-lg -translate-x-[50%] -translate-y-[50%]",
          "rounded-xl bg-white p-6 shadow-2xl outline-none",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 id="modal-title" className="text-lg font-semibold text-slate-900">
            {title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="text-slate-600 leading-relaxed">{children}</div>
      </div>
    </>
  );
}
