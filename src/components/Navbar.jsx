import { ACADEMY_NAME, DEMO_WHATSAPP_URL } from "../config";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gold text-sm font-extrabold text-ink">
            NF
          </span>
          <span className="text-base font-extrabold tracking-tight text-white">
            {ACADEMY_NAME}
          </span>
        </a>
        <a
          href={DEMO_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-ink transition hover:bg-gold-hover sm:inline-flex"
        >
          Agendar Demo
        </a>
      </nav>
    </header>
  );
}
