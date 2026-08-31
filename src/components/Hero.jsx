import { whatsappLink } from "../config";
import WhatsAppIcon from "./WhatsAppIcon";

const DIAGNOSTIC_MESSAGE =
  "Hola, quiero solicitar el Diagnóstico Operativo Gratis para mi equipo. Sector de mi empresa: ";

const BADGES = [
  { value: "8 meses", label: "vs. 18 meses de instituto" },
  { value: "100%", label: "casos reales de negocio" },
  { value: "70/30", label: "sector específico / vida general" },
  { value: "4 meses", label: "a comunicación funcional" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_15%_0%,rgba(16,185,129,0.18),transparent),radial-gradient(60%_60%_at_85%_10%,rgba(56,189,248,0.20),transparent)]" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Inglés corporativo por industria
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Su equipo negociando en inglés en{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                8 meses
              </span>
              , no en tres años de instituto.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Programas de inglés de alto impacto para agencias de carga,
              equipos médicos, ingeniería y ejecutivos que viajan a ferias.
              Aprendizaje <strong className="text-white">Zero Waste</strong>: sin
              gramática de libro ni vocabulario que nunca usará. Desde la primera
              clase resuelve crisis reales de su operación —contenedor retenido,
              reclamo de aduana, negociación de tarifa— en inglés.
            </p>

            <div className="mt-9 mr-16 flex flex-col gap-4 sm:mr-0 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-base font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
              >
                Solicitar Diagnóstico Operativo Gratis
              </a>
              <a
                href={whatsappLink(DIAGNOSTIC_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Agendar Demo para mi Empresa
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {BADGES.map((badge) => (
                <div key={badge.label} className="border-l-2 border-emerald-500/50 pl-4">
                  <dt className="text-2xl font-extrabold text-white">
                    {badge.value}
                  </dt>
                  <dd className="mt-1 text-sm leading-snug text-slate-400">
                    {badge.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
              Retorno para la empresa
            </p>
            <ul className="mt-6 space-y-6">
              {[
                {
                  time: "Mes 4",
                  title: "Comunicación funcional de negocio",
                  detail:
                    "El equipo atiende clientes, cotiza, hace seguimiento y resuelve incidencias sin intermediarios.",
                },
                {
                  time: "Mes 8",
                  title: "Negociación y representación internacional",
                  detail:
                    "Negocia tarifas, sostiene disputas y representa a la compañía en ferias y comités.",
                },
              ].map((item) => (
                <li key={item.time} className="flex gap-4">
                  <span className="shrink-0 rounded-lg bg-sky-500/15 px-3 py-1 text-sm font-bold text-sky-300">
                    {item.time}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <p className="text-sm leading-relaxed text-slate-300">
                <strong className="text-white">70%</strong> resolución de crisis
                específicas de su sector ·{" "}
                <strong className="text-white">30%</strong> transferencia a la
                vida general del colaborador.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
