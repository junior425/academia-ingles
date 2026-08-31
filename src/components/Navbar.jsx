import { ACADEMY_NAME, ACADEMY_TAGLINE } from "../config";

const LINKS = [
  ["Programas", "#programas"],
  ["Metodología", "#metodologia"],
  ["Modalidad", "#modalidad"],
  ["Test de nivel", "#test"],
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 via-aqua-400 to-mango-400 text-sm font-extrabold text-white shadow-md shadow-brand-500/30">
            FP
          </span>
          <span className="leading-tight">
            <span className="block text-base font-extrabold tracking-tight text-brand-900">
              {ACADEMY_NAME}
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
              {ACADEMY_TAGLINE}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex">
          {LINKS.map(([label, href]) => (
            <a key={href} className="transition hover:text-brand-600" href={href}>
              {label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="rounded-full bg-mango-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-mango-500/30 transition hover:bg-mango-600"
        >
          Agendar clases
        </a>
      </nav>
    </header>
  );
}
