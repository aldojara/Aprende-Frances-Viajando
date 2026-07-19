export type DelfB1Icon =
  | "book"
  | "chart"
  | "check"
  | "clipboard"
  | "download"
  | "file"
  | "headphones"
  | "medal"
  | "message"
  | "microphone"
  | "pencil"
  | "route"
  | "star"
  | "target"
  | "users"
  | "volume";

export type DelfB1Link = {
  label: string;
  href?: string;
  status?: "Disponible" | "En expansion";
  icon: DelfB1Icon;
};

export const delfB1ExamCards = [
  {
    icon: "headphones",
    title: "Comprensión oral",
    duration: "25 min",
    points: "25 pts",
    description: "Entiendes conversaciones y documentos orales sobre temas cotidianos.",
    badge: undefined,
  },
  {
    icon: "book",
    title: "Comprensión escrita",
    duration: "45 min",
    points: "25 pts",
    description: "Lees y comprendes textos informativos, descriptivos y argumentativos.",
    badge: undefined,
  },
  {
    icon: "pencil",
    title: "Producción escrita",
    duration: "45 min",
    points: "25 pts",
    description: "Escribes textos claros sobre experiencias, opiniones y temas generales.",
    badge: undefined,
  },
  {
    icon: "microphone",
    title: "Producción oral",
    duration: "15 min",
    points: "25 pts",
    description: "Te expresas con fluidez en interacciones y presentaciones estructuradas.",
    badge: "FOCO ACTUAL",
  },
] as const;

export const delfB1RouteSteps = [
  {
    icon: "route",
    title: "Comprende la estructura",
    description: "Conoce el formato del examen, los tiempos y las tareas de cada prueba.",
  },
  {
    icon: "headphones",
    title: "Explora la producción oral",
    description: "Familiarízate con los tres ejercicios y sus expectativas de desempeño.",
  },
  {
    icon: "message",
    title: "Practica el monologue suivi",
    description: "Desarrolla tu discurso con ideas claras, ejemplos y conectores adecuados.",
  },
  {
    icon: "clipboard",
    title: "Revisa los criterios",
    description: "Evalúa tu rendimiento con las rúbricas oficiales y mejora tus puntos débiles.",
  },
] as const;

export const delfB1ContentCards = [
  {
    icon: "file",
    title: "Estructura del examen",
    description: "Descubre el formato, tiempos y puntuación de cada prueba del DELF B1.",
    tags: ["Nivel B1", "General", "Teoría"],
    status: "Disponible",
    href: "/delf/b1/estructura-del-examen/",
    highlighted: false,
  },
  {
    icon: "headphones",
    title: "Producción oral",
    description: "Aprende las tres tareas orales y mejora tu fluidez y claridad al expresarte.",
    tags: ["Nivel B1", "Oral", "Práctica"],
    status: "Disponible",
    href: "/delf/b1/production-orale/",
    highlighted: false,
  },
  {
    icon: "microphone",
    title: "Monologue suivi",
    description: "Desarrolla monólogos estructurados con ideas, ejemplos y conectores.",
    tags: ["Nivel B1", "Oral", "Práctica"],
    status: "Disponible",
    href: "/delf/b1/monologue-suivi/",
    highlighted: true,
  },
  {
    icon: "star",
    title: "Criterios de evaluación",
    description: "Conoce cómo se evalúan tus respuestas según la rúbrica oficial.",
    tags: ["Nivel B1", "General", "Teoría"],
    status: "En expansion",
    href: "/delf/b1/criterios-evaluacion/",
    highlighted: false,
  },
] as const;

export const delfB1OralExercises = [
  {
    icon: "users",
    number: "1",
    title: "Entretien dirigé",
    description: "Respondes preguntas sobre temas cotidianos, personales y de actualidad.",
    duration: "5 min",
    points: "25 pts",
    badge: undefined,
  },
  {
    icon: "message",
    number: "2",
    title: "Exercice en interaction",
    description: "Intercambias opiniones e ideas con el examinador o con tu compañero.",
    duration: "5 min",
    points: "25 pts",
    badge: undefined,
  },
  {
    icon: "microphone",
    number: "3",
    title: "Monologue suivi",
    description: "Presentas y desarrollas un tema con estructura, ejemplos y conectores adecuados.",
    duration: "5 min",
    points: "25 pts",
    badge: "MÁS DESARROLLADO",
  },
] as const;

export const delfB1EvaluationCriteria = [
  { icon: "target", name: "Cumplimiento de la consigna" },
  { icon: "route", name: "Organización" },
  { icon: "book", name: "Vocabulario" },
  { icon: "clipboard", name: "Gramática" },
  { icon: "volume", name: "Pronunciación" },
  { icon: "users", name: "Interacción" },
] as const;

export const delfB1RelatedResources: { title: string; items: DelfB1Link[] }[] = [
  {
    title: "Para reforzar tu francés",
    items: [
      { icon: "book", label: "Gramática", href: "/gramatica/", status: "Disponible" },
      { icon: "message", label: "Conectores", href: "/gramatica/#indice-gramatica", status: "Disponible" },
      { icon: "file", label: "Vocabulario", href: "/contenidos/?domain=vocabulary", status: "En expansion" },
      { icon: "volume", label: "Pronunciacion", href: "/contenidos/?domain=pronunciation", status: "Disponible" },
    ],
  },
  {
    title: "Para preparar el examen",
    items: [
      { icon: "headphones", label: "Audios", href: "/contenidos/?format=audio", status: "En expansion" },
      { icon: "file", label: "Transcripciones", status: "En expansion" },
      { icon: "clipboard", label: "Rúbricas", href: "/delf/b1/criterios-evaluacion/", status: "Disponible" },
      { icon: "download", label: "Descargables", status: "En expansion" },
    ],
  },
] as const;

export const delfB1FinalSteps = [
  {
    icon: "file",
    title: "Ver estructura DELF B1",
    description: "Conoce el formato, tiempos y puntuación del examen.",
    cta: "Explorar ahora",
    href: "/delf/b1/estructura-del-examen/",
  },
  {
    icon: "headphones",
    title: "Entrenar producción oral",
    description: "Practica las tres tareas con ejercicios guiados y ejemplos.",
    cta: "Entrenar ahora",
    href: "/delf/b1/production-orale/",
  },
  {
    icon: "microphone",
    title: "Practicar monologue suivi",
    description: "Desarrolla tu discurso con ideas, ejemplos y conectores.",
    cta: "Practicar ahora",
    href: "/delf/b1/monologue-suivi/",
  },
] as const;
