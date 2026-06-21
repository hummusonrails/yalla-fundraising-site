"use client";

import { useState } from "react";

const NAV = [
  { label: "Approach", href: "#approach" },
  { label: "How I Help", href: "#services" },
  { label: "Who I Work With", href: "#clients" },
  { label: "About", href: "#about" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cream-line/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="group flex items-baseline gap-2">
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            Yalla
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-terracotta">
            Fundraising
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-ink-2 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#book"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper shadow-soft transition-all hover:bg-terracotta sm:inline-flex"
          >
            Book a call
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream-line text-ink md:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              {open ? (
                <path
                  d="M4 4l10 10M14 4L4 14"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M2 5h14M2 9h14M2 13h14"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-cream-line bg-paper px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2.5 text-base font-medium text-ink-2 hover:bg-paper-2 hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-paper"
              >
                Book a call
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
