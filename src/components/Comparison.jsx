import { COMPARISON_ROWS } from "../data/comparison";

export default function Comparison() {
  return (
    <section id="comparativa" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-coral-500">
            Comparativa
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
            Instituto tradicional vs. nuestro método
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Sirve igual si buscas capacitar a tu equipo o si quieres hablar en tu
            próximo viaje: la diferencia está en qué tan rápido empiezas a usar
            el inglés.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] bg-slate-50 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200">
          <table className="hidden w-full border-collapse text-left md:table">
            <thead>
              <tr className="bg-white">
                <th className="w-1/5 px-6 py-5 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                  Criterio
                </th>
                <th className="w-2/5 px-6 py-5 text-sm font-bold text-slate-500">
                  Instituto tradicional
                </th>
                <th className="w-2/5 px-6 py-5 text-sm font-bold text-brand-700">
                  Nuestro método (Chunks + programas por público)
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, index) => (
                <tr
                  key={row.criterion}
                  className={index % 2 === 0 ? "bg-white/70" : "bg-transparent"}
                >
                  <th className="px-6 py-6 align-top text-sm font-bold text-brand-900">
                    {row.criterion}
                  </th>
                  <td className="px-6 py-6 align-top text-sm leading-relaxed text-slate-500">
                    <span className="mr-2 font-bold text-coral-500">✕</span>
                    {row.traditional}
                  </td>
                  <td className="border-l border-brand-100 bg-brand-50/70 px-6 py-6 align-top text-sm leading-relaxed text-slate-700">
                    <span className="mr-2 font-bold text-aqua-600">✓</span>
                    {row.ours}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="divide-y divide-slate-200 md:hidden">
            {COMPARISON_ROWS.map((row) => (
              <div key={row.criterion} className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                  {row.criterion}
                </p>
                <div className="mt-4 rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                  <p className="text-xs font-bold text-slate-500">
                    Instituto tradicional
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    <span className="mr-2 font-bold text-coral-500">✕</span>
                    {row.traditional}
                  </p>
                </div>
                <div className="mt-3 rounded-2xl bg-brand-50 p-4 ring-1 ring-brand-100">
                  <p className="text-xs font-bold text-brand-700">
                    Nuestro método
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    <span className="mr-2 font-bold text-aqua-600">✓</span>
                    {row.ours}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
