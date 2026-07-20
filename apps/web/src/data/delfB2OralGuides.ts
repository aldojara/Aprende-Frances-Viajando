export type OralGuideKind = "listening" | "speaking";

export type OralIcon =
  | "audio"
  | "award"
  | "book"
  | "check"
  | "chat"
  | "clock"
  | "compass"
  | "document"
  | "download"
  | "edit"
  | "eye"
  | "flag"
  | "link"
  | "list"
  | "mic"
  | "person"
  | "search"
  | "shield"
  | "spark"
  | "star"
  | "target"
  | "trophy";

type Tone = "violet" | "blue" | "green" | "orange" | "red";

export type OralGuide = {
  kind: OralGuideKind;
  seoTitle: string;
  description: string;
  canonical: string;
  title: string;
  breadcrumb: string;
  durationBadge: string;
  ctaLabel: string;
  ctaHref: string;
  intro: string;
  toc: { id: string; label: string; icon: OralIcon }[];
  stats: { icon: OralIcon; value: string; label: string; tone: Tone }[];
};

export const speakingGuide: OralGuide = {
  kind: "speaking",
  seoTitle: "DELF B2 · Producción oral",
  description:
    "Guía visual para preparar la producción oral DELF B2: partes, criterios, estrategia, práctica, errores frecuentes y ruta de preparación.",
  canonical: "/delf/b2/production-orale/",
  title: "Producción oral DELF B2",
  breadcrumb: "Producción oral",
  durationBadge: "15-20 min aprox.",
  ctaLabel: "Quiero practicar Producción oral",
  ctaHref: "#practica-recursos",
  intro:
    "Esta sección te ayuda a expresar y defender tus ideas con fluidez, claridad y estructura frente a un examinador. Demuestra tu capacidad para argumentar, justificar tus opiniones e interactuar de forma natural en francés.",
  toc: [
    { id: "resumen-seccion", label: "Resumen de la sección", icon: "check" },
    { id: "partes-produccion-oral", label: "Las 3 partes de la producción oral", icon: "spark" },
    { id: "que-se-evalua", label: "¿Qué se evalúa?", icon: "check" },
    { id: "preparar-respuesta", label: "Cómo preparar una respuesta", icon: "list" },
    { id: "estrategias-clave", label: "Estrategias clave", icon: "star" },
    { id: "practica-recursos", label: "Práctica y recursos", icon: "document" },
    { id: "errores-frecuentes", label: "Errores frecuentes", icon: "shield" },
    { id: "ruta-preparacion", label: "Tu ruta de preparación", icon: "link" },
    { id: "siguiente-paso", label: "Siguiente paso", icon: "edit" },
  ],
  stats: [
    { icon: "audio", value: "1 competencia", label: "Producción oral", tone: "violet" },
    { icon: "trophy", value: "25 puntos", label: "Por esta prueba", tone: "orange" },
    { icon: "check", value: "15-20 min + preparación", label: "Duración total", tone: "green" },
    { icon: "person", value: "Entrevista individual", label: "Con el examinador", tone: "violet" },
    { icon: "shield", value: "50/100 puntos", label: "Mínimo global para aprobar", tone: "blue" },
  ],
};

export const listeningGuide: OralGuide = {
  kind: "listening",
  seoTitle: "DELF B2 · Comprensión oral",
  description:
    "Guía visual para preparar la comprensión oral DELF B2: documentos, criterios, tipos de audio, estrategias, simulaciones y ruta de preparación.",
  canonical: "/delf/b2/comprehension-orale/",
  title: "Comprensión oral",
  breadcrumb: "Comprensión oral",
  durationBadge: "40 min aprox.",
  ctaLabel: "Quiero practicar la Comprensión oral",
  ctaHref: "#practica-simulaciones",
  intro:
    "Escucha diversos documentos y demuestra tu capacidad para comprender información, ideas principales, detalles específicos, opiniones y puntos de vista.",
  toc: [
    { id: "resumen-examen", label: "Resumen del examen", icon: "check" },
    { id: "estructura-prueba", label: "Las 4 pruebas del DELF B2", icon: "check" },
    { id: "estrategias-exito", label: "Recorrido del día del examen", icon: "check" },
    { id: "ruta-preparacion", label: "Cómo se obtiene el diploma", icon: "check" },
    { id: "que-se-evalua", label: "Qué evalúa el DELF B2", icon: "check" },
    { id: "errores-frecuentes", label: "Errores frecuentes", icon: "check" },
    { id: "practica-simulaciones", label: "Recursos relacionados", icon: "check" },
    { id: "franja-final", label: "Siguiente paso", icon: "check" },
  ],
  stats: [
    { icon: "audio", value: "1 competencia", label: "Comprensión oral", tone: "blue" },
    { icon: "star", value: "25 puntos", label: "Por esta prueba", tone: "violet" },
    { icon: "clock", value: "40 min aprox.", label: "Duración total", tone: "blue" },
    { icon: "shield", value: "Mínimo 25/50", label: "puntos para aprobar", tone: "violet" },
    { icon: "check", value: "50/100 puntos", label: "Mínimo global para aprobar", tone: "green" },
  ],
};

export const speakingParts = [
  {
    part: "Parte 1",
    title: "Presentación y punto de vista",
    icon: "person",
    tone: "violet",
    objective: "Presentarte y expresar tu punto de vista sobre temas generales.",
    duration: "2-3 min aprox.",
    preparation: "Sin preparación",
  },
  {
    part: "Parte 2",
    title: "Interacción con el examinador",
    icon: "chat",
    tone: "green",
    objective: "Dialogar con el examinador, responder preguntas y profundizar en los temas.",
    duration: "5-7 min aprox.",
    preparation: "Preparación breve",
  },
  {
    part: "Parte 3",
    title: "Opinión argumentada a partir de un documento",
    icon: "document",
    tone: "orange",
    objective: "Analizar un documento y argumentar tu opinión de forma estructurada.",
    duration: "6-8 min aprox.",
    preparation: "10 min",
  },
] as const;

export const speakingEvaluation = [
  "Claridad y precisión en las ideas.",
  "Coherencia y organización del discurso.",
  "Riqueza y corrección léxica.",
  "Corrección gramatical.",
  "Pronunciación y fluidez.",
  "Capacidad para argumentar y justificar.",
];

export const speakingPrepSteps = [
  { icon: "search", title: "Analiza el tema", text: "Comprende la pregunta y los puntos clave." },
  { icon: "list", title: "Organiza tus ideas", text: "Estructura tu respuesta con un orden lógico." },
  { icon: "chat", title: "Argumenta con ejemplos", text: "Usa ejemplos concretos para justificar tu opinión." },
  { icon: "link", title: "Usa conectores", text: "Aporta coherencia con conectores adecuados." },
  { icon: "flag", title: "Concluye con claridad", text: "Resume tu posición y abre la discusión." },
];

export const speakingStrategies = [
  "Habla con naturalidad y ritmo: evita leer o memorizar.",
  "Desarrolla tus ideas con ejemplos y detalles.",
  "Usa un vocabulario variado y adecuado al contexto.",
  "Escucha atentamente y responde a lo que se te pregunta.",
  "Si dudas, reformula y sigue comunicando.",
];

export const speakingResources = [
  { icon: "audio", title: "Simulaciones orales", text: "Práctica completa de las 3 partes con ejemplos reales.", href: "#siguiente-paso", action: "Practicar" },
  { icon: "book", title: "Preguntas guiadas", text: "Ejercicios por tema con preguntas y posibles respuestas.", href: "#preparar-respuesta", action: "Explorar" },
  { icon: "edit", title: "Conectores útiles", text: "Lista de conectores para argumentar y organizar tu discurso.", href: "#estrategias-clave", action: "Ver lista" },
  { icon: "chat", title: "Expresiones para opinar", text: "Frases útiles para expresar acuerdo, desacuerdo y matices.", href: "#que-se-evalua", action: "Ver frases" },
  { icon: "document", title: "Modelos de respuesta", text: "Ejemplos de respuestas completas y análisis comentados.", href: "#partes-produccion-oral", action: "Ver modelos" },
];

export const speakingErrors = [
  "Respuestas demasiado cortas o poco desarrolladas.",
  "Falta de organización y cambios bruscos de idea.",
  "Vocabulario repetitivo o poco preciso.",
  "Errores gramaticales que dificultan la comprensión.",
  "No responder exactamente a lo que se pregunta.",
];

export const speakingRoute = [
  { icon: "audio", title: "Comprensión oral", status: "Completado", done: true },
  { icon: "book", title: "Comprensión escrita", status: "Completado", done: true },
  { icon: "edit", title: "Producción escrita", status: "Completado", done: true },
  { icon: "chat", title: "Producción oral", status: "En curso", active: true },
  { icon: "award", title: "Examen DELF B2", status: "Tu objetivo" },
];

export const listeningDocuments = [
  {
    number: "1",
    title: "Documento 1",
    subtitle: "Monólogo o diálogo",
    icon: "audio",
    tone: "violet",
    objective: "Comprender información específica, ideas principales y detalles relevantes.",
    facts: ["Duración: 6-8 min aprox.", "2 escuchas", "8-10 preguntas", "10 puntos"],
    situation: "Situaciones cotidianas, anuncios, informaciones prácticas.",
  },
  {
    number: "2",
    title: "Documento 2",
    subtitle: "Interacción o debate",
    icon: "chat",
    tone: "green",
    objective: "Comprender opiniones, argumentos y puntos de vista.",
    facts: ["Duración: 8-10 min aprox.", "2 escuchas", "10-12 preguntas", "12 puntos"],
    situation: "Conversaciones, entrevistas, debates moderados.",
  },
  {
    number: "3",
    title: "Documento 3",
    subtitle: "Exposición temática",
    icon: "mic",
    tone: "orange",
    objective: "Comprender ideas complejas, estructura y detalles importantes.",
    facts: ["Duración: 10-12 min aprox.", "2 escuchas", "10-12 preguntas", "13 puntos"],
    situation: "Conferencias, reportajes, documentales, clases.",
  },
];

export const listeningEvaluation = [
  "Comprender ideas principales y detalles específicos.",
  "Identificar opiniones, puntos de vista y propósito del hablante.",
  "Seguir la estructura y el desarrollo de un discurso.",
  "Inferir significados e intenciones.",
  "Reconocer información relevante y distinguirla de la secundaria.",
];

export const listeningAudioTypes = [
  "Anuncios y mensajes públicos",
  "Entrevistas y testimonios",
  "Debates y conversaciones",
  "Reportajes y documentales",
  "Conferencias y clases",
];

export const listeningErrors = [
  "No escuchar la pregunta antes de cada escucha.",
  "Perderse en detalles secundarios.",
  "No identificar la idea principal.",
  "No gestionar bien el tiempo.",
  "Cambiar respuestas sin revisar.",
];

export const listeningStrategy = [
  { icon: "eye", title: "Antes de escuchar", text: "Lee las preguntas y opciones. Anticipa el tema y las ideas posibles." },
  { icon: "audio", title: "Durante la primera escucha", text: "Enfócate en las ideas generales y la estructura del documento." },
  { icon: "audio", title: "Durante la segunda escucha", text: "Atiende los detalles importantes y responde con precisión." },
  { icon: "edit", title: "Toma notas clave", text: "Anota palabras clave, números, ejemplos y conectores." },
  { icon: "check", title: "Revisa tus respuestas", text: "Verifica coherencia y completa lo que falte." },
];

export const listeningPracticeLinks = [
  { icon: "document", title: "Ejercicios por tipo de audio", text: "Practica con audios cortos y preguntas.", href: "#estructura-prueba" },
  { icon: "document", title: "Simulación completa", text: "Prueba completa de Comprensión oral.", href: "#estrategias-exito" },
  { icon: "list", title: "Banco de audios", text: "Escucha audios auténticos clasificados.", href: "#que-se-evalua" },
];

export const listeningTips = [
  "Escucha activamente y con atención.",
  "Aprende conectores y expresiones comunes.",
  "Mejora tu vocabulario y pronunciación.",
  "Haz resúmenes orales de lo escuchado.",
  "Practica todos los días, aunque sean 10 minutos.",
];

export const listeningRoute = [
  { icon: "audio", title: "Comprensión oral", text: "Comprende audios y responde preguntas." },
  { icon: "book", title: "Comprensión escrita", text: "Analiza textos y responde con precisión." },
  { icon: "chat", title: "Producción oral", text: "Expresa y argumenta tus ideas con claridad." },
  { icon: "edit", title: "Producción escrita", text: "Escribe textos claros, cohesivos y estructurados." },
];
