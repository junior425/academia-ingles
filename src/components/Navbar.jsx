import { ACADEMY_NAME, ACADEMY_TAGLINE } from "../config";

const LINKS = [
  ["Metodología", "#metodologia"],
  ["Currículo", "#curriculo"],
  ["Comparativa", "#comparativa"],
  ["Test de nivel", "#test"],
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-sky-500 text-sm font-extrabold text-slate-950">
            FP
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold tracking-tight text-white">
              {ACADEMY_NAME}
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
              {ACADEMY_TAGLINE}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 lg:flex">
          {LINKS.map(([label, href]) => (
            <a key={href} className="transition hover:text-white" href={href}>
              {label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-emerald-400"
        >
          Diagnóstico gratis
        </a>
      </nav>
    </header>
  );
}
