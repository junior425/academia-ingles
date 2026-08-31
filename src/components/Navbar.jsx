import { ACADEMY_NAME } from "../config";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 text-sm font-bold text-white">
            FP
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            {ACADEMY_NAME}
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a className="transition hover:text-indigo-600" href="#metodologia">
            Metodología
          </a>
          <a className="transition hover:text-indigo-600" href="#test">
            Test de nivel
          </a>
          <a className="transition hover:text-indigo-600" href="#contacto">
            Contacto
          </a>
        </div>
        <a
          href="#test"
          className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Test gratis
        </a>
      </nav>
    </header>
  );
}
