import { useState } from "react";
import { whatsappLink } from "../config";
import { ACCENTS, AUDIENCES } from "../data/audiences";
import { unsplash } from "../data/images";

export default function AudienceTabs() {
  const [activeId, setActiveId] = useState(AUDIENCES[0].id);
  const audience = AUDIENCES.find((item) => item.id === activeId);
  const accent = ACCENTS[audience.accent];

  return (
    <section id="programas" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">
            Programas online y presenciales
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
            Elige tu programa: empresas, adultos y viajes, o niños
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            El mismo método de bloques léxicos, adaptado al público. Toca cada
            pestaña para ver el contenido.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Públicos y programas"
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {AUDIENCES.map((item) => {
            const isActive = item.id === activeId;
            const itemAccent = ACCENTS[item.accent];
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(item.id)}
                className={`rounded-full px-6 py-3 text-sm font-bold transition ${
                  isActive
                    ? itemAccent.tab
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {item.tab}
              </button>
            );
          })}
        </div>

        <div className="mt-8 overflow-hidden rounded-[2rem] bg-slate-50 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200">
          <div className="grid gap-0 lg:grid-cols-[1fr_1fr]">
            <img
              src={unsplash(audience.photo, 1000)}
              alt={audience.title}
              loading="lazy"
              className="h-60 w-full object-cover lg:h-full"
            />
            <div className="p-8 md:p-10">
              <span
                className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] ${accent.chip}`}
              >
                {audience.badge}
              </span>
              <h3 className="mt-4 text-2xl font-extrabold text-brand-900 sm:text-3xl">
                {audience.title}
              </h3>
              <p className={`mt-2 text-lg font-semibold ${accent.text}`}>
                {audience.tagline}
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                {audience.description}
              </p>
              <a
                href={whatsappLink(audience.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-bold transition ${accent.button}`}
              >
                {audience.cta}
              </a>
            </div>
          </div>

          <div className="grid gap-5 border-t border-slate-200 bg-white p-8 md:grid-cols-2 md:p-10 xl:grid-cols-4">
            {audience.cards.map((card) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={unsplash(card.photo, 600)}
                  alt={card.title}
                  loading="lazy"
                  className="h-32 w-full object-cover"
                />
                <div className="p-5">
                  <h4 className="flex items-start gap-2 font-bold text-brand-900">
                    <span
                      className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${accent.dot}`}
                    />
                    {card.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {card.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
