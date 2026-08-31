import { useState } from "react";
import { WHATSAPP_NUMBER, whatsappLink } from "../config";
import { PHOTOS, unsplash } from "../data/images";
import WhatsAppIcon from "./WhatsAppIcon";

const INTERESTS = [
  "Mi Empresa",
  "Mi Carrera",
  "Viajes y Uso Personal",
  "Mis Hijos",
];

const MODALITIES = [
  "Online (en vivo)",
  "Presencial en Cali",
  "Me da igual / quiero asesoría",
];

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  interest: INTERESTS[0],
  modality: MODALITIES[0],
};

const FIELD_CLASS =
  "mt-2 w-full rounded-xl bg-slate-50 px-4 py-3 text-base font-normal text-slate-800 outline-none ring-1 ring-slate-200 transition placeholder:text-slate-400 focus:ring-2 focus:ring-brand-400";

export default function LeadForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [sent, setSent] = useState(false);

  function update(field, value) {
    setForm((previous) => ({ ...previous, [field]: value }));
  }

  function buildMessage() {
    return [
      "Solicitud de diagnóstico / clases de inglés",
      `Nombre: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `WhatsApp: ${form.phone.trim()}`,
      `Me interesa para: ${form.interest}`,
      `Modalidad preferida: ${form.modality}`,
      "",
      "Quiero recibir el plan de clases recomendado.",
    ].join("\n");
  }

  function handleSubmit(event) {
    event.preventDefault();
    window.open(whatsappLink(buildMessage()), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section id="contacto" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-[1fr_1fr]">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-mango-600">
            Diagnóstico gratis
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
            Agenda tu diagnóstico y recibe tu plan de clases
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Diseñamos tu plan de estudio a la medida —de tu empresa, tu carrera,
            tu viaje o tus hijos— en menos de 24 horas.
          </p>

          <ul className="mt-8 space-y-4 text-slate-600">
            {[
              "Sesión de diagnóstico gratuita con un coach del programa que te corresponde.",
              "Mapa de las situaciones donde hoy te bloqueas al hablar inglés.",
              "Propuesta de plan con hitos claros al mes 4 y al mes 8.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-0.5 font-bold text-aqua-600">✓</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <img
            src={unsplash(PHOTOS.studyGroup, 900)}
            alt="Estudiantes practicando inglés en una sesión de clase"
            loading="lazy"
            className="mt-8 h-48 w-full rounded-3xl object-cover shadow-lg shadow-slate-200"
          />

          <a
            href={whatsappLink(
              "Hola, quiero información sobre las clases de inglés (online o presenciales en Cali).",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 text-lg font-bold text-brand-700 transition hover:text-brand-600"
          >
            <WhatsAppIcon className="h-6 w-6" />+{WHATSAPP_NUMBER}
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] bg-slate-50 p-8 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200 md:p-10"
        >
          <label className="block text-sm font-semibold text-slate-700">
            Nombre completo
            <input
              type="text"
              required
              value={form.name}
              onChange={(event) => update("name", event.target.value)}
              placeholder="Ej: Vicente Hernández"
              className={FIELD_CLASS}
            />
          </label>

          <label className="mt-5 block text-sm font-semibold text-slate-700">
            Email
            <input
              type="email"
              required
              value={form.email}
              onChange={(event) => update("email", event.target.value)}
              placeholder="Ej: nombre@correo.com"
              className={FIELD_CLASS}
            />
          </label>

          <label className="mt-5 block text-sm font-semibold text-slate-700">
            WhatsApp
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(event) => update("phone", event.target.value)}
              placeholder="Ej: +57 300 000 0000"
              className={FIELD_CLASS}
            />
          </label>

          <label className="mt-5 block text-sm font-semibold text-slate-700">
            Me interesa para
            <select
              value={form.interest}
              onChange={(event) => update("interest", event.target.value)}
              className={FIELD_CLASS}
            >
              {INTERESTS.map((interest) => (
                <option key={interest} value={interest}>
                  {interest}
                </option>
              ))}
            </select>
          </label>

          <label className="mt-5 block text-sm font-semibold text-slate-700">
            Modalidad preferida
            <select
              value={form.modality}
              onChange={(event) => update("modality", event.target.value)}
              className={FIELD_CLASS}
            >
              {MODALITIES.map((modality) => (
                <option key={modality} value={modality}>
                  {modality}
                </option>
              ))}
            </select>
          </label>

          <button
            type="submit"
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-mango-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-mango-500/30 transition hover:bg-mango-600"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Agendar mi diagnóstico gratis
          </button>

          <p className="mt-4 text-center text-xs leading-relaxed text-slate-500">
            Te enviamos el plan recomendado por WhatsApp en menos de 24 horas.
          </p>

          {sent && (
            <p
              role="status"
              className="mt-5 rounded-xl bg-aqua-50 px-4 py-3 text-sm text-aqua-600 ring-1 ring-aqua-100"
            >
              Abrimos WhatsApp con tu solicitud. Si no se abrió, escríbenos al +
              {WHATSAPP_NUMBER}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
