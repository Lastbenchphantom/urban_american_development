import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { NAVIGATION } from "../../data/navigation";
import { SITE_NAME } from "../../lib/constants";
import { Container } from "./Container";

/**
 * Site header with navigation, mobile menu, and active states.
 */
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <Container className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="text-navy-900 font-bold text-xl tracking-tight">
              {SITE_NAME}
            </span>
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAVIGATION.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleNavClick}
              className={[
                "transition-colors",
                isActive(item.href)
                  ? "text-navy-900 font-semibold"
                  : "text-slate-600 hover:text-navy-900",
              ].join(" ")}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/contact"
            className="px-5 py-2 rounded-lg bg-navy-900 text-white text-sm font-medium hover:bg-navy-800 transition-colors"
            onClick={handleNavClick}
          >
            Contact
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-navy-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </Container>

      {/* Mobile navigation panel */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
            <span className="font-bold text-navy-900 text-lg">
              {SITE_NAME}
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-navy-900"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="px-6 py-6 space-y-4">
            {NAVIGATION.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className={[
                  "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-navy-50 text-navy-900 font-semibold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-navy-900",
                ].join(" ")}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-6 border-t border-slate-200">
              <a
                href="/contact"
                className="block w-full px-4 py-3 rounded-lg bg-navy-900 text-white text-sm font-medium text-center hover:bg-navy-800 transition-colors"
                onClick={handleNavClick}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
