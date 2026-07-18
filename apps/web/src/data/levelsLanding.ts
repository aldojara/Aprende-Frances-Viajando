export type LevelsIconName =
  | "arrow"
  | "book"
  | "briefcase"
  | "chart"
  | "compass"
  | "edit"
  | "folder"
  | "headphones"
  | "megaphone"
  | "play"
  | "spark"
  | "target"
  | "tower"
  | "vocabulary";

export type LevelAvailability = "available" | "expanding" | "planned";

export const levelStatusLabels: Record<LevelAvailability, string> = {
  available: "Disponible",
  expanding: "En expansión",
  planned: "Próximamente",
};

export const progressionLevels = [
  { code: "A1", color: "#1f5aa6" },
  { code: "A2", color: "#2f8b4c" },
  { code: "B1", color: "#d89211" },
  { code: "B2", color: "#7050b8" },
  { code: "C1", color: "#157487" },
] as const;

export const progressionFacts = [
  { icon: "spark", value: "5", label: "niveles" },
  { icon: "book", value: "Gramática", label: "progresiva" },
  { icon: "headphones", value: "Comprensión", label: "integrada" },
  { icon: "megaphone", value: "Producción", label: "activa" },
  { icon: "folder", value: "Recursos", label: "prácticos" },
] satisfies Array<{ icon: LevelsIconName; value: string; label: string }>;

export const howToSteps = [
  {
    icon: "target",
    title: "Elige tu nivel",
    description:
      "Selecciona el nivel que mejor se adapte a tus conocimientos actuales.",
  },
  {
    icon: "compass",
    title: "Descubre lo que puedes hacer",
    description:
      "Conoce tus objetivos comunicativos y lo que serás capaz de lograr.",
  },
  {
    icon: "book",
    title: "Estudia competencias y contenidos",
    description:
      "Trabaja gramática, vocabulario, comprensión y producción con recursos variados.",
  },
  {
    icon: "chart",
    title: "Avanza hacia el siguiente nivel",
    description:
      "Consolida lo aprendido y sigue creciendo en cada nueva etapa.",
  },
] satisfies Array<{
  icon: LevelsIconName;
  title: string;
  description: string;
}>;

export const levelCards = [
  {
    code: "A1",
    name: "Principiante",
    slug: "a1",
    tone: "blue",
    status: "available",
    description: "Comunícate en situaciones muy básicas y cotidianas.",
    goals: [
      "Presentarte y saludar.",
      "Hablar de ti y de otros.",
      "Preguntar y responder lo esencial.",
    ],
    cta: "Ver nivel",
    href: "/niveles/a1/",
  },
  {
    code: "A2",
    name: "Básico",
    slug: "a2",
    tone: "green",
    status: "available",
    description: "Comprende y participa en interacciones sencillas.",
    goals: [
      "Pedir indicaciones.",
      "Hablar de tu día a día.",
      "Describir lugares y rutinas.",
    ],
    cta: "Ver nivel",
    href: "/niveles/a2/",
  },
  {
    code: "B1",
    name: "Intermedio",
    slug: "b1",
    tone: "gold",
    status: "available",
    description: "Expresa opiniones y desenvuélvete con mayor independencia.",
    goals: [
      "Narrar experiencias.",
      "Expresar opiniones.",
      "Tratar temas de interés general.",
    ],
    cta: "Ver nivel",
    href: "/niveles/b1/",
  },
  {
    code: "B2",
    name: "Intermedio alto",
    slug: "b2",
    tone: "purple",
    status: "expanding",
    description: "Interactúa con fluidez y comprende ideas complejas.",
    goals: [
      "Argumentar y matizar.",
      "Entender textos complejos.",
      "Participar en debates.",
    ],
    cta: "Ver nivel",
    href: "/niveles/b2/",
  },
  {
    code: "C1",
    name: "Avanzado",
    slug: "c1",
    tone: "teal",
    status: "planned",
    description: "Comunícate con precisión y flexibilidad en contextos diversos.",
    goals: [
      "Debatir con precisión.",
      "Comprender matices.",
      "Usar el idioma con naturalidad.",
    ],
    cta: "Muy pronto",
  },
] satisfies Array<{
  code: string;
  name: string;
  slug: string;
  tone: string;
  status: LevelAvailability;
  description: string;
  goals: string[];
  cta: string;
  href?: string;
}>;

export const levelFeatures = [
  {
    icon: "target",
    title: "Competencias",
    description: "Trabaja comprensión y producción en cada nivel.",
  },
  {
    icon: "book",
    title: "Gramática clave",
    description: "Estructuras esenciales presentadas de forma clara y práctica.",
  },
  {
    icon: "vocabulary",
    title: "Vocabulario esencial",
    description:
      "Palabras y expresiones útiles para comunicarte en contexto.",
  },
  {
    icon: "play",
    title: "Contenidos recomendados",
    description: "Vídeos, audios, lecturas y actividades guiadas.",
  },
  {
    icon: "arrow",
    title: "Próximo paso",
    description: "Sugerencias para seguir avanzando con confianza.",
  },
] satisfies Array<{
  icon: LevelsIconName;
  title: string;
  description: string;
}>;

export const competencyCards = [
  {
    icon: "headphones",
    title: "Comprensión oral",
    description: "Escucha y entiende información en diferentes contextos.",
  },
  {
    icon: "book",
    title: "Comprensión escrita",
    description: "Lee y comprende textos con vocabulario y estructuras clave.",
  },
  {
    icon: "megaphone",
    title: "Producción oral",
    description: "Habla con seguridad en conversaciones reales.",
  },
  {
    icon: "edit",
    title: "Producción escrita",
    description: "Escribe textos claros y coherentes sobre diversos temas.",
  },
  {
    icon: "vocabulary",
    title: "Gramática y vocabulario",
    description:
      "Amplía tu léxico y aplica la gramática de forma natural.",
  },
] satisfies Array<{
  icon: LevelsIconName;
  title: string;
  description: string;
}>;

export const featuredContent = [
  {
    level: "A1",
    tone: "blue",
    scene: "conversation",
    title: "Presentarse y hablar de uno mismo",
    description: "Saludar, decir tu nombre, nacionalidad y profesión.",
    href: "/niveles/a1/",
  },
  {
    level: "A2",
    tone: "green",
    scene: "metro",
    title: "Pedir indicaciones y desenvolverse en un viaje",
    description: "Preguntar, orientarte en la ciudad y moverte con soltura.",
    href: "/niveles/a2/",
  },
  {
    level: "B1",
    tone: "gold",
    scene: "cafe",
    title: "Narrar experiencias y expresar opiniones",
    description: "Contar anécdotas y dar tu punto de vista.",
    href: "/niveles/b1/",
  },
  {
    level: "B2",
    tone: "purple",
    scene: "museum",
    title: "Argumentar y matizar un punto de vista",
    description: "Explicar razones, contrastar ideas y ser más preciso.",
    href: "/niveles/b2/",
  },
  {
    level: "C1",
    tone: "teal",
    scene: "palace",
    title: "Debatir con precisión y flexibilidad",
    description: "Expresarte con matices y adaptarte a cualquier tema.",
  },
] satisfies Array<{
  level: string;
  tone: string;
  scene: string;
  title: string;
  description: string;
  href?: string;
}>;

export const nextSteps = [
  {
    icon: "tower",
    title: "Empezar desde A1",
    description: "Ideal si estás dando tus primeros pasos en francés.",
    cta: "Comenzar ahora",
    href: "/niveles/a1/",
  },
  {
    icon: "book",
    title: "Consolidar tu francés en B1",
    description:
      "Refuerza lo aprendido y gana autonomía en tus conversaciones.",
    cta: "Ver plan recomendado",
    href: "/niveles/b1/",
  },
  {
    icon: "briefcase",
    title: "Prepararte para un uso avanzado",
    description:
      "Lleva tu francés al siguiente nivel con objetivos más ambiciosos.",
    cta: "Descubrir ruta",
    href: "/niveles/b2/",
  },
] satisfies Array<{
  icon: LevelsIconName;
  title: string;
  description: string;
  cta: string;
  href: string;
}>;

export const finalCtas = [
  {
    icon: "book",
    title: "Explorar Gramática",
    description:
      "Aprende estructuras clave con explicaciones claras y ejercicios prácticos.",
    cta: "Explorar ahora",
    href: "/gramatica/",
  },
  {
    icon: "vocabulary",
    title: "Preparar el DELF",
    description:
      "Conoce el examen y accede a guías, ejemplos y consejos para cada nivel.",
    cta: "Ir a DELF",
    href: "/delf/",
  },
  {
    icon: "folder",
    title: "Ver todos los contenidos",
    description:
      "Accede al catálogo completo de recursos y actividades de la plataforma.",
    cta: "Ir al catálogo",
    href: "/contenidos/",
  },
] satisfies Array<{
  icon: LevelsIconName;
  title: string;
  description: string;
  cta: string;
  href: string;
}>;
