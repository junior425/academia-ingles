import { whatsappLink } from "../config";
import { PHOTOS, unsplash } from "../data/images";
import WhatsAppIcon from "./WhatsAppIcon";

const DIAGNOSTIC_MESSAGE =
  "Hola, quiero agendar un diagnóstico / clases de inglés. Me interesa para: ";

const BADGES = [
  { value: "8 meses", label: "en vez de 18 de instituto" },
  { value: "100%", label: "online y en vivo" },
  { value: "Chunks", label: "bloques que sí se usan" },
  { value: "3 públicos", label: "empresas, adultos y niños" },
];

const GALLERY = [
  {
    photo: PHOTOS.professionals,
    alt: "Equipo de profesionales celebrando en la oficina",
    caption: "Profesionales y equipos",
    span: "col-span-2 h-40 sm:h-52",
  },
  {
    photo: PHOTOS.airport,
    alt: "Avión en la pista de un aeropuerto internacional",
    caption: "Viajeros",
    span: "h-36 sm:h-44",
  },
  {
    photo: PHOTOS.kidsClass,
    alt: "Niños participando en una clase interactiva",
    caption: "Niños y juniors",
    span: "h-36 sm:h-44",
  },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_10%_0%,rgba(59,130,246,0.14),transparent),radial-gradient(60%_55%_at_90%_5%,rgba(249,115,22,0.14),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
              Inglés online · Método por bloques
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-900 sm:text-5xl">
              Domina el Inglés Real en Tiempo Récord:{" "}
              <span className="bg-gradient-to-r from-brand-600 via-aqua-500 to-mango-500 bg-clip-text text-transparent">
                Para tu Trabajo, tus Viajes y tu Familia.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Aprende de forma 100% online con nuestro método léxico por bloques
              (Chunks). Programas especializados para empresas y carreras
              profesionales, y cursos dinámicos para adultos, viajes y niños.
            </p>

            <div className="mt-8 mr-16 flex flex-col gap-4 sm:mr-0 sm:flex-row">
              <a
                href="#programas"
                className="inline-flex items-center justify-center rounded-full bg-brand-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
              >
                Ver Programas Online
              </a>
              <a
                href={whatsappLink(DIAGNOSTIC_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-mango-400 bg-white px-8 py-4 text-base font-bold text-mango-600 transition hover:bg-mango-50"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Agendar Diagnóstico / Clases
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {BADGES.map((badge) => (
                <div
                  key={badge.label}
                  className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200"
                >
                  <dt className="text-xl font-extrabold text-brand-700">
                    {badge.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-slate-500">
                    {badge.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {GALLERY.map((item) => (
              <figure
                key={item.photo}
                className={`relative overflow-hidden rounded-3xl shadow-lg shadow-slate-300/50 ${item.span}`}
              >
                <img
                  src={unsplash(item.photo, 800)}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand-800">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
            <div className="col-span-2 rounded-3xl bg-gradient-to-r from-brand-600 to-aqua-500 p-6 text-white shadow-lg shadow-brand-500/25">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
                Aprendizaje Zero-Waste
              </p>
              <p className="mt-2 text-lg font-bold leading-snug">
                Nada de gramática que nunca vas a usar: solo los bloques que
                necesitas para tu trabajo, tu viaje o tu familia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
