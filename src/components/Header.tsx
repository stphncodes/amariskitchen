"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu after navigating so it doesn't cover the target section
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-b border-ink/10 bg-surface/95 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" aria-label="Amari's Kitchen, back to top" onClick={closeMenu}>
          <Logo />
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink/80 transition-colors hover:text-brand-orange"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href={SITE.whatsappOrderMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-orange px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-orange/30 transition-all hover:scale-105 hover:bg-brand-orange-bright"
          >
            Order Now
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-6 w-6"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-ink/10 bg-surface/95 backdrop-blur transition-[max-height] duration-300 lg:hidden ${
          menuOpen ? "max-h-105 border-t" : "max-h-0"
        }`}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col gap-1 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-base font-semibold text-ink/85 transition-colors hover:bg-ink/5 hover:text-brand-orange"
            >
              {link.label}
            </a>
          ))}
          <a
            href={SITE.whatsappOrderMessage}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-2 rounded-full bg-brand-orange px-6 py-3 text-center text-base font-bold text-white"
          >
            Order Now on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
