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
        "Quiero agendar mi clase diagnóstico gratis.",
      ].join("\n")
    : "";

  const question = QUESTIONS[current];
  const progress = (answers.length / QUESTIONS.length) * 100;

  return (
    <section id="test" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-aqua-600">
            Test interactivo
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
            Mide tu nivel de inglés en 1 minuto
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            4 preguntas rápidas y te damos el nivel estimado del Marco Común
            Europeo (A1 a C1) como punto de partida.
          </p>
        </div>

        <div className="mt-10 rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200 sm:p-10">
          {!finished ? (
            <div>
              <div className="flex items-center justify-between text-sm font-semibold text-slate-500">
                <span>
                  Pregunta {answers.length + 1} de {QUESTIONS.length}
                </span>
                <span>{Math.round(progress)}% completado</span>
              </div>
              <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-500 via-aqua-500 to-mango-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <h3 className="mt-8 text-xl font-bold text-brand-900 sm:text-2xl">
                {question.prompt}
              </h3>

              <div className="mt-6 grid gap-3">
                {question.options.map((option, index) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleAnswer(index)}
                    className="flex items-center gap-4 rounded-2xl bg-slate-50 px-5 py-4 pr-16 text-left text-base font-semibold text-slate-700 ring-1 ring-slate-200 transition hover:bg-brand-50 hover:ring-brand-400 sm:pr-5"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-sm font-bold text-brand-700 ring-1 ring-slate-200">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div data-testid="test-result">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-aqua-600">
                Test completado
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <span className="grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-brand-500 via-aqua-500 to-mango-500 text-3xl font-extrabold text-white shadow-lg shadow-brand-500/30">
                  {level.code}
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold text-brand-900">
                    Tu nivel estimado es {level.code} · {level.label}
                  </h3>
                  <p className="text-slate-500">
                    Acertaste {score} de {QUESTIONS.length} preguntas.
                  </p>
                </div>
              </div>

              <p className="mt-5 leading-relaxed text-slate-600">
                {level.summary}
              </p>

              <ul className="mt-6 space-y-2 rounded-2xl bg-slate-50 p-5 text-sm ring-1 ring-slate-200">
                {QUESTIONS.map((item, index) => {
                  const ok = answers[index] === item.answer;
                  return (
                    <li key={item.id} className="flex gap-3 text-slate-600">
                      <span
                        className={`font-bold ${ok ? "text-aqua-600" : "text-coral-500"}`}
                      >
                        {ok ? "✓" : "✕"}
                      </span>
                      <span>
                        <strong className="text-brand-900">
                          Pregunta {index + 1}:
                        </strong>{" "}
                        {item.options[answers[index]]}
                        {!ok && (
                          <span className="text-slate-500">
                            {" "}
                            (correcta: {item.options[item.answer]})
                          </span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <label className="mt-6 block text-sm font-semibold text-slate-700">
                Tu nombre (opcional)
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Ej: Vicente"
                  className="mt-2 w-full rounded-xl bg-slate-50 px-4 py-3 text-base font-normal text-slate-800 outline-none ring-1 ring-slate-200 transition placeholder:text-slate-400 focus:ring-2 focus:ring-brand-400"
                />
              </label>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-brand-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Enviar mis resultados por WhatsApp
                </a>
                <button
                  type="button"
                  onClick={reset}
                  className="rounded-full bg-white px-6 py-4 text-base font-bold text-slate-600 ring-1 ring-slate-300 transition hover:bg-slate-50"
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
