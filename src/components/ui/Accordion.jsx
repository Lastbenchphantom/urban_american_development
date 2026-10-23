import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

/**
 * Accessible accordion component.
 * single: whether only one item can be open at a time
 */
export function Accordion({ items, single = true, className = "" }) {
  const [open, setOpen] = useState(single ? (items[0] && items[0].id) : []);

  const isOpen = (id) =>
    single ? open === id : (open || []).includes(id);

  const toggle = (id) => {
    if (single) {
      setOpen(open === id ? null : id);
    } else {
      setOpen((prev) => {
        const arr = prev || [];
        if (arr.includes(id)) return arr.filter((x) => x !== id);
        return [...arr, id];
      });
    }
  };

  return (
    <div className={["space-y-2", className].filter(Boolean).join(" ")}>
      {items.map((item) => (
        <div key={item.id} className="border border-slate-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggle(item.id)}
            aria-expanded={isOpen(item.id)}
            aria-controls={`accordion-panel-${item.id}`}
            className="flex w-full items-center justify-between px-5 py-4 text-left bg-slate-50 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-navy-900"
          >
            <span
              className="text-slate-900 font-medium"
              id={`accordion-header-${item.id}`}
            >
              {item.title}
            </span>
            {isOpen(item.id) ? (
              <ChevronUp className="w-4 h-4 text-slate-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-500" />
            )}
          </button>
          <div
            id={`accordion-panel-${item.id}`}
            hidden={!isOpen(item.id)}
            className="bg-white px-5 pb-4"
          >
            <p className="text-slate-600 leading-relaxed">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
