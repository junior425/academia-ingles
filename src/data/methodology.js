import { PHOTOS } from "./images";

export const STEPS = [
  {
    id: 1,
    tag: "Input",
    icon: "🎧",
    accent: "brand",
    photo: PHOTOS.onlineClass,
    title: "Audio Input",
    subtitle: "Audio nativo generado con IA",
    description:
      "Empiezas escuchando la situación exacta que vas a vivir: una llamada con el carrier, un check-in en el aeropuerto, una historia animada si es un niño. Audio a velocidad y acento reales, no grabaciones de libro.",
    outcome: "Entrenas el oído con el inglés que vas a escuchar mañana.",
    examples: [
      "Empresas: llamada con el cliente en feria",
      "Viajes: migración y hotel",
      "Niños: cuento animado del día",
    ],
  },
  {
    id: 2,
    tag: "Noticing",
    icon: "🔍",
    accent: "aqua",
    photo: PHOTOS.studentNotes,
    title: "Chunk Noticing",
    subtitle: "Identificación de bloques de habla nativa",
    description:
      "Extraemos del audio los bloques léxicos (chunks) que los nativos usan como una sola pieza: “we're running behind schedule”, “I'd like to check in”, “can I have some more, please?”.",
    outcome: "Dejas de armar frases palabra por palabra.",
    examples: [
      "Bloques listos para usar",
      "Cero listas de vocabulario suelto",
      "Se marcan el ritmo y la entonación",
    ],
  },
  {
    id: 3,
    tag: "Hack",
    icon: "🧠",
    accent: "coral",
    photo: PHOTOS.learnerPhone,
    title: "L1 Mental Hack",
    subtitle: "Puente lógico con tu idioma nativo",
    description:
      "Conectamos cada bloque con la lógica del español para saltar las trampas gramaticales. No memorizas reglas: instalas un atajo mental que te permite producir la estructura correcta bajo presión.",
    outcome: "Cero parálisis por gramática al hablar.",
    examples: [
      "Atajos sobre la lógica del español",
      "Sin reglas memorizadas",
      "Funciona igual para adultos y niños",
    ],
  },
  {
    id: 4,
    tag: "Drill",
    icon: "🔁",
    accent: "mango",
    photo: PHOTOS.studyGroup,
    title: "Block Mutation",
    subtitle: "Práctica de sustitución rápida",
    description:
      "Mutamos el bloque decenas de veces cambiando producto, ruta, fecha, lugar o interlocutor, hasta que la estructura sale automática con cualquier variable de tu vida o de tu negocio.",
    outcome: "Fluidez automática, no traducción mental.",
    examples: [
      "Repetición con variables reales",
      "Velocidad progresiva",
      "Juegos de sustitución para juniors",
    ],
  },
  {
    id: 5,
    tag: "Challenge",
    icon: "🎯",
    accent: "brand",
    photo: PHOTOS.professionals,
    title: "Final Challenge",
    subtitle: "Roleplay real, sin guion",
    description:
      "Cerramos con una simulación real: contenedor retenido, vuelo perdido, entrevista de trabajo o una aventura en inglés para los más pequeños. Tu coach juega el rol contrario y sube la presión hasta que resuelves.",
    outcome: "Sales de la clase habiendo resuelto el caso en inglés.",
    examples: [
      "Empresas: negociación de tarifa",
      "Viajes: reclamo en el aeropuerto",
      "Niños: misión de rol divertida",
    ],
  },
];
