const CARDS = [
  {
    tag: "ESP",
    title: "100% adaptado a su industria",
    description:
      "El programa se escribe sobre el objeto social de la empresa: 70% resolución de crisis específicas del negocio y 30% transferencia a la vida general del colaborador.",
    bullets: [
      "Casos reales de su operación",
      "Vocabulario que sí se usa",
      "70/30 negocio / vida general",
    ],
  },
  {
    tag: "Lexical Chunking",
    title: "Bloques léxicos, no reglas sueltas",
    description:
      "Audio nativo con IA, identificación de chunks, hack mental L1, mutación de bloques y roleplay de crisis. Cinco pasos que instalan el inglés como reflejo, no como teoría.",
    bullets: [
      "Audio nativo generado con IA",
      "Hacks mentales sobre la lógica del español",
      "Roleplays de alta presión",
    ],
  },
  {
    tag: "ROI",
    title: "Retorno medible en 8 meses",
    description:
      "Al mes 4 el equipo sostiene la comunicación funcional del negocio. Al mes 8 negocia, resuelve disputas y representa a la compañía en escenarios internacionales.",
    bullets: [
      "Mes 4: comunicación funcional",
      "Mes 8: negociación y representación",
      "Reporte ejecutivo de avance",
    ],
  },
];

export default function Differentiators() {
  return (
    <section className="border-t border-white/5 bg-slate-950 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-emerald-400/40 hover:bg-white/[0.05]"
            >
              <span className="inline-flex rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-sky-300">
                {card.tag}
              </span>
              <h3 className="mt-5 text-xl font-extrabold text-white">
                {card.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-400">
                {card.description}
              </p>
              <ul className="mt-6 space-y-2 border-t border-white/10 pt-5 text-sm text-slate-300">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
