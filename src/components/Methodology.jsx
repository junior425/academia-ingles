const CARDS = [
  {
    icon: "🎯",
    title: "Diagnóstico a la medida",
    description:
      "Evaluamos tu nivel real, tu pronunciación y tus objetivos concretos (trabajo, viaje, entrevistas) para construir un plan único para ti.",
    bullets: ["Test de nivelación", "Metas claras y medibles", "Plan personalizado"],
  },
  {
    icon: "🗣️",
    title: "Clases 1 a 1 enfáticas en conversación",
    description:
      "Hablas desde el minuto uno. Sin grupos grandes ni turnos: toda la clase es tu espacio para practicar y equivocarte con confianza.",
    bullets: ["Profesor dedicado", "80% del tiempo hablando", "Corrección en vivo"],
  },
  {
    icon: "📈",
    title: "Seguimiento constante",
    description:
      "Reportes de avance, tareas cortas y ajustes semanales del plan. Siempre sabes en qué nivel estás y qué falta para el siguiente.",
    bullets: ["Reporte de progreso", "Práctica entre clases", "Ajustes semanales"],
  },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-indigo-600">
            Metodología
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Un método simple, personal y enfocado en que hables
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Tres pilares que hacen que avances en semanas, no en años.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-indigo-50 text-2xl">
                {card.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {card.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                {card.description}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
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
