import CtaButton from "./CtaButton";
import { HERO_IMAGE } from "../data/images";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_30%_0%,rgba(245,158,11,0.12),transparent)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:py-24 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <span className="inline-flex rounded-2xl border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-gold sm:rounded-full">
            Inglés Práctico de Alto Rendimiento • Cali &amp; Virtual
          </span>
          <h1 className="mt-7 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl xl:text-6xl">
            Deja atrás los métodos obsoletos.{" "}
            <span className="text-gold">
              Habla inglés real y práctico desde la primera sesión.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pearl lg:mx-0">
            Diseñado para profesionales y adultos que necesitan resultados, no
            años de teoría aburrida. Entrena con una metodología activa de 120
            minutos enfocada 100% en situaciones reales de trabajo, viajes y
            vida diaria.
          </p>
          <div className="mt-10 flex justify-center lg:justify-start">
            <CtaButton>Agendar mi Clase Demo Virtual Gratuita (35 min)</CtaButton>
          </div>
          <p className="mt-4 text-sm text-pearl/70">
            Diagnóstico de nivel + Prueba del método en vivo • Cupos limitados
          </p>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-line shadow-2xl shadow-black/40">
            <img
              src={HERO_IMAGE}
              alt="Profesional con audífonos practicando inglés en la plataforma interactiva de Natural Flow English"
              className="aspect-[4/3] w-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
          </div>
          <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-line bg-card/95 px-5 py-4 shadow-xl backdrop-blur sm:left-8">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold text-lg font-extrabold text-ink">
              ▶
            </span>
            <div>
              <p className="text-sm font-extrabold text-white">
                Plataforma Interactiva
              </p>
              <p className="text-sm font-bold text-emerald">
                + 85% Práctica Activa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
