export type AIPlatformStepStatus =
  | "Disponible"
  | "Demostración"
  | "Próximamente";

export type AIPlatformStep = {
  id: string;
  order: number;
  title: string;
  description: string;
  status: AIPlatformStepStatus;
  icon: "document" | "formats" | "ai-feedback" | "progress" | "route";
  eyebrow?: string;
  futureCapability?: string;
  ariaLabel?: string;
};

export const aiPlatformSteps: AIPlatformStep[] = [
  {
    id: "tema-base",
    order: 1,
    title: "Tema base",
    description:
      "Contenido claro, curado y auténtico que presenta el concepto principal.",
    status: "Disponible",
    icon: "document",
    eyebrow: "Contenido editorial",
    ariaLabel: "Etapa 1, tema base disponible",
  },
  {
    id: "multiformato",
    order: 2,
    title: "Multiformato",
    description:
      "Un mismo tema puede convertirse en vídeo, artículo, audio, recurso visual y ejercicio.",
    status: "Demostración",
    icon: "formats",
    eyebrow: "Formatos conectados",
    ariaLabel: "Etapa 2, multiformato en demostración",
  },
  {
    id: "feedback-con-ia",
    order: 3,
    title: "Feedback con IA",
    description:
      "La IA podrá apoyar correcciones, explicaciones y sugerencias contextuales.",
    status: "Próximamente",
    icon: "ai-feedback",
    eyebrow: "Apoyo inteligente",
    futureCapability: "Capacidad futura",
    ariaLabel: "Etapa 3, feedback con IA próximamente",
  },
  {
    id: "progreso-real",
    order: 4,
    title: "Progreso real",
    description:
      "La plataforma podrá registrar avance, resultados y áreas que conviene reforzar.",
    status: "Próximamente",
    icon: "progress",
    eyebrow: "Seguimiento previsto",
    futureCapability: "Sin datos de usuario",
    ariaLabel: "Etapa 4, progreso real próximamente",
  },
  {
    id: "ruta-recomendada",
    order: 5,
    title: "Ruta recomendada",
    description:
      "La continuidad podrá organizarse según el nivel, los objetivos y el avance acumulado.",
    status: "Próximamente",
    icon: "route",
    eyebrow: "Orientación futura",
    futureCapability: "Vista prevista",
    ariaLabel: "Etapa 5, ruta recomendada próximamente",
  },
];
