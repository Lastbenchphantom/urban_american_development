/**
 * Shared content container with mandatory responsive widths:
 * - Mobile (<768px): 92vw
 * - Tablet (768-1023px): 88vw
 * - Desktop (>=1024px): 80vw
 *
 * Centers horizontally with margin-inline: auto.
 * No restrictive max-width is applied so the desktop container can reach 80vw.
 */
export function Container({ children, className = "" }) {
  return (
    <div
      className={[
        "container",
        "mx-auto",
        "w-[92vw]",
        "md:w-[88vw]",
        "lg:w-[80vw]",
        className,
      ].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
}
