import { useState } from "react";
import { INDUSTRIES } from "../data/curriculum";
import { whatsappLink } from "../config";

export default function IndustryCurriculum() {
  const [activeId, setActiveId] = useState(INDUSTRIES[0].id);
  const industry = INDUSTRIES.find((item) => item.id === activeId);

  return (
    <section
      id="curriculo"
      className="border-t border-white/5 bg-slate-950 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky-400">
            Currículo por industria
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Vea el roadmap de 8 meses de su sector
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            Cada programa se construye sobre el objeto social de la empresa.
            Estos son extractos reales de los planes que entregamos.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Sectores"
          className="mt-10 flex flex-wrap gap-3"
        >
          {INDUSTRIES.map((item) => {
            const isActive = item.id === activeId;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(item.id)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? "border-sky-400 bg-sky-400 text-slate-950"
                    : "border-white/15 text-slate-300 hover:border-white/40 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <div className="flex flex-col gap-3 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                {industry.headline}
              </h3>
              <p className="mt-2 text-slate-400">Para: {industry.audience}</p>
            </div>
            <a
              href={whatsappLink(
                `Hola, quiero el roadmap completo de 8 meses del programa de ${industry.label} para mi empresa.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-400"
            >
              Pedir roadmap completo
            </a>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {industry.phases.map((phase, index) => (
              <div
                key={phase.range}
                className="flex flex-col rounded-2xl border border-white/10 bg-slate-900/70 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold text-emerald-300">
                    {phase.range}
                  </span>
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10 text-xs font-bold text-slate-300">
                    {index + 1}
                  </span>
                </div>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  {phase.level}
                </p>
                <p className="mt-3 font-bold text-white">{phase.focus}</p>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-300">
                  {phase.topics.map((topic) => (
                    <li key={topic} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
