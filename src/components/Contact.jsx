import { useState } from "react";
import { WHATSAPP_NUMBER, whatsappLink } from "../config";
import WhatsAppIcon from "./WhatsAppIcon";

const GOALS = [
  "Trabajo / entrevistas",
  "Viajes",
  "Estudios / certificación",
  "Conversación general",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", goal: GOALS[0], note: "" });

  function update(field, value) {
    setForm((previous) => ({ ...previous, [field]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const message = [
      `¡Hola! Soy ${form.name.trim() || "un nuevo estudiante"}.`,
      `Mi objetivo con el inglés: ${form.goal}.`,
      form.note.trim() ? `Nota: ${form.note.trim()}` : null,
      "Quiero agendar mi Clase Diagnóstico Gratis.",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contacto" className="bg-slate-900 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <span className="text-sm font-bold uppercase tracking-wider text-indigo-300">
            Contacto
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Agenda tu Clase Diagnóstico Gratis
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Cuéntanos tu objetivo y te escribimos por WhatsApp para coordinar el
            horario de tu primera clase, sin costo y sin compromiso.
          </p>
          <a
            href={whatsappLink("¡Hola! Quiero información sobre las clases de inglés personalizadas.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 text-lg font-semibold text-emerald-400 transition hover:text-emerald-300"
          >
            <WhatsAppIcon className="h-6 w-6" />
            +{WHATSAPP_NUMBER}
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
        >
          <label className="block text-sm font-semibold text-slate-200">
            Nombre
            <input
              type="text"
              required
              value={form.name}
              onChange={(event) => update("name", event.target.value)}
              placeholder="Tu nombre"
              className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-base font-normal text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-400"
            />
          </label>

          <label className="mt-5 block text-sm font-semibold text-slate-200">
            ¿Para qué necesitas el inglés?
            <select
              value={form.goal}
              onChange={(event) => update("goal", event.target.value)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-base font-normal text-white outline-none transition focus:border-indigo-400"
            >
              {GOALS.map((goal) => (
                <option key={goal} value={goal}>
                  {goal}
                </option>
              ))}
            </select>
          </label>

          <label className="mt-5 block text-sm font-semibold text-slate-200">
            Cuéntanos más (opcional)
            <textarea
              rows={3}
              value={form.note}
              onChange={(event) => update("note", event.target.value)}
              placeholder="Horarios preferidos, nivel actual, etc."
              className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-base font-normal text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-400"
            />
          </label>

          <button
            type="submit"
            className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-emerald-500 px-6 py-4 text-base font-bold text-white transition hover:bg-emerald-400"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
