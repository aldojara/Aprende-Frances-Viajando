import type { CoverageStatus } from "./taxonomies";

export type B2IconName =
  | "headphones"
  | "book"
  | "pen"
  | "users"
  | "target"
  | "ear"
  | "note"
  | "award"
  | "spark"
  | "grammar"
  | "download";

export type B2ExamSkill = {
  id: "listening" | "reading" | "writing" | "speaking";
  title: string;
  duration: string;
  preparation?: string;
  score: string;
  type: string;
  status: CoverageStatus;
  hrefSlug?: string;
  icon: B2IconName;
  tone: "blue" | "green" | "orange" | "violet";
};

export type B2RouteStep = {
  title: string;
  text: string;
  icon: B2IconName;
};

export type B2AvailableContent = {
  title: string;
  description: string;
  meta: string;
  duration: string;
  status: CoverageStatus;
  hrefSlug?: string;
  image: string;
  alt: string;
};

export type B2FocusSkill = {
  title: string;
  text: string;
  icon: B2IconName;
};

export type B2EvaluationCriterion = {
  title: string;
  icon: B2IconName;
};

export type B2PreparationResource = {
  label: string;
  href?: string;
};

export type B2FinalAction = {
  title: string;
  text: string;
  action: string;
  href: string;
  icon: B2IconName;
};

export const b2ExamSkills: B2ExamSkill[] = [
  {
    id: "listening",
    title: "Comprensión oral",
    duration: "30 min aprox.",
    score: "/25",
    type: "Comprender documentos sonoros y responder preguntas.",
    status: "expanding",
    hrefSlug: "comprehension-orale",
    icon: "headphones",
    tone: "blue",
  },
  {
    id: "reading",
    title: "Comprensión escrita",
    duration: "1 hora aprox.",
    score: "/25",
    type: "Comprender documentos escritos y responder preguntas.",
    status: "planned",
    icon: "book",
    tone: "green",
  },
  {
    id: "writing",
    title: "Producción escrita",
    duration: "1 hora aprox.",
    score: "/25",
    type: "Redactar un texto argumentado de al menos 250 palabras.",
    status: "planned",
    icon: "pen",
    tone: "orange",
  },
  {
    id: "speaking",
    title: "Producción oral",
    duration: "20 min aprox.",
    preparation: "30 min.",
    score: "/25",
    type: "Monologo seguido e interaccion con el jurado.",
    status: "planned",
    icon: "users",
    tone: "violet",
  },
];

export const b2RouteSteps: B2RouteStep[] = [
  {
    title: "Comprende a profundidad",
    text: "Entrena tu comprensión auditiva con estrategias avanzadas.",
    icon: "headphones",
  },
  {
    title: "Analiza textos complejos",
    text: "Desarrolla técnicas de lectura crítica y análisis de ideas principales.",
    icon: "book",
  },
  {
    title: "Argumenta por escrito",
    text: "Organiza tus ideas y escribe textos estructurados y coherentes.",
    icon: "pen",
  },
  {
    title: "Exprésate con fluidez",
    text: "Practica tu interacción oral y defiende tu punto de vista.",
    icon: "users",
  },
  {
    title: "Domina los criterios",
    text: "Conoce los criterios de evaluación y alcanza la puntuación objetivo.",
    icon: "target",
  },
];

export const b2AvailableContents: B2AvailableContent[] = [
  {
    title: "Comprensión oral B2",
    description: "Audios auténticos, transcripciones y estrategias de escucha.",
    meta: "Guía + audios",
    duration: "40 min aprox.",
    status: "expanding",
    hrefSlug: "comprehension-orale",
    image: "/images/delf/b2-headphones.svg",
    alt: "Audífonos sobre una mesa de estudio",
  },
  {
    title: "Estrategias de escucha",
    description:
      "Técnicas para identificar ideas, opiniones, actitud del hablante y detalles importantes.",
    meta: "Guía práctica",
    duration: "25 min aprox.",
    status: "expanding",
    hrefSlug: "estrategias-de-escucha",
    image: "/images/delf/b2-book.svg",
    alt: "Libro abierto con notas de preparacion",
  },
  {
    title: "Próximos contenidos",
    description:
      "Comprensión escrita, producción escrita, producción oral y criterios de evaluación.",
    meta: "Plan editorial",
    duration: "En preparación",
    status: "planned",
    image: "/images/delf/b2-microphone.svg",
    alt: "Micrófono de práctica oral",
  },
];

export const b2FocusSkills: B2FocusSkill[] = [
  {
    title: "Entiende discursos complejos",
    text: "Conferencias, entrevistas, debates y reportajes.",
    icon: "ear",
  },
  {
    title: "Identifica ideas principales",
    text: "Y detalles relevantes de manera rápida y precisa.",
    icon: "book",
  },
  {
    title: "Toma notas eficientes",
    text: "Organiza la información y jerarquiza ideas.",
    icon: "note",
  },
  {
    title: "Detecta intenciones y actitudes",
    text: "Reconoce la opinión y el punto de vista.",
    icon: "target",
  },
];

export const b2EvaluationCriteria: B2EvaluationCriterion[] = [
  { title: "Cumplimiento de la consigna.", icon: "pen" },
  { title: "Organización y coherencia de ideas.", icon: "spark" },
  { title: "Riqueza y precisión léxica.", icon: "award" },
  { title: "Corrección gramatical.", icon: "grammar" },
  { title: "Pronunciación, interacción y fluidez.", icon: "ear" },
];

export const b2PreparationResources = {
  reinforcement: [
    { label: "Gramática avanzada", href: "/gramatica/" },
    { label: "Vocabulario temático" },
    { label: "Conectores y estructuras", href: "/contenidos/?domain=grammar&level=b2" },
    { label: "Pronunciación" },
    { label: "Comprensión de textos" },
  ] satisfies B2PreparationResource[],
  examPractice: [
    { label: "Audios y transcripciones", href: "/delf/b2/comprehension-orale/" },
    { label: "Modelos de respuestas" },
    { label: "Rúbricas y criterios" },
    { label: "Consejos y estrategias", href: "/delf/b2/estrategias-de-escucha/" },
    { label: "Descargables PDF" },
  ] satisfies B2PreparationResource[],
};

export const b2FinalActions: B2FinalAction[] = [
  {
    title: "Empieza por escuchar",
    text: "Entrena tu comprensión oral B2 y mejora tus resultados.",
    action: "Ir a comprensión oral",
    href: "/delf/b2/comprehension-orale/",
    icon: "target",
  },
  {
    title: "Explora estrategias",
    text: "Aplica técnicas efectivas de escucha y análisis.",
    action: "Ver estrategias de escucha",
    href: "/delf/b2/estrategias-de-escucha/",
    icon: "book",
  },
  {
    title: "Prepárate con método",
    text: "Organiza tu estudio y alcanza tu mejor nivel en el examen.",
    action: "Ver ruta completa",
    href: "#ruta-b2",
    icon: "users",
  },
];
