import { useState } from "react";
import { whatsappLink } from "../config";
import { QUESTIONS, levelForScore } from "../levelTestData";
import WhatsAppIcon from "./WhatsAppIcon";

export default function LevelTest() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [name, setName] = useState("");

  const finished = answers.length === QUESTIONS.length;
  const score = answers.reduce(
    (total, choice, index) => total + (choice === QUESTIONS[index].answer ? 1 : 0),
    0,
  );
  const level = finished ? levelForScore(score) : null;

  function handleAnswer(optionIndex) {
    const next = [...answers, optionIndex];
    setAnswers(next);
    setCurrent(next.length);
  }

  function reset() {
    setAnswers([]);
    setCurrent(0);
  }

  const whatsappMessage = finished
    ? [
        `¡Hola! Acabo de hacer el test de nivelación${name.trim() ? `. Soy ${name.trim()}` : ""}.`,
        `Resultado: ${score}/${QUESTIONS.length} respuestas correctas.`,
        `Nivel estimado: ${level.code} (${level.label}).`,
        "",
        "Detalle de mis respuestas:",
        ...QUESTIONS.map((question, index) => {
          const chosen = question.options[answers[index]];
          const ok = answers[index] === question.answer ? "correcta" : "incorrecta";
          return `${index + 1}. ${chosen} — ${ok}`;
        }),
        "",
        "Quiero agendar mi Diagnóstico Operativo Gratis.",
      ].join("\n")
    : "";

  const question = QUESTIONS[current];
  const progress = (answers.length / QUESTIONS.length) * 100;

  return (
    <section
      id="test"
      className="border-t border-white/5 bg-slate-900 py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky-400">
            Test interactivo
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Mida su nivel de inglés en 1 minuto
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            4 preguntas rápidas y le damos el nivel estimado del Marco Común
            Europeo (A1 a C1) como punto de partida del diagnóstico.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl sm:p-10">
          {!finished ? (
            <div>
              <div className="flex items-center justify-between text-sm font-semibold text-slate-400">
                <span>
                  Pregunta {answers.length + 1} de {QUESTIONS.length}
                </span>
                <span>{Math.round(progress)}% completado</span>
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <h3 className="mt-8 text-xl font-bold text-white sm:text-2xl">
                {question.prompt}
              </h3>

              <div className="mt-6 grid gap-3">
                {question.options.map((option, index) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleAnswer(index)}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-4 pr-16 text-left text-base font-medium text-slate-200 transition hover:border-emerald-400/60 hover:bg-emerald-500/10 sm:pr-5"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-sm font-bold text-slate-300">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div data-testid="test-result">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                Test completado
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <span className="grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-emerald-400 to-sky-500 text-3xl font-extrabold text-slate-950">
                  {level.code}
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold text-white">
                    Tu nivel estimado es {level.code} · {level.label}
                  </h3>
                  <p className="text-slate-400">
                    Acertaste {score} de {QUESTIONS.length} preguntas.
                  </p>
                </div>
              </div>

              <p className="mt-5 leading-relaxed text-slate-300">
                {level.summary}
              </p>

              <ul className="mt-6 space-y-2 rounded-2xl border border-white/10 bg-slate-950/50 p-5 text-sm">
                {QUESTIONS.map((item, index) => {
                  const ok = answers[index] === item.answer;
                  return (
                    <li key={item.id} className="flex gap-3 text-slate-300">
                      <span className={ok ? "text-emerald-400" : "text-rose-400"}>
                        {ok ? "✓" : "✕"}
                      </span>
                      <span>
                        <strong>Pregunta {index + 1}:</strong>{" "}
                        {item.options[answers[index]]}
                        {!ok && (
                          <span className="text-slate-400">
                            {" "}
                            (correcta: {item.options[item.answer]})
                          </span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <label className="mt-6 block text-sm font-semibold text-slate-200">
                Tu nombre (opcional)
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Ej: Vicente"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-base font-normal text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-400"
                />
              </label>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-emerald-500 px-6 py-4 text-base font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Enviar mis resultados por WhatsApp
                </a>
                <button
                  type="button"
                  onClick={reset}
                  className="rounded-full border border-white/20 px-6 py-4 text-base font-semibold text-slate-200 transition hover:bg-white/10"
                >
                  Repetir el test
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
