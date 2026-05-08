import Link from "next/link";

const links = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "/dashboard", label: "Dashboard" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-400/30">
            <span className="h-4 w-4 rounded-full bg-cyan-400" />
          </span>
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-cyan-300">
              NEXABOARD
            </p>
            <p className="text-xs text-slate-400">SaaS analytics hub</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/dashboard"
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
        >
          Open app
        </Link>
      </div>
    </header>
  );
}
