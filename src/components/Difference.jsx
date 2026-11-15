import { ACADEMY_NAME } from "../config";
import { COMPARISON } from "../data/content";

export default function Difference() {
  return (
    <section id="diferencia" className="border-t border-line py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            ¿Por qué sigues sin hablar inglés después de haber estudiado antes?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pearl">
            Porque las academias tradicionales siguen usando metodologías
            obsoletas del siglo pasado. Nosotros cambiamos las reglas del juego:
          </p>
        </div>

        <div className="mt-12 hidden grid-cols-2 gap-4 px-1 md:grid">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-pearl/60">
            Metodología Obsoleta
          </p>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-gold">
            {ACADEMY_NAME}
          </p>
        </div>

        <ul className="mt-6 space-y-4 md:mt-4">
          {COMPARISON.map((row) => (
            <li key={row.natural} className="grid gap-3 md:grid-cols-2 md:gap-4">
              <div className="rounded-2xl border border-line bg-card/50 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-pearl/50 md:hidden">
                  Metodología Obsoleta
                </p>
                <p className="mt-2 flex gap-3 leading-relaxed text-pearl/70 md:mt-0">
                  <span className="font-bold text-red-400" aria-hidden="true">
                    ✕
                  </span>
                  {row.obsolete}
                </p>
              </div>
              <div className="rounded-2xl border border-gold/25 bg-card p-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold md:hidden">
                  {ACADEMY_NAME}
                </p>
                <p className="mt-2 flex gap-3 font-medium leading-relaxed text-white md:mt-0">
                  <span className="font-bold text-emerald" aria-hidden="true">
                    ✓
                  </span>
                  {row.natural}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
