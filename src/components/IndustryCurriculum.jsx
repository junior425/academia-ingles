import { useState } from "react";
import { INDUSTRIES } from "../data/curriculum";
import { whatsappLink } from "../config";

export default function IndustryCurriculum() {
  const [activeId, setActiveId] = useState(INDUSTRIES[0].id);
  const industry = INDUSTRIES.find((item) => item.id === activeId);

  return (
    <section id="curriculo" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-coral-500">
            Currículo por industria (B2B)
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
            El roadmap de 8 meses de tu sector
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Para empresas y profesionales, cada programa se construye sobre el
            objeto social de la compañía. Estos son extractos reales de los
            planes que entregamos.
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
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                  isActive
                    ? "bg-brand-600 text-white shadow-lg shadow-brand-600/25"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-brand-200"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200 md:p-10">
          <div className="flex flex-col gap-4 border-b border-slate-200 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="text-2xl font-extrabold text-brand-900 sm:text-3xl">
                {industry.headline}
              </h3>
              <p className="mt-2 text-slate-500">Para: {industry.audience}</p>
            </div>
            <a
              href={whatsappLink(
                `Hola, quiero el roadmap completo de 8 meses del programa de ${industry.label} para mi empresa.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-mango-500 px-6 py-3 text-sm font-bold text-white shadow-md shadow-mango-500/30 transition hover:bg-mango-600"
            >
              Pedir roadmap completo
            </a>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {industry.phases.map((phase, index) => (
              <div
                key={phase.range}
                className="flex flex-col rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold text-brand-700">
                    {phase.range}
                  </span>
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                    {index + 1}
                  </span>
                </div>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                  {phase.level}
                </p>
                <p className="mt-3 font-bold text-brand-900">{phase.focus}</p>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-600">
                  {phase.topics.map((topic) => (
                    <li key={topic} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua-500" />
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
