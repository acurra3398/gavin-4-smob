import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#platform", label: "Platform" },
  { href: "#timeline", label: "Timeline" },
  { href: "#experience", label: "Experience" },
  { href: "#get-involved", label: "Get Involved" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/85 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="#top" className="font-bold text-lg text-[color:var(--brand)]">
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
        <a
          href="#get-involved"
          className="bg-[color:var(--brand)] text-white dark:text-slate-900 px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition"
        >
          Vote
        </a>
      </div>
    </nav>
  );
}
