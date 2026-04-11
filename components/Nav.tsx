const links = [
  { href: "#about", label: "About" },
  { href: "#platform", label: "Platform" },
  { href: "#experience", label: "Experience" },
  { href: "#get-involved", label: "Get Involved" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-bold text-lg text-[color:var(--brand)]">
          Gavin Falcón for SMOB
        </a>
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-[color:var(--brand)] transition">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#get-involved"
          className="bg-[color:var(--brand)] text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition"
        >
          Vote
        </a>
      </div>
    </nav>
  );
}
