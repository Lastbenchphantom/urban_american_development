import React from "react";

/**
 * Breadcrumb navigation component.
 */
export function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <nav className="flex flex-wrap items-center gap-1 text-xs text-slate-500 mb-4" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <React.Fragment key={item.label}>
          {i > 0 && <span className="mx-1">/</span>}
          {item.href ? (
            <a href={item.href} className="hover:text-navy-900 transition-colors">
              {item.label}
            </a>
          ) : (
            <span className="text-slate-900 font-medium" aria-current="page">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
