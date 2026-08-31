import { PHOTOS, unsplash } from "../data/images";

const CARDS = [
  {
    tag: "Para tu trabajo",
    icon: "💼",
    title: "Inglés de tu industria, desde el día uno",
    description:
      "Logística, medicina, ingeniería o gerencia: el programa se escribe sobre tu operación real, con 70% de casos de tu sector y 30% de vida general.",
    photo: PHOTOS.meeting,
    accent: "from-brand-500 to-brand-700",
  },
  {
    tag: "Para tus viajes",
    icon: "✈️",
    title: "Habla en el aeropuerto, no en el examen",
    description:
      "Bloques listos para migración, hoteles, restaurantes y conversaciones reales. Perfecto si viajas pronto o te vas a vivir al exterior.",
    photo: PHOTOS.airport,
    accent: "from-aqua-400 to-aqua-600",
  },
  {
    tag: "Para tu familia",
    icon: "🎨",
    title: "Niños que aprenden jugando",
    description:
      "Videos cortos, cuentos animados y roleplay lúdico. Los chunks entran con ritmo y repetición, sin tareas aburridas ni listas de vocabulario.",
    photo: PHOTOS.kidsPlay,
    accent: "from-mango-400 to-coral-500",
  },
];

export default function Differentiators() {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-mango-600">
            Zero-Waste Learning
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
            Un método, tres vidas donde usarlo
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            No aprendes inglés “en general”: aprendes exactamente el inglés que
            vas a usar esta semana en tu trabajo, tu viaje o la clase de tus
            hijos.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-200/70 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={unsplash(card.photo, 700)}
                alt={card.title}
                loading="lazy"
                className="h-44 w-full object-cover"
              />
              <div className="p-7">
                <span
                  className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${card.accent} px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white`}
                >
                  <span aria-hidden="true">{card.icon}</span>
                  {card.tag}
                </span>
                <h3 className="mt-4 text-xl font-extrabold text-brand-900">
                  {card.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
