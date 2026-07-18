export const coverageStatuses = [
  {
    id: "available",
    label: "Disponible",
    description: "Contenido o ruta usable como muestra funcional.",
  },
  {
    id: "expanding",
    label: "En expansión",
    description: "Base editorial creada con cobertura todavia limitada.",
  },
  {
    id: "planned",
    label: "Próximamente",
    description: "Parte de la arquitectura prevista, aun sin cobertura completa.",
  },
] as const;

export const publicationStatuses = [
  { id: "draft", label: "Borrador" },
  { id: "published", label: "Publicado" },
  { id: "archived", label: "Archivado" },
] as const;

export const levels = [
  {
    id: "A1",
    slug: "a1",
    label: "A1",
    name: "Principiante",
    coverageStatus: "expanding",
    description:
      "Primer contacto con el frances: saludos, presentaciones, frases esenciales y situaciones cotidianas simples.",
    capabilities: [
      "Comprender expresiones familiares y frases muy frecuentes.",
      "Presentarse y responder preguntas personales basicas.",
      "Interactuar de forma sencilla si la otra persona habla despacio.",
    ],
  },
  {
    id: "A2",
    slug: "a2",
    label: "A2",
    name: "Básico",
    coverageStatus: "available",
    description:
      "Consolidacion de conversaciones simples, rutinas, planes, viajes y estructuras frecuentes del frances practico.",
    capabilities: [
      "Comprender mensajes breves sobre necesidades inmediatas.",
      "Describir rutinas, gustos, planes y experiencias simples.",
      "Resolver intercambios cotidianos en viajes y servicios.",
    ],
  },
  {
    id: "B1",
    slug: "b1",
    label: "B1",
    name: "Intermedio",
    coverageStatus: "expanding",
    description:
      "Autonomia para narrar experiencias, expresar opiniones y desenvolverse en contextos reales con mayor continuidad.",
    capabilities: [
      "Comprender puntos principales de temas conocidos.",
      "Narrar experiencias, planes, deseos y justificar opiniones.",
      "Participar en situaciones previsibles durante un viaje.",
    ],
  },
  {
    id: "B2",
    slug: "b2",
    label: "B2",
    name: "Intermedio alto",
    coverageStatus: "planned",
    description:
      "Precision, argumentacion y comprension de contenidos mas complejos para usos academicos, profesionales o DELF.",
    capabilities: [
      "Comprender textos y audios complejos con argumentos claros.",
      "Defender puntos de vista con ventajas, limites y ejemplos.",
      "Interactuar con fluidez suficiente en conversaciones extensas.",
    ],
  },
  {
    id: "C1",
    slug: "c1",
    label: "C1",
    name: "Avanzado",
    coverageStatus: "planned",
    description:
      "Uso flexible del frances para matices, produccion extensa, comprension implicita y comunicacion avanzada.",
    capabilities: [
      "Comprender discursos largos y sentidos implicitos.",
      "Expresarse con fluidez, precision y estructura clara.",
      "Adaptar el registro a contextos sociales, academicos o profesionales.",
    ],
  },
] as const;

export const domains = [
  { id: "grammar", label: "Gramatica" },
  { id: "delf", label: "DELF" },
  { id: "listening", label: "Comprension oral" },
  { id: "communication", label: "Comunicacion" },
  { id: "travel-french", label: "Frances para viajar" },
  { id: "vocabulary", label: "Vocabulario" },
  { id: "pronunciation", label: "Pronunciacion" },
] as const;

export const contentKinds = [
  { id: "lesson", label: "Leccion" },
  { id: "practice", label: "Practica" },
  { id: "media", label: "Media" },
  { id: "exam-preparation", label: "Preparacion de examen" },
  { id: "episode", label: "Episodio" },
  { id: "guide", label: "Guia" },
] as const;

export const formats = [
  { id: "article", label: "Articulo" },
  { id: "video", label: "Video" },
  { id: "audio", label: "Audio" },
  { id: "podcast", label: "Podcast" },
  { id: "interactive", label: "Interactivo" },
  { id: "downloadable", label: "Descargable" },
] as const;

export const grammarModules = [
  { id: "fundamentos-frase", label: "Fundamentos de la frase" },
  { id: "tiempos-modos-formas", label: "Tiempos, modos y formas verbales" },
  { id: "pronombres-determinantes", label: "Pronombres y determinantes" },
  {
    id: "transformacion-discurso",
    label: "Construccion y transformacion del discurso",
  },
  { id: "conectores-relaciones", label: "Conectores y relaciones logicas" },
  {
    id: "funciones-argumentacion",
    label: "Funciones comunicativas y argumentacion",
  },
] as const;

export const communicationGoals = [
  { id: "hablar-del-pasado", label: "Hablar del pasado" },
  { id: "opinar-y-argumentar", label: "Opinar y argumentar" },
  { id: "formular-hipotesis", label: "Formular hipótesis" },
  { id: "dar-consejos", label: "Dar consejos" },
  { id: "expresar-obligacion", label: "Expresar obligación" },
  {
    id: "contar-lo-que-alguien-dijo",
    label: "Contar lo que alguien dijo",
  },
  { id: "causa-y-consecuencia", label: "Expresar causa y consecuencia" },
] as const;

export type LevelId = (typeof levels)[number]["id"];
export type CoverageStatus = (typeof coverageStatuses)[number]["id"];
export type PublicationStatus = (typeof publicationStatuses)[number]["id"];
export type DomainId = (typeof domains)[number]["id"];
export type ContentKind = (typeof contentKinds)[number]["id"];
export type FormatId = (typeof formats)[number]["id"];
export type GrammarModuleId = (typeof grammarModules)[number]["id"];
export type CommunicationGoalId = (typeof communicationGoals)[number]["id"];

export const levelIds = levels.map((level) => level.id) as LevelId[];
export const domainIds = domains.map((domain) => domain.id) as DomainId[];
export const formatIds = formats.map((format) => format.id) as FormatId[];
export const coverageStatusIds = coverageStatuses.map(
  (status) => status.id,
) as CoverageStatus[];
export const grammarModuleIds = grammarModules.map(
  (module) => module.id,
) as GrammarModuleId[];
export const communicationGoalIds = communicationGoals.map(
  (goal) => goal.id,
) as CommunicationGoalId[];

export const getLevelBySlug = (slug: string) =>
  levels.find((level) => level.slug === slug);

export const getLevelById = (id: string) =>
  levels.find((level) => level.id === id);

export const getCoverageStatus = (id: string) =>
  coverageStatuses.find((status) => status.id === id);

export const getDomain = (id: string) =>
  domains.find((domain) => domain.id === id);

export const getFormat = (id: string) =>
  formats.find((format) => format.id === id);

export const getGrammarModule = (id: string) =>
  grammarModules.find((module) => module.id === id);

export const getCommunicationGoal = (id: string) =>
  communicationGoals.find((goal) => goal.id === id);
