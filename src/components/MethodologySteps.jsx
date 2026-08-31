import { useState } from "react";
import { ACCENTS } from "../data/audiences";
import { unsplash } from "../data/images";
import { STEPS } from "../data/methodology";

export default function MethodologySteps() {
  const [activeId, setActiveId] = useState(STEPS[0].id);
  const active = STEPS.find((step) => step.id === activeId);
  const accent = ACCENTS[active.accent];
  const progress = ((activeId - 1) / (STEPS.length - 1)) * 100;

  return (
    <section id="metodologia" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-aqua-600">
            Metodología
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
            El sistema de 5 pasos de bloques léxicos
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Cada clase recorre los cinco pasos con un caso real: de tu trabajo,
            de tu próximo viaje o de la aventura favorita de tus hijos.
          </p>
        </div>

        <div className="mt-12">
          <div className="relative">
            <div className="absolute left-0 right-0 top-8 hidden h-1.5 rounded-full bg-slate-200 md:block">
              <div
                className="h-1.5 rounded-full bg-gradient-to-r from-brand-500 via-aqua-500 to-mango-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <ol className="relative grid gap-3 md:grid-cols-5 md:gap-4">
              {STEPS.map((step) => {
                const isActive = step.id === activeId;
                const stepAccent = ACCENTS[step.accent];
                return (
                  <li key={step.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(step.id)}
                      aria-current={isActive ? "step" : undefined}
                      className={`flex w-full items-center gap-4 rounded-2xl bg-white p-4 text-left ring-1 transition md:flex-col md:items-start ${
                        isActive
                          ? `ring-2 ${stepAccent.ring} shadow-lg`
                          : "ring-slate-200 hover:ring-slate-300"
                      }`}
                    >
                      <span
                        className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-xl transition ${
                          isActive ? stepAccent.button : "bg-slate-100"
                        }`}
                        aria-hidden="true"
                      >
                        {step.icon}
                      </span>
                      <span>
                        <span
                          className={`block text-[11px] font-bold uppercase tracking-[0.16em] ${
                            isActive ? stepAccent.text : "text-slate-400"
                          }`}
                        >
                          Paso {step.id} · {step.tag}
                        </span>
                        <span className="mt-1 block text-sm font-bold text-brand-900">
                          {step.title}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          <article className="mt-8 grid gap-8 overflow-hidden rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200 md:grid-cols-[1.2fr_1fr] md:p-10">
            <div>
              <p className={`text-xs font-bold uppercase tracking-[0.18em] ${accent.text}`}>
                Paso {active.id} de {STEPS.length} · {active.subtitle}
              </p>
              <h3 className="mt-3 text-2xl font-extrabold text-brand-900 sm:text-3xl">
                {active.title}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                {active.description}
              </p>

              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {active.examples.map((example) => (
                  <li
                    key={example}
                    className={`rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 ${accent.soft}`}
                  >
                    {example}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <img
                src={unsplash(active.photo, 700)}
                alt={active.title}
                loading="lazy"
                className="h-44 w-full rounded-2xl object-cover"
              />
              <div className={`rounded-2xl p-6 ${accent.soft}`}>
                <p className={`text-xs font-bold uppercase tracking-[0.18em] ${accent.text}`}>
                  Resultado
                </p>
                <p className="mt-3 text-lg font-bold leading-snug text-brand-900">
                  {active.outcome}
                </p>
                <div className="mt-5 flex gap-2">
                  {STEPS.map((step) => (
                    <span
                      key={step.id}
                      className={`h-1.5 flex-1 rounded-full ${
                        step.id <= activeId ? accent.dot : "bg-slate-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
