"use client";

import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#platform", label: "Platform" },
  { href: "#timeline", label: "Timeline" },
  { href: "#experience", label: "Experience" },
  { href: "#get-involved", label: "Get Involved" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/85 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="#top" className="font-bold text-base md:text-lg text-[color:var(--brand)]">
            Gavin Falcón for SMOB
          </a>
        </div>
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-slate-700 dark:text-slate-300 hover:text-[color:var(--brand)] dark:hover:text-[color:var(--brand)] transition"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="#get-involved"
            className="clickable bg-[color:var(--brand)] text-white dark:text-slate-900 px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition"
          >
            Vote
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="clickable md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70"
          >
            <svg
              className="w-5 h-5 text-slate-700 dark:text-slate-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {open ? (
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur">
          <ul className="flex flex-col py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
