"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/results", label: "Results" },
  { href: "/score", label: "Score" },
  { href: "/apply", label: "Apply" },
];

function openCalendly() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const win = window as any;
  if (win.Calendly) {
    win.Calendly.initPopupWidget({
      url: "https://calendly.com/ghostoperator/offer",
    });
  } else {
    window.location.href = "https://calendly.com/ghostoperator/offer";
  }
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-navy">
            The Ghost Factory
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={openCalendly}
            className="gold-gradient rounded-lg px-5 py-2.5 text-sm font-semibold text-navy transition-all hover:shadow-lg cursor-pointer"
          >
            Book a Call
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-border/40 bg-white md:hidden">
          <nav className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                openCalendly();
              }}
              className="gold-gradient mt-2 rounded-lg px-5 py-3 text-center text-sm font-semibold text-navy cursor-pointer"
            >
              Book a Call
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
