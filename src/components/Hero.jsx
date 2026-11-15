import CtaButton from "./CtaButton";
import { HERO_IMAGE } from "../data/images";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_30%_0%,rgba(245,158,11,0.12),transparent)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:py-24 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <span className="inline-flex rounded-2xl border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-gold">
            Entrenamiento Personalizado • Cali (A domicilio y oficina)
          </span>
          <h1 className="mt-7 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl xl:text-6xl">
            Deja atrás los métodos obsoletos.{" "}
            <span className="text-gold">
              Habla inglés real y práctico con entrenamiento uno a uno.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pearl lg:mx-0">
            Diseñado para profesionales y adultos en Cali que buscan resultados
            reales, sin relleno teórico ni pantallas interminables. Un
            entrenador se desplaza a tu hogar u oficina para entrenar contigo
            cara a cara durante 120 minutos con un método 100% conversacional y
            práctico.
          </p>
          <div className="mt-10 flex justify-center lg:justify-start">
            <CtaButton>Agendar mi Clase Demo de Diagnóstico (35 min)</CtaButton>
          </div>
          <p className="mt-4 text-sm text-pearl/70">
            Clase personalizada presencial o virtual • Cupos limitados por
            semana • Cali, Colombia
          </p>
        </div>

        <div className="relative order-first lg:order-none">
          <div className="relative overflow-hidden rounded-[2rem] border border-line shadow-2xl shadow-black/40">
            <img
              src={HERO_IMAGE}
              alt="Entrenador de Natural Flow English en una sesión presencial uno a uno con un profesional en su oficina en Cali"
              className="aspect-[4/3] w-full max-w-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
          </div>
          <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-line bg-card/95 px-5 py-4 shadow-xl backdrop-blur sm:left-8">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold text-sm font-extrabold text-ink">
              1:1
            </span>
            <div>
              <p className="text-sm font-extrabold text-white">
                Entrenamiento Presencial 1-a-1
              </p>
              <p className="text-sm font-bold text-emerald">
                85% Práctica Hablada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
