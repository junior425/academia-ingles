import CtaButton from "./CtaButton";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(245,158,11,0.12),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
        <span className="inline-flex rounded-2xl sm:rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-gold">
          Inglés Práctico de Alto Rendimiento • Cali &amp; Virtual
        </span>
        <h1 className="mt-7 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl">
          Deja atrás los métodos obsoletos.{" "}
          <span className="text-gold">
            Habla inglés real y práctico desde la primera sesión.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pearl">
          Diseñado para profesionales y adultos que necesitan resultados, no
          años de teoría aburrida. Entrena con una metodología activa de 68
          minutos enfocada 100% en situaciones reales de trabajo, viajes y vida
          diaria.
        </p>
        <div className="mt-10 flex justify-center">
          <CtaButton>Agendar mi Clase Demo Gratuita (35 min)</CtaButton>
        </div>
        <p className="mt-4 text-sm text-pearl/70">
          Para profesionales y adultos • 100% práctico • Cupos limitados por
          semana
        </p>
      </div>
    </section>
  );
}
