export const DEMO_WHATSAPP_URL =
  "https://wa.me/573233058573?text=Hola%20Vicente,%20quiero%20probar%20una%20clase%20demo%20con%20la%20metodolog%C3%ADa%20de%20Anclaje%20Pragm%C3%A1tico";

export const PRAGMATIC_STEPS = [
  {
    id: 1,
    icon: "💬",
    accent: "brand",
    title: "Tu intención real en español",
    description:
      "Partimos de las frases y conectores que realmente usas en tu trabajo, negocios o vida diaria, no de ejercicios artificiales de libro.",
  },
  {
    id: 2,
    icon: "🧩",
    accent: "aqua",
    title: "Mapeo al Chunk Nativo",
    description:
      "Reemplazamos traducciones literales robóticas por bloques de palabras de alta frecuencia (chunks) listos para usar sin pensar en reglas.",
  },
  {
    id: 3,
    icon: "🚀",
    accent: "mango",
    title: "Activación en Contexto Real",
    description:
      "Practicas esas estructuras en escenarios de consultoría, reuniones, viajes y conversaciones cotidianas hasta que salgan en automático.",
  },
];

export const CHUNK_EXAMPLES = [
  {
    id: "causa",
    label: "Causa y consecuencia",
    title: "Conectar causa y consecuencia",
    spanish: "“…lo que me llevó a tomar una decisión rápida.”",
    literal: "“…so that made me to take a fast decision.”",
    literalNote: "Suena forzado y repetitivo.",
    chunk: "“…prompting me to make a quick call.”",
    tip: "“Make a call” = tomar una decisión. Se une al hablar: /meɪ-kə-kwɪk-kɔːl/, casi como una sola palabra.",
  },
  {
    id: "prever",
    label: "Prever en negocios",
    title: "Anticiparse / Prever en negocios o rutina",
    spanish: "“Tenemos que prever un margen para imprevistos.”",
    literal: "“We have to foresee a margin for unexpected things.”",
    literalNote: "Poco natural en conversación.",
    chunk: "“We need to allow for unexpected delays.”",
    tip: "“Allow for + sustantivo” (delays, traffic, costs). El “for” se reduce: /əˈlaʊ fər/.",
  },
  {
    id: "verdad",
    label: "Ir al grano",
    title: "Ir directo al grano con honestidad",
    spanish: "“La verdad es que… / Lo cierto es que…”",
    literal: "“The true is that…”",
    literalNote: "Error clásico de traducción directa.",
    chunk: "“The fact of the matter is…”",
    tip: "“True” es adjetivo; el sustantivo es “truth”. Haz una pausa breve después de “is…” para dar peso a lo que sigue.",
  },
  {
    id: "persuadir",
    label: "Persuadir",
    title: "Hacer caer en cuenta y persuadir",
    spanish: "“Le hice caer en cuenta del error y logré convencerlo.”",
    literal: "“I made him fall in account and convinced him.”",
    literalNote: "No existe en inglés.",
    chunk: "“I pointed out the mistake and brought him around.”",
    tip: "“Point out” = señalar; “bring someone around” = convencer poco a poco. Suena “brought-im-around”: la h de “him” casi desaparece.",
  },
];
