import type {
  CoverageStatus,
  DomainId,
  FormatId,
  LevelId,
} from "./taxonomies";

export type ResourceCompetencyId =
  | "comprension-oral"
  | "comprension-escrita"
  | "produccion-oral"
  | "produccion-escrita";

export type ResourceTopicId =
  | "vocabulario"
  | "gramatica"
  | "conectores-expresiones"
  | "pronunciacion"
  | "viajes-cultura"
  | "vida-cotidiana"
  | "delf";

export type ResourceFormatCategoryId =
  | "articulos"
  | "audios"
  | "transcripciones"
  | "guias-pdf"
  | "fichas-practica"
  | "mapas-visuales"
  | "videos"
  | "infografias"
  | "rubricas-criterios"
  | "flashcards"
  | "podcasts"
  | "simulacros";

export interface ResourceItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  href?: string;
  levels: LevelId[];
  competencies: ResourceCompetencyId[];
  format: FormatId;
  formatLabel: string;
  formatCategories: ResourceFormatCategoryId[];
  topics: ResourceTopicId[];
  availability: CoverageStatus;
  duration?: string;
  downloadable: boolean;
  featured: boolean;
  visual: "guide" | "audio" | "worksheet" | "map" | "delf" | "article";
  imageAlt: string;
  tags: string[];
  source: "content" | "resources";
}

export const competencies = [
  {
    id: "comprension-oral",
    label: "Comprensión oral",
    description: "Audios, diálogos y práctica para entender francés real.",
    tone: "lavender",
    icon: "headphones",
  },
  {
    id: "comprension-escrita",
    label: "Comprensión escrita",
    description: "Textos, guías, explicaciones y lectura guiada.",
    tone: "mint",
    icon: "book",
  },
  {
    id: "produccion-oral",
    label: "Producción oral",
    description: "Modelos, criterios y práctica para hablar con claridad.",
    tone: "gold",
    icon: "users",
  },
  {
    id: "produccion-escrita",
    label: "Producción escrita",
    description: "Guías, estructuras y criterios para escribir mejor.",
    tone: "sky",
    icon: "pen",
  },
] as const satisfies ReadonlyArray<{
  id: ResourceCompetencyId;
  label: string;
  description: string;
  tone: string;
  icon: string;
}>;

export const topicFilters = [
  { id: "vocabulario", label: "Vocabulario", icon: "target" },
  { id: "gramatica", label: "Gramática", icon: "pen" },
  {
    id: "conectores-expresiones",
    label: "Conectores y expresiones",
    icon: "nodes",
  },
  { id: "pronunciacion", label: "Pronunciación", icon: "ear" },
  { id: "viajes-cultura", label: "Viajes y cultura", icon: "plane" },
  { id: "vida-cotidiana", label: "Vida cotidiana", icon: "briefcase" },
] as const satisfies ReadonlyArray<{
  id: ResourceTopicId;
  label: string;
  icon: string;
}>;

export const formatCategories = [
  {
    id: "audios",
    label: "Audios",
    description: "Entrenamiento de escucha",
    icon: "headphones",
  },
  {
    id: "transcripciones",
    label: "Transcripciones",
    description: "Textos de apoyo",
    icon: "file",
  },
  {
    id: "guias-pdf",
    label: "Guías y PDF",
    description: "Material estructurado",
    icon: "document",
  },
  {
    id: "fichas-practica",
    label: "Fichas de práctica",
    description: "Ejercicios guiados",
    icon: "clipboard",
  },
  {
    id: "mapas-visuales",
    label: "Mapas visuales",
    description: "Esquemas y mapas",
    icon: "nodes",
  },
  {
    id: "videos",
    label: "Videos",
    description: "Explicaciones visuales",
    icon: "video",
  },
  {
    id: "infografias",
    label: "Infografías",
    description: "Resumen visual",
    icon: "layout",
  },
  {
    id: "rubricas-criterios",
    label: "Rúbricas y criterios",
    description: "Evaluación DELF",
    icon: "checklist",
  },
  {
    id: "flashcards",
    label: "Flashcards",
    description: "Memorización activa",
    icon: "cards",
  },
  {
    id: "podcasts",
    label: "Podcasts",
    description: "Episodios de escucha",
    icon: "mic",
  },
  {
    id: "simulacros",
    label: "Simulacros",
    description: "Pruebas completas",
    icon: "badge",
  },
] as const satisfies ReadonlyArray<{
  id: ResourceFormatCategoryId;
  label: string;
  description: string;
  icon: string;
}>;

export const availabilityLabels: Record<CoverageStatus, string> = {
  available: "Disponible",
  expanding: "En expansión",
  planned: "Próximamente",
};

export const formatLabels: Record<FormatId, string> = {
  article: "Artículo",
  video: "Video",
  audio: "Audio",
  podcast: "Podcast",
  interactive: "Interactivo",
  downloadable: "Descargable",
};

export const domainToTopic: Partial<Record<DomainId, ResourceTopicId>> = {
  grammar: "gramatica",
  delf: "delf",
  listening: "vida-cotidiana",
  communication: "vida-cotidiana",
  "travel-french": "viajes-cultura",
  vocabulary: "vocabulario",
  pronunciation: "pronunciacion",
};

export const normalizeText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
