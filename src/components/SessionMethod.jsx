import { SESSION_MINUTES, SESSION_STEPS } from "../data/content";

const CARD_SPANS = [
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "md:col-span-2 lg:col-span-3",
];

export default function SessionMethod() {
  return (
    <section id="metodo" className="border-t border-line py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Así funciona cada sesión inmersiva de {SESSION_MINUTES} minutos
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pearl">
            Un entrenamiento de alto impacto diseñado para adultos y
            profesionales que quieren dejar atrás las metodologías obsoletas y
            hablar con fluidez.
          </p>
          <p className="mt-4 text-sm font-semibold text-gold">
            5 pasos • {SESSION_MINUTES} minutos • Opción flexible de 90 min
          </p>
        </div>

        <div
          className="mt-12 flex h-2 gap-1 overflow-hidden rounded-full"
          aria-hidden="true"
        >
          {SESSION_STEPS.map((step, index) => (
            <span
              key={step.number}
              className="rounded-full bg-gold"
              style={{
                width: `${(step.minutes / SESSION_MINUTES) * 100}%`,
                opacity: 0.35 + index * 0.16,
              }}
            />
          ))}
        </div>

        <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {SESSION_STEPS.map((step, index) => (
            <li
              key={step.number}
              className={`rounded-3xl border border-line bg-card p-7 transition hover:border-gold/40 ${CARD_SPANS[index]}`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-4xl font-extrabold text-gold">
                  {step.number}
                </span>
                <span className="rounded-full border border-line bg-ink px-3 py-1 text-xs font-bold text-pearl">
                  {step.minutes} min
                </span>
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-white">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-pearl">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
