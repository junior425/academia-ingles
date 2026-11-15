import { SESSION_BLOCKS, SESSION_MINUTES } from "../data/content";

export default function SessionMethod() {
  return (
    <section id="metodo" className="border-t border-line py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Así funciona cada sesión práctica de 68 minutos
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pearl">
            Un entrenamiento paso a paso creado para profesionales y adultos que
            valoran su tiempo y quieren soltar la lengua rápido.
          </p>
        </div>

        <div
          className="mt-12 flex h-2 gap-1 overflow-hidden rounded-full"
          aria-hidden="true"
        >
          {SESSION_BLOCKS.map((block, index) => (
            <span
              key={block.number}
              className="rounded-full bg-gold"
              style={{
                width: `${(block.minutes / SESSION_MINUTES) * 100}%`,
                opacity: 0.4 + index * 0.2,
              }}
            />
          ))}
        </div>

        <ol className="mt-8 grid gap-5 md:grid-cols-2">
          {SESSION_BLOCKS.map((block) => (
            <li
              key={block.number}
              className="rounded-3xl border border-line bg-card p-7 transition hover:border-gold/40"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-4xl font-extrabold text-gold">
                  {block.number}
                </span>
                <span className="rounded-full border border-line bg-ink px-3 py-1 text-xs font-bold text-pearl">
                  {block.range}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-white">
                {block.title}
              </h3>
              <p className="mt-3 leading-relaxed text-pearl">
                {block.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
