import CtaButton from "./CtaButton";

export default function FinalCta() {
  return (
    <section id="demo" className="border-t border-line py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-[2rem] border border-gold/40 bg-card px-6 py-12 text-center shadow-2xl shadow-gold/5 sm:px-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Comprueba la diferencia cara a cara antes de decidir
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-pearl">
            En 35 minutos diagnosticamos tu nivel real de fluidez, experimentas
            en vivo nuestro método de entrenamiento conversacional y trazamos tu
            plan personalizado presencial o virtual.
          </p>
          <div className="mt-10 flex justify-center">
            <CtaButton variant="whatsapp">
              Agendar mi Clase Demo de Diagnóstico (35 min)
            </CtaButton>
          </div>
          <p className="mt-5 text-sm text-pearl/70">
            Evaluación personalizada dirigida directamente por Vicente
            Hernández • Cali (Presencial y Virtual)
          </p>
        </div>
      </div>
    </section>
  );
}
