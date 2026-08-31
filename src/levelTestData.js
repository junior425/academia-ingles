export const QUESTIONS = [
  {
    id: 1,
    prompt: "Choose the correct option: “Hello, my name ___ Ana.”",
    options: ["am", "is", "are", "be"],
    answer: 1,
  },
  {
    id: 2,
    prompt: "Choose the correct option: “She ___ to the gym every morning.”",
    options: ["go", "goes", "going", "is go"],
    answer: 1,
  },
  {
    id: 3,
    prompt: "Choose the correct option: “I ___ in London for three years.”",
    options: ["live", "am living", "have lived", "was living"],
    answer: 2,
  },
  {
    id: 4,
    prompt:
      "Choose the correct option: “If I ___ more time, I would travel the world.”",
    options: ["have", "had", "will have", "am having"],
    answer: 1,
  },
];

export const LEVELS = [
  {
    code: "A1",
    label: "Principiante",
    summary:
      "Estás empezando. Trabajaremos vocabulario esencial y frases básicas para que puedas presentarte y sostener conversaciones simples.",
  },
  {
    code: "A2",
    label: "Básico",
    summary:
      "Ya entiendes lo esencial. El foco será el presente y pasado simple, y hablar de tu rutina y tus planes con seguridad.",
  },
  {
    code: "B1",
    label: "Intermedio",
    summary:
      "Te comunicas, pero dudas al hablar. Trabajaremos fluidez, tiempos verbales compuestos y conversación sobre temas reales.",
  },
  {
    code: "B2",
    label: "Intermedio alto",
    summary:
      "Buen dominio general. Pasaremos a precisión, expresiones naturales y conversación profesional sin traducir mentalmente.",
  },
  {
    code: "C1",
    label: "Avanzado",
    summary:
      "Excelente nivel. Refinaremos matices, acento, estructuras avanzadas y desempeño en contextos exigentes.",
  },
];

export function levelForScore(score) {
  return LEVELS[Math.min(score, LEVELS.length - 1)];
}
