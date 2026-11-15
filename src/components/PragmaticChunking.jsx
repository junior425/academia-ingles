import { useState } from "react";
import { ACCENTS } from "../data/audiences";
import {
  CHUNK_EXAMPLES,
  DEMO_WHATSAPP_URL,
  PRAGMATIC_STEPS,
} from "../data/pragmatic";
import WhatsAppIcon from "./WhatsAppIcon";

const VIEWS = [
  { id: "libro", label: "Así piensa un libro" },
  { id: "fluent", label: "Así hablas con Fluent Path" },
];

function highlight(text) {
  return text.split(/(chunks)/g).map((part, index) =>
    part === "chunks" ? (
      <em key={index}>{part}</em>
    ) : (
      part
    ),
  );
}

export default function PragmaticChunking() {
  const [exampleId, setExampleId] = useState(CHUNK_EXAMPLES[0].id);
  const [view, setView] = useState("libro");
  const index = CHUNK_EXAMPLES.findIndex((item) => item.id === exampleId);
  const example = CHUNK_EXAMPLES[index];
  const isFluent = view === "fluent";

  const selectExample = (id) => {
    setExampleId(id);
    setView("libro");
  };

  const nextExample = () =>
    selectExample(CHUNK_EXAMPLES[(index + 1) % CHUNK_EXAMPLES.length].id);

  return (
    <section id="metodologia" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-brand-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-700 ring-1 ring-brand-100">
            Metodología exclusiva • Pragmatic Chunking
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
            Deja de traducir palabra por palabra.{" "}
            <span className="bg-gradient-to-r from-brand-600 via-aqua-500 to-mango-500 bg-clip-text text-transparent">
              Aprende a mapear cómo piensas en español al inglés real.
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Las academias tradicionales te llenan de reglas gramaticales rígidas
            y listas de vocabulario que nadie usa en la calle. Con nuestro método
            de{" "}
            <strong className="text-brand-900">
              Anclaje Pragmático (Pragmatic Chunking)
            </strong>{" "}
            partimos de tus propias expresiones e intenciones reales en español
            (“lo cierto es que…”, “prever un margen…”, “lo que me llevó a…”,
            “eso viene siendo lo mismo que…”) y las conectamos directamente con
            el <em>chunk</em> exacto que usa un hablante nativo en ese mismo
            momento.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {PRAGMATIC_STEPS.map((step) => {
            const accent = ACCENTS[step.accent];
            return (
              <li
                key={step.id}
                className="relative rounded-3xl bg-slate-50 p-7 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-xl ${accent.button}`}
                    aria-hidden="true"
                  >
                    {step.icon}
                  </span>
                  <span
                    className={`text-xs font-bold uppercase tracking-[0.16em] ${accent.text}`}
                  >
                    Paso {step.id}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-brand-900">
                  {step.id}. {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {highlight(step.description)}
                </p>
              </li>
            );
          })}
        </ol>

        <div className="mt-16">
          <h3 className="text-center text-2xl font-extrabold tracking-tight text-brand-900 sm:text-3xl">
            Así piensa un libro vs. Así hablas con Fluent Path
          </h3>
          <p className="mt-3 text-center text-slate-600">
            Elige una situación y compara la traducción literal con el chunk
            nativo.
          </p>

          <div
            role="tablist"
            aria-label="Ejemplos de Pragmatic Chunking"
            className="mt-8 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center"
          >
            {CHUNK_EXAMPLES.map((item, itemIndex) => {
              const selected = item.id === exampleId;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => selectExample(item.id)}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-bold transition ${
                    selected
                      ? ACCENTS.brand.tab
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {itemIndex + 1}. {item.label}
                </button>
              );
            })}
          </div>

          <article className="mt-6 overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/70 ring-1 ring-slate-200">
            <div className="bg-slate-50 p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Ejemplo {index + 1} · {example.title}
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
                Lo que quieres decir en español
              </p>
              <p className="mt-2 text-xl font-bold leading-snug text-brand-900 sm:text-2xl">
                {example.spanish}
              </p>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-2 gap-1 rounded-full bg-slate-100 p-1">
                {VIEWS.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={view === option.id}
                    onClick={() => setView(option.id)}
                    className={`rounded-full px-3 py-2.5 text-xs font-bold transition sm:text-sm ${
                      view === option.id
                        ? option.id === "fluent"
                          ? ACCENTS.aqua.tab
                          : ACCENTS.coral.tab
                        : "text-slate-500 hover:text-brand-900"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <div className="mt-6 min-h-[11rem]" aria-live="polite">
                {isFluent ? (
                  <div className="rounded-2xl bg-aqua-50 p-6 ring-1 ring-aqua-100">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-aqua-600">
                      ✓ Chunk nativo (Fluent Path)
                    </p>
                    <p className="mt-3 text-xl font-extrabold leading-snug text-brand-900 sm:text-2xl">
                      {example.chunk}
                    </p>
                    <p className="mt-4 flex gap-2 rounded-xl bg-white/80 px-4 py-3 text-sm leading-relaxed text-slate-600">
                      <span aria-hidden="true">💡</span>
                      <span>
                        <strong className="text-brand-900">Tip:</strong>{" "}
                        {example.tip}
                      </span>
                    </p>
                  </div>
                ) : (
                  <div className="rounded-2xl bg-coral-50 p-6 ring-1 ring-coral-100">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-coral-600">
                      ✕ Traducción literal de academia
                    </p>
                    <p className="mt-3 text-xl font-bold leading-snug text-slate-500 line-through decoration-coral-400/70 decoration-2 sm:text-2xl">
                      {example.literal}
                    </p>
                    <p className="mt-4 text-sm font-semibold text-coral-600">
                      {example.literalNote}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                {!isFluent && (
                  <button
                    type="button"
                    onClick={() => setView("fluent")}
                    className={`rounded-full px-5 py-3 text-sm font-bold shadow-md transition ${ACCENTS.aqua.button}`}
                  >
                    Ver el chunk nativo →
                  </button>
                )}
                <button
                  type="button"
                  onClick={nextExample}
                  className="rounded-full bg-white px-5 py-3 text-sm font-bold text-brand-700 ring-1 ring-brand-200 transition hover:bg-brand-50"
                >
                  Siguiente ejemplo
                </button>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 rounded-[2rem] bg-gradient-to-r from-brand-600 to-aqua-500 p-8 text-center text-white shadow-lg shadow-brand-500/25 md:flex-row md:justify-between md:p-10 md:text-left">
          <p className="max-w-xl text-2xl font-extrabold leading-snug">
            ¿Listo para desbloquear tu inglés sin memorizar listas
            interminables?
          </p>
          <a
            href={DEMO_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-mango-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-mango-600/30 transition hover:bg-mango-600"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Agenda tu Clase Demo Gratuita (35 min)
          </a>
        </div>
      </div>
    </section>
  );
}
