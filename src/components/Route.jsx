import { ROUTE_FACTS } from "../data/content";
import { ROUTE_IMAGE } from "../data/images";

export default function Route() {
  return (
    <section id="ruta" className="border-t border-line py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-left">
            Una ruta clara con principio y fin{" "}
            <span className="text-gold">(Sin suscripciones eternas)</span>
          </h2>
          <ul className="mt-10 space-y-4">
            {ROUTE_FACTS.map((fact) => (
              <li
                key={fact.label}
                className="rounded-2xl border border-line bg-card p-6"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold">
                  {fact.label}
                </p>
                <p className="mt-2 leading-relaxed text-pearl">
                  <span className="font-extrabold text-white">
                    {fact.value}
                  </span>{" "}
                  {fact.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] border border-line shadow-2xl shadow-black/40">
          <img
            src={ROUTE_IMAGE}
            alt="Adultos practicando una conversación en inglés en un café moderno"
            className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/10" />
        </div>
      </div>
    </section>
  );
}
