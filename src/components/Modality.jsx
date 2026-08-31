import { whatsappLink } from "../config";
import { PHOTOS, unsplash } from "../data/images";

const FORMATS = [
  {
    icon: "🎥",
    title: "Clases en vivo grupales",
    detail:
      "Grupos pequeños por nivel y objetivo, con roleplays entre compañeros y coach en vivo.",
    chip: "bg-brand-100 text-brand-700",
  },
  {
    icon: "🙋",
    title: "Sesiones 1 a 1",
    detail:
      "Toda la hora hablando tú: el coach ajusta el caso a tu operación, tu viaje o tu edad.",
    chip: "bg-aqua-100 text-aqua-600",
  },
  {
    icon: "📱",
    title: "Micro-aprendizaje asíncrono",
    detail:
      "Audios y videos cortos entre clases para mantener los bloques activos en 10 minutos al día.",
    chip: "bg-mango-100 text-mango-600",
  },
  {
    icon: "🗓️",
    title: "Horarios flexibles",
    detail:
      "Mañana, noche o fines de semana; reprograma sin perder la clase si viajas o entras a turno.",
    chip: "bg-coral-100 text-coral-600",
  },
];

export default function Modality() {
  return (
    <section id="modalidad" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          <img
            src={unsplash(PHOTOS.onlineClass, 800)}
            alt="Estudiante en una clase online desde su computador"
            loading="lazy"
            className="h-56 w-full rounded-3xl object-cover shadow-lg shadow-slate-200 sm:col-span-2"
          />
          <img
            src={unsplash(PHOTOS.learnerPhone, 600)}
            alt="Adulto practicando inglés desde el teléfono"
            loading="lazy"
            className="h-40 w-full rounded-3xl object-cover shadow-lg shadow-slate-200"
          />
          <img
            src={unsplash(PHOTOS.kidsClass, 600)}
            alt="Niños en clase interactiva de inglés"
            loading="lazy"
            className="h-40 w-full rounded-3xl object-cover shadow-lg shadow-slate-200"
          />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">
            Modalidad
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
            100% online y flexible, desde donde estés
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Estudias desde tu oficina, tu casa o el hotel. Clases en vivo,
            práctica 1 a 1 y micro-aprendizaje entre sesiones para que el avance
            no se detenga: sirve igual para un equipo corporativo, un adulto que
            viaja o un niño de 8 años.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {FORMATS.map((format) => (
              <div
                key={format.title}
                className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200"
              >
                <span
                  className={`grid h-11 w-11 place-items-center rounded-xl text-xl ${format.chip}`}
                  aria-hidden="true"
                >
                  {format.icon}
                </span>
                <h3 className="mt-4 font-bold text-brand-900">
                  {format.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {format.detail}
                </p>
              </div>
            ))}
          </div>

          <a
            href={whatsappLink(
              "Hola, quiero ver los horarios disponibles de las clases online.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
          >
            Ver horarios disponibles
          </a>
        </div>
      </div>
    </section>
  );
}
