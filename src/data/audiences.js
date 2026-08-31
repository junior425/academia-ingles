import { PHOTOS } from "./images";

export const AUDIENCES = [
  {
    id: "empresas",
    tab: "Empresas y Profesionales",
    badge: "ESP",
    title: "Empresas y Profesionales (ESP)",
    tagline: "Inglés para tu industria, no para un libro de texto",
    description:
      "Programas de 8 meses construidos sobre el objeto social de la empresa: 70% resolución de crisis reales del sector y 30% transferencia a la vida general del colaborador.",
    accent: "brand",
    photo: PHOTOS.meeting,
    cta: "Agendar diagnóstico para mi empresa",
    whatsapp:
      "Hola, quiero información sobre los programas de inglés para empresas y profesionales (ESP).",
    cards: [
      {
        title: "Logística y Freight Forwarding",
        detail:
          "Cotizar, hacer tracking, sostener disputas de aduana y negociar tarifas con carriers.",
        photo: PHOTOS.port,
      },
      {
        title: "Medicina",
        detail:
          "Atención del paciente internacional, handoff clínico y presentaciones en congresos.",
        photo: PHOTOS.doctor,
      },
      {
        title: "Ingeniería",
        detail:
          "Reportes técnicos, root cause analysis y auditorías con casa matriz.",
        photo: PHOTOS.engineering,
      },
      {
        title: "Ejecutivos y ferias",
        detail:
          "Pitch de la compañía, reuniones con múltiples voces y cierres de alto valor.",
        photo: PHOTOS.professionals,
      },
    ],
  },
  {
    id: "adultos",
    tab: "Adultos y Viajes",
    badge: "General & Conversacional",
    title: "Adultos y Viajes (Inglés General & Conversacional)",
    tagline:
      "Habla desde la primera clase, aunque tu viaje sea el mes que viene",
    description:
      "Speaking acelerado con los bloques que de verdad se usan en aeropuertos, hoteles, entrevistas y conversaciones cotidianas. Ideal si viajas, te mudas al exterior o quieres perder el miedo a hablar.",
    accent: "aqua",
    photo: PHOTOS.airport,
    cta: "Quiero clases de conversación",
    whatsapp:
      "Hola, quiero información sobre los cursos de inglés para adultos, viajes y conversación.",
    cards: [
      {
        title: "Fast-track para viajar",
        detail:
          "Aeropuerto, migración, hoteles, restaurantes y transporte sin bloquearte.",
        photo: PHOTOS.airport,
      },
      {
        title: "Conversación de la vida real",
        detail:
          "Small talk, opiniones, anécdotas y humor: hablar como habla la gente.",
        photo: PHOTOS.learnerPhone,
      },
      {
        title: "Cultura y contexto",
        detail:
          "Expresiones, acentos y códigos culturales de EE. UU., UK y Canadá.",
        photo: PHOTOS.planeWindow,
      },
      {
        title: "Mudarte al extranjero",
        detail:
          "Trámites, arriendo, banco, entrevistas de trabajo y vida diaria fuera.",
        photo: PHOTOS.coworking,
      },
    ],
  },
  {
    id: "ninos",
    tab: "Niños y Juniors",
    badge: "Kids Method",
    title: "Niños y Juniors (Kids Method)",
    tagline: "Aprenden inglés jugando, con historias y videos interactivos",
    description:
      "Clases online o presenciales, dinámicas y cortas, con videos, storytelling animado y bloques de lenguaje que los niños repiten con gusto. Nada de listas de vocabulario ni tareas aburridas.",
    accent: "mango",
    photo: PHOTOS.kidsClass,
    cta: "Quiero clases para mis hijos",
    whatsapp:
      "Hola, quiero información sobre las clases de inglés para niños (Kids Method).",
    cards: [
      {
        title: "Videos interactivos",
        detail:
          "Cada clase arranca con un video corto que fija los bloques del día.",
        photo: PHOTOS.onlineClass,
      },
      {
        title: "Storytelling animado",
        detail:
          "Cuentos con personajes repetitivos y musicales, estilo Pete the Cat.",
        photo: PHOTOS.kidsPlay,
      },
      {
        title: "Animated chunks",
        detail:
          "Frases completas con gestos, ritmo y canciones: se aprenden de memoria sin esfuerzo.",
        photo: PHOTOS.kidsClass,
      },
      {
        title: "Roleplay lúdico",
        detail:
          "Juegos de rol: tienda, doctor, viaje en avión y aventuras en inglés.",
        photo: PHOTOS.studentNotes,
      },
    ],
  },
];

export const ACCENTS = {
  brand: {
    chip: "bg-brand-100 text-brand-700",
    button: "bg-brand-600 hover:bg-brand-700 text-white",
    tab: "bg-brand-600 text-white shadow-lg shadow-brand-600/25",
    ring: "ring-brand-200",
    dot: "bg-brand-500",
    text: "text-brand-700",
    soft: "bg-brand-50",
  },
  aqua: {
    chip: "bg-aqua-100 text-aqua-600",
    button: "bg-aqua-500 hover:bg-aqua-600 text-white",
    tab: "bg-aqua-500 text-white shadow-lg shadow-aqua-500/25",
    ring: "ring-aqua-100",
    dot: "bg-aqua-500",
    text: "text-aqua-600",
    soft: "bg-aqua-50",
  },
  mango: {
    chip: "bg-mango-100 text-mango-600",
    button: "bg-mango-500 hover:bg-mango-600 text-white",
    tab: "bg-mango-500 text-white shadow-lg shadow-mango-500/25",
    ring: "ring-mango-100",
    dot: "bg-mango-500",
    text: "text-mango-600",
    soft: "bg-mango-50",
  },
  coral: {
    chip: "bg-coral-100 text-coral-600",
    button: "bg-coral-500 hover:bg-coral-600 text-white",
    tab: "bg-coral-500 text-white shadow-lg shadow-coral-500/25",
    ring: "ring-coral-100",
    dot: "bg-coral-500",
    text: "text-coral-600",
    soft: "bg-coral-50",
  },
};
