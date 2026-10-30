"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar({ links = [], homeHref = "/", labels = {}, alternate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Apply dark mode class to <html> element
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav
      aria-label={labels.mainNav}
      className="w-full bg-background border-b border-border fixed top-0 left-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href={homeHref}
          aria-label={labels.homeLink}
          className="text-2xl font-bold text-foreground"
        >
          Cryptivio
        </a>

        {/* Desktop Links Centered */}
        <div className="hidden md:flex flex-1 justify-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Language switcher + Dark Mode Toggle (Desktop + Mobile) */}
        <div className="flex items-center gap-2">
          {alternate && (
            <a
              href={alternate.href}
              hrefLang={alternate.lang}
              lang={alternate.lang}
              aria-label={labels.switchLanguage}
              className="px-3 py-1.5 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition"
            >
              {alternate.label}
            </a>
          )}

          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={labels.toggleTheme}
            className="p-2 rounded-full border border-border hover:bg-primary/10 transition"
          >
            {darkMode ? (
              <Sun size={20} aria-hidden="true" />
            ) : (
              <Moon size={20} aria-hidden="true" />
            )}
          </button>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? labels.closeMenu : labels.openMenu}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="p-2 rounded hover:bg-primary/10 transition"
            >
              {mobileOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden flex flex-col gap-4 mt-2 pb-4 text-center"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
