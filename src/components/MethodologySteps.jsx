import { useState } from "react";
import { STEPS } from "../data/methodology";

export default function MethodologySteps() {
  const [activeId, setActiveId] = useState(STEPS[0].id);
  const active = STEPS.find((step) => step.id === activeId);
  const progress = ((activeId - 1) / (STEPS.length - 1)) * 100;

  return (
    <section id="metodologia" className="border-t border-white/5 bg-slate-900 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
            Metodología
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            El método de 5 pasos: de escuchar el caso a resolverlo bajo presión
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            Cada clase recorre los cinco pasos con un caso real de su industria.
            Toque cada paso para ver qué ocurre y qué se lleva el colaborador.
          </p>
        </div>

        <div className="mt-12">
          <div className="relative">
            <div className="absolute left-0 right-0 top-6 hidden h-1 rounded-full bg-white/10 md:block">
              <div
                className="h-1 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <ol className="relative grid gap-3 md:grid-cols-5 md:gap-4">
              {STEPS.map((step) => {
                const isActive = step.id === activeId;
                return (
                  <li key={step.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(step.id)}
                      aria-current={isActive ? "step" : undefined}
                      className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition md:flex-col md:items-start ${
                        isActive
                          ? "border-emerald-400/60 bg-emerald-500/10"
                          : "border-white/10 bg-white/[0.03] hover:border-white/25"
                      }`}
                    >
                      <span
                        className={`grid h-12 w-12 shrink-0 place-items-center rounded-full text-base font-extrabold transition ${
                          isActive
                            ? "bg-emerald-400 text-slate-950"
                            : "bg-slate-800 text-slate-300"
                        }`}
                      >
                        {step.id}
                      </span>
                      <span>
                        <span
                          className={`block text-[11px] font-bold uppercase tracking-[0.16em] ${
                            isActive ? "text-emerald-300" : "text-slate-500"
                          }`}
                        >
                          {step.tag}
                        </span>
                        <span className="mt-1 block text-sm font-bold text-white">
                          {step.title}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          <article className="mt-8 grid gap-8 rounded-3xl border border-white/10 bg-slate-950/60 p-8 md:grid-cols-[1.4fr_1fr] md:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
                Paso {active.id} de {STEPS.length} · {active.subtitle}
              </p>
              <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                {active.title}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                {active.description}
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/[0.07] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                Resultado
              </p>
              <p className="mt-3 text-lg font-semibold leading-snug text-white">
                {active.outcome}
              </p>
              <div className="mt-6 flex gap-2">
                {STEPS.map((step) => (
                  <span
                    key={step.id}
                    className={`h-1.5 flex-1 rounded-full ${
                      step.id <= activeId ? "bg-emerald-400" : "bg-white/15"
                    }`}
                  />
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
