import { whatsappLink } from "../config";
import WhatsAppIcon from "./WhatsAppIcon";

const HERO_MESSAGE =
  "¡Hola! Quiero agendar mi Clase Diagnóstico Gratis para empezar a hablar inglés con fluidez.";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.45),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-200">
              Academia de inglés personalizada
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Habla inglés con fluidez{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-emerald-300 bg-clip-text text-transparent">
                más rápido
              </span>{" "}
              con una metodología hecha a tu medida.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Nada de cursos genéricos. Diagnosticamos tu nivel real, diseñamos
              un plan solo para ti y practicamos conversación desde la primera
              clase, hasta que hablar inglés te salga natural.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink(HERO_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Agenda tu Clase Diagnóstico Gratis
              </a>
              <a
                href="#test"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Hacer el test de nivel
              </a>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
              {[
                ["100%", "Clases 1 a 1"],
                ["+500", "Estudiantes"],
                ["A1 → C1", "Todos los niveles"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="text-2xl font-bold text-white">{value}</dt>
                  <dd className="mt-1 text-sm text-slate-400">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-300">
                Tu plan en 3 pasos
              </p>
              <ul className="mt-6 space-y-5">
                {[
                  "Clase diagnóstico gratuita para medir tu nivel y tus metas.",
                  "Plan personalizado con temas y vocabulario de tu día a día.",
                  "Conversación guiada cada clase con feedback inmediato.",
                ].map((item, index) => (
                  <li key={item} className="flex gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-indigo-500 text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
