export type WrittenGuideKind = "reading" | "writing";

export type WrittenIcon =
  | "audio"
  | "award"
  | "book"
  | "chart"
  | "check"
  | "clipboard"
  | "clock"
  | "compass"
  | "document"
  | "download"
  | "edit"
  | "eye"
  | "link"
  | "list"
  | "pen"
  | "quote"
  | "search"
  | "shield"
  | "spark"
  | "star"
  | "target";

type Tone = "violet" | "blue" | "green" | "orange" | "red";

export type WrittenGuide = {
  kind: WrittenGuideKind;
  seoTitle: string;
  description: string;
  canonical: string;
  title: string;
  subtitle?: string;
  breadcrumb: string;
  durationBadge: string;
  ctaLabel: string;
  ctaHref: string;
  intro: string;
  toc: { id: string; label: string; icon: WrittenIcon }[];
  stats: { icon: WrittenIcon; value: string; label: string; tone: Tone }[];
};

export const readingGuide: WrittenGuide = {
  kind: "reading",
  seoTitle: "DELF B2 · Comprensión escrita",
  description:
    "Guía visual para preparar la comprensión escrita DELF B2: estructura, criterios, tipos de textos, errores frecuentes, estrategias y ruta de preparación.",
  canonical: "/delf/b2/comprension-escrita/",
  title: "Comprensión escrita",
  breadcrumb: "Comprensión escrita",
  durationBadge: "60 min aprox.",
  ctaLabel: "Quiero practicar la Comprensión escrita",
  ctaHref: "#practica-recursos",
  intro:
    "Analiza y comprende diferentes tipos de textos escritos para identificar ideas principales, detalles relevantes, opiniones y la intención del autor.\n\nDemuestra tu capacidad para leer con autonomía y responder con precisión.",
  toc: [
    { id: "resumen", label: "Resumen de la sección", icon: "check" },
    { id: "partes-comprension-escrita", label: "Las partes de la Comprensión escrita", icon: "document" },
    { id: "que-se-evalua", label: "¿Qué se evalúa?", icon: "check" },
    { id: "abordar-un-texto", label: "Cómo abordar un texto", icon: "list" },
    { id: "estrategias-clave", label: "Estrategias clave", icon: "star" },
    { id: "practica-recursos", label: "Práctica y recursos", icon: "book" },
    { id: "errores-frecuentes", label: "Errores frecuentes", icon: "shield" },
    { id: "ruta-preparacion", label: "Tu ruta de preparación", icon: "link" },
    { id: "siguiente-paso", label: "Siguiente paso", icon: "edit" },
  ],
  stats: [
    { icon: "book", value: "1 competencia", label: "Comprensión escrita", tone: "blue" },
    { icon: "star", value: "25 puntos", label: "Por esta prueba", tone: "violet" },
    { icon: "clock", value: "60 min aprox.", label: "Duración total", tone: "blue" },
    { icon: "shield", value: "Mínimo 25/50", label: "puntos para aprobar", tone: "violet" },
    { icon: "check", value: "50/100 puntos", label: "Mínimo global para aprobar", tone: "green" },
  ],
};

export const writingGuide: WrittenGuide = {
  kind: "writing",
  seoTitle: "DELF B2 · Producción escrita",
  description:
    "Guía visual para preparar la producción escrita DELF B2: tareas, criterios, construcción de respuestas, estrategias, errores frecuentes y ruta de preparación.",
  canonical: "/delf/b2/produccion-escrita/",
  title: "Producción escrita DELF B2",
  subtitle: "Expresa tus ideas con claridad, argumenta con solidez y escribe con precisión.",
  breadcrumb: "Producción escrita",
  durationBadge: "60 min aprox.",
  ctaLabel: "Quiero practicar Producción escrita",
  ctaHref: "#practica-recursos",
  intro:
    "En la Producción escrita del DELF B2 deberás redactar textos bien estructurados, coherentes y adecuados al contexto. Demuestra tu capacidad para argumentar, informar y persuadir por escrito.",
  toc: [
    { id: "resumen-seccion", label: "Resumen de la sección", icon: "check" },
    { id: "tareas-produccion-escrita", label: "Las 2 tareas", icon: "document" },
    { id: "que-se-evalua", label: "¿Qué se evalúa?", icon: "list" },
    { id: "construir-respuesta", label: "Cómo construir una buena respuesta", icon: "clipboard" },
    { id: "estrategias-clave", label: "Estrategias clave", icon: "star" },
    { id: "practica-recursos", label: "Práctica y recursos", icon: "book" },
    { id: "errores-frecuentes", label: "Errores frecuentes", icon: "shield" },
    { id: "ruta-preparacion", label: "Tu ruta de preparación", icon: "link" },
    { id: "siguiente-paso", label: "Siguiente paso", icon: "edit" },
  ],
  stats: [
    { icon: "target", value: "1 competencia", label: "Producción escrita", tone: "violet" },
    { icon: "star", value: "25 puntos", label: "Por esta competencia", tone: "orange" },
    { icon: "clock", value: "60 min aprox.", label: "Duración total", tone: "blue" },
    { icon: "document", value: "2 tareas", label: "Obligatorias", tone: "violet" },
    { icon: "chart", value: "50/100 puntos", label: "Mínimo global para aprobar", tone: "blue" },
  ],
};

export const readingParts = [
  {
    number: "1",
    title: "Comprensión de anuncios",
    icon: "spark",
    tone: "violet",
    objective: "Comprender información práctica en documentos cotidianos.",
    facts: ["3 documentos", "5 preguntas", "5 puntos"],
    duration: "10 min aprox.",
  },
  {
    number: "2",
    title: "Comprensión de textos cortos",
    icon: "document",
    tone: "green",
    objective: "Identificar ideas principales y detalles importantes.",
    facts: ["2 textos", "10 preguntas", "10 puntos"],
    duration: "20 min aprox.",
  },
  {
    number: "3",
    title: "Comprensión de texto largo",
    icon: "book",
    tone: "orange",
    objective: "Comprender en profundidad y analizar el contenido.",
    facts: ["1 texto (800-1000 palabras)", "10 preguntas", "10 puntos"],
    duration: "25 min aprox.",
  },
  {
    number: "4",
    title: "Comprensión de textos complejos",
    icon: "chart",
    tone: "violet",
    objective: "Relacionar ideas, opiniones y argumentos del autor.",
    facts: ["1 o 2 textos", "5 preguntas", "5 puntos"],
    duration: "5 min aprox.",
  },
] as const;

export const readingEvaluation = [
  "Comprender la información esencial y los detalles.",
  "Identificar la intención y el punto de vista del autor.",
  "Establecer relaciones entre ideas y argumentos.",
  "Interpretar datos, opiniones y hechos.",
  "Reconocer el léxico y las estructuras en contexto.",
];

export const readingTextTypes = [
  "Anuncios y comunicados",
  "Artículos de prensa",
  "Ensayos y opiniones",
  "Informes y estudios",
  "Cartas y correos",
  "Gráficos, tablas y encuestas",
];

export const readingErrors = [
  "No leer las preguntas antes del texto.",
  "Perderse en detalles secundarios.",
  "No gestionar bien el tiempo.",
  "Copiar fragmentos sin comprender.",
  "No verificar las respuestas antes de entregar.",
];

export const readingStrategies = [
  { icon: "eye", title: "Lee las preguntas primero", text: "Te ayuda a enfocar tu atención en lo importante." },
  { icon: "search", title: "Identifica palabras clave", text: "Busca sinónimos y referencias." },
  { icon: "list", title: "Comprende la estructura del texto", text: "Introducción, desarrollo y conclusión." },
  { icon: "clock", title: "Gestiona tu tiempo", text: "No te quedes mucho tiempo en una pregunta." },
  { icon: "check", title: "Revisa tus respuestas", text: "Asegúrate de que respondan la pregunta." },
];

export const readingPracticeLinks = [
  { icon: "document", title: "Ejercicios por tipo de texto", text: "Practica cada parte de la prueba", href: "#partes-comprension-escrita" },
  { icon: "clipboard", title: "Simulación completa", text: "Prueba completa de 60 minutos", href: "#abordar-un-texto" },
  { icon: "list", title: "Banco de textos", text: "Accede a múltiples textos auténticos", href: "#que-se-evalua" },
];

export const readingTips = [
  "Amplía tu vocabulario y estructuras complejas.",
  "Fíjate en conectores y marcadores del discurso.",
  "Haz resúmenes cortos de cada párrafo.",
  "Practica con textos auténticos todos los días.",
  "Confía en tu primera respuesta, pero verifica.",
];

export const readingRoute = [
  { icon: "audio", title: "Comprensión oral", text: "Comprende audios y responde preguntas.", href: "/delf/b2/comprehension-orale/" },
  { icon: "book", title: "Comprensión escrita", text: "Analiza textos y responde con precisión.", href: "/delf/b2/comprension-escrita/", active: true },
  { icon: "edit", title: "Producción oral", text: "Expresa y argumenta tus ideas con claridad.", href: "/delf/b2/production-orale/" },
  { icon: "pen", title: "Producción escrita", text: "Escribe textos claros, cohesivos y estructurados.", href: "/delf/b2/produccion-escrita/" },
] as const;

export const writingEvaluation = [
  { title: "Coherencia y cohesión", text: "Organización clara de ideas y uso de conectores." },
  { title: "Organización del texto", text: "Estructura lógica y progresión de las ideas." },
  { title: "Riqueza léxica", text: "Vocabulario variado y preciso adecuado al tema." },
  { title: "Corrección gramatical", text: "Uso correcto y variado de estructuras gramaticales." },
  { title: "Adecuación al registro", text: "Tono y estilo apropiados a la situación comunicativa." },
  { title: "Claridad argumentativa", text: "Capacidad para justificar, ejemplificar y persuadir." },
];

export const writingTasks = [
  {
    number: "Tarea 1",
    title: "Texto argumentativo",
    tone: "orange",
    icon: "pen",
    objective: "Argumentar sobre un tema general, expresando y justificando tu punto de vista.",
    length: "250-300 palabras",
    duration: "60 min, incluida la Tarea 2",
    skills: "Exponer ideas, argumentar, ilustrar con ejemplos y contraargumentar.",
  },
  {
    number: "Tarea 2",
    title: "Carta / artículo / informe",
    tone: "violet",
    icon: "document",
    objective: "Informar, explicar o persuadir en un contexto formal o semi-formal.",
    length: "150-180 palabras",
    duration: "Incluida en los 60 min totales",
    skills: "Adaptar el tono, organizar la información y responder a la situación comunicativa.",
  },
] as const;

export const writingBuildSteps = [
  { icon: "search", title: "Analiza la consigna", text: "Lee atentamente y subraya la pregunta clave." },
  { icon: "spark", title: "Planifica tus ideas", text: "Haz un esquema breve con tus argumentos." },
  { icon: "pen", title: "Redacta tu texto", text: "Escribe con claridad, coherencia y precisión." },
  { icon: "clipboard", title: "Revisa y corrige", text: "Mejora la gramática, la ortografía y el léxico." },
  { icon: "star", title: "Mejora tu versión", text: "Verifica el registro y la adecuación al contexto." },
];

export const writingStrategies = [
  { title: "Usa conectores variados", text: "Enriquece la cohesión: por ejemplo, sin embargo, por otro lado, además..." },
  { title: "Estructura tu texto", text: "Introducción clara, desarrollo organizado y conclusión coherente." },
  { title: "Justifica tus ideas con ejemplos", text: "Da razones concretas, datos o situaciones reales." },
  { title: "Cuida el registro y el tono", text: "Adapta tu lenguaje al tipo de texto y al destinatario." },
  { title: "Revisa los errores frecuentes", text: "Verifica tiempos verbales, concordancia y puntuación." },
];

export const writingResources = [
  { icon: "book", title: "Modelos de respuesta", text: "Ejemplos comentados de las 2 tareas.", href: "#tareas-produccion-escrita", action: "Ver modelos" },
  { icon: "pen", title: "Ejercicios guiados", text: "Practica paso a paso con correcciones.", href: "#construir-respuesta", action: "Practicar" },
  { icon: "link", title: "Conectores útiles", text: "Listado por función y nivel.", href: "#estrategias-clave", action: "Ver conectores" },
  { icon: "clipboard", title: "Simulación completa", text: "Examen cronometrado con corrección.", href: "#practica-recursos", action: "Iniciar simulación" },
] as const;

export const writingErrors = [
  "Ideas poco desarrolladas o sin ejemplos.",
  "Falta de organización y repeticiones.",
  "Conectores mal usados o ausentes.",
  "Errores de tiempo verbal y concordancia.",
  "Registro inadecuado o demasiado coloquial.",
];

export const writingRoute = [
  { icon: "audio", title: "Comprensión oral", status: "Completado", href: "/delf/b2/comprehension-orale/", done: true },
  { icon: "book", title: "Comprensión escrita", status: "Completado", href: "/delf/b2/comprension-escrita/", done: true },
  { icon: "pen", title: "Producción escrita", status: "En progreso", href: "/delf/b2/produccion-escrita/", active: true },
  { icon: "edit", title: "Producción oral", status: "Pendiente", href: "/delf/b2/production-orale/" },
] as const;
