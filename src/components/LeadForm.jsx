import { useState } from "react";
import { WHATSAPP_NUMBER, whatsappLink } from "../config";
import { INDUSTRIES } from "../data/curriculum";
import WhatsAppIcon from "./WhatsAppIcon";

const SECTORS = [...INDUSTRIES.map((industry) => industry.label), "Otro sector"];
const TEAM_SIZES = ["1-5 personas", "5-20 personas", "20+ personas"];

const INITIAL_FORM = {
  name: "",
  company: "",
  sector: SECTORS[0],
  teamSize: TEAM_SIZES[0],
  phone: "",
};

const FIELD_CLASS =
  "mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-base font-normal text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-400";

export default function LeadForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [sent, setSent] = useState(false);

  function update(field, value) {
    setForm((previous) => ({ ...previous, [field]: value }));
  }

  function buildMessage() {
    return [
      "Solicitud de Diagnóstico Operativo Gratis",
      `Nombre: ${form.name.trim()}`,
      `Empresa: ${form.company.trim()}`,
      `Sector: ${form.sector}`,
      `Tamaño del equipo: ${form.teamSize}`,
      `Teléfono / WhatsApp: ${form.phone.trim()}`,
      "",
      "Quiero recibir el plan de estudios a la medida de mi empresa.",
    ].join("\n");
  }

  function handleSubmit(event) {
    event.preventDefault();
    window.open(whatsappLink(buildMessage()), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section
      id="contacto"
      className="border-t border-white/5 bg-slate-950 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-[1fr_1fr]">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
            Diagnóstico operativo
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Solicite el diagnóstico gratuito para su equipo
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Diseñamos un plan de estudios a la medida del objeto social de su
            empresa en menos de 24 horas.
          </p>

          <ul className="mt-8 space-y-4 text-slate-300">
            {[
              "Sesión de diagnóstico con un coach especializado en su industria.",
              "Mapa de los escenarios críticos donde su equipo pierde negocio por el idioma.",
              "Propuesta de roadmap de 8 meses con hitos medibles al mes 4 y al mes 8.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 text-emerald-400">✓</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink(
              "Hola, quiero información sobre los programas de inglés corporativo por industria.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-3 text-lg font-semibold text-emerald-400 transition hover:text-emerald-300"
          >
            <WhatsAppIcon className="h-6 w-6" />
            +{WHATSAPP_NUMBER}
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur md:p-10"
        >
          <label className="block text-sm font-semibold text-slate-200">
            Nombre completo
            <input
              type="text"
              required
              value={form.name}
              onChange={(event) => update("name", event.target.value)}
              placeholder="Ej: Daiana Restrepo"
              className={FIELD_CLASS}
            />
          </label>

          <label className="mt-5 block text-sm font-semibold text-slate-200">
            Nombre de la empresa
            <input
              type="text"
              required
              value={form.company}
              onChange={(event) => update("company", event.target.value)}
              placeholder="Ej: Global Freight S.A.S."
              className={FIELD_CLASS}
            />
          </label>

          <label className="mt-5 block text-sm font-semibold text-slate-200">
            Sector de la industria
            <select
              value={form.sector}
              onChange={(event) => update("sector", event.target.value)}
              className={FIELD_CLASS}
            >
              {SECTORS.map((sector) => (
                <option key={sector} value={sector}>
                  {sector}
                </option>
              ))}
            </select>
          </label>

          <fieldset className="mt-5">
            <legend className="text-sm font-semibold text-slate-200">
              Tamaño del equipo a capacitar
            </legend>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {TEAM_SIZES.map((size) => {
                const isActive = form.teamSize === size;
                return (
                  <button
                    key={size}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => update("teamSize", size)}
                    className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                      isActive
                        ? "border-emerald-400 bg-emerald-500/15 text-white"
                        : "border-white/10 text-slate-400 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <label className="mt-5 block text-sm font-semibold text-slate-200">
            Teléfono / WhatsApp
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(event) => update("phone", event.target.value)}
              placeholder="Ej: +57 300 000 0000"
              className={FIELD_CLASS}
            />
          </label>

          <button
            type="submit"
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-emerald-500 px-6 py-4 text-base font-bold text-slate-950 transition hover:bg-emerald-400"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Solicitar Diagnóstico Operativo Gratis
          </button>

          <p className="mt-4 text-center text-xs leading-relaxed text-slate-500">
            Diseñamos un plan de estudios a la medida del objeto social de su
            empresa en menos de 24 horas.
          </p>

          {sent && (
            <p
              role="status"
              className="mt-5 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200"
            >
              Abrimos WhatsApp con su solicitud. Si no se abrió, escríbanos al +
              {WHATSAPP_NUMBER}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
