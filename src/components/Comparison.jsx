import { COMPARISON_ROWS } from "../data/comparison";

export default function Comparison() {
  return (
    <section
      id="comparativa"
      className="border-t border-white/5 bg-slate-900 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
            Comparativa
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Instituto tradicional vs. nuestro método
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            La diferencia no es el precio: es qué tan rápido su equipo empieza a
            producir resultados en inglés.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
          <table className="hidden w-full border-collapse text-left md:table">
            <thead>
              <tr className="bg-slate-950/80">
                <th className="w-1/5 px-6 py-5 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  Criterio
                </th>
                <th className="w-2/5 px-6 py-5 text-sm font-bold text-slate-300">
                  Instituto tradicional
                </th>
                <th className="w-2/5 px-6 py-5 text-sm font-bold text-emerald-300">
                  Nuestro método (ESP + Lexical Chunking)
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, index) => (
                <tr
                  key={row.criterion}
                  className={index % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"}
                >
                  <th className="px-6 py-6 align-top text-sm font-bold text-white">
                    {row.criterion}
                  </th>
                  <td className="px-6 py-6 align-top text-sm leading-relaxed text-slate-400">
                    <span className="mr-2 text-rose-400">✕</span>
                    {row.traditional}
                  </td>
                  <td className="border-l border-emerald-400/20 bg-emerald-500/[0.05] px-6 py-6 align-top text-sm leading-relaxed text-slate-200">
                    <span className="mr-2 text-emerald-400">✓</span>
                    {row.ours}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="divide-y divide-white/10 md:hidden">
            {COMPARISON_ROWS.map((row) => (
              <div key={row.criterion} className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  {row.criterion}
                </p>
                <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-xs font-bold text-slate-400">
                    Instituto tradicional
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    <span className="mr-2 text-rose-400">✕</span>
                    {row.traditional}
                  </p>
                </div>
                <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-500/[0.07] p-4">
                  <p className="text-xs font-bold text-emerald-300">
                    Nuestro método
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">
                    <span className="mr-2 text-emerald-400">✓</span>
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
