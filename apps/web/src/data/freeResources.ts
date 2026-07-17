export type FreeResourceStatus = "Disponible" | "Demostración" | "Próximamente";

export type FreeResourceItem = {
  id: string;
  title: string;
  description: string;
  type: string;
  format: string;
  level: string;
  image?: string;
  file?: string;
  href?: string;
  requiresRegistration: boolean;
  status: FreeResourceStatus;
  alt?: string;
  category?: string;
  downloadLabel?: string;
};

export const freeResources: FreeResourceItem[] = [
  {
    id: "mapa-visual-tiempos-pasado",
    title: "Mapa visual: tiempos del pasado",
    description:
      "Guía visual con ejemplos y línea temporal para diferenciar los principales tiempos del pasado en francés.",
    type: "Mapa visual",
    format: "PDF",
    level: "B1 · B2",
    requiresRegistration: false,
    status: "Demostración",
    category: "Gramática visual",
    downloadLabel: "Demostración",
  },
  {
    id: "checklist-preparacion-delf-oral",
    title: "Checklist: preparación DELF oral",
    description:
      "Lista de verificación para organizar la preparación de la producción oral del DELF.",
    type: "Checklist",
    format: "PDF",
    level: "B1 · B2",
    requiresRegistration: false,
    status: "Demostración",
    category: "DELF",
    downloadLabel: "Demostración",
  },
  {
    id: "mini-test-gramatica-niveles",
    title: "Mini test de gramática por niveles",
    description:
      "Evaluación breve para reconocer fortalezas y temas que conviene reforzar.",
    type: "Mini test",
    format: "Evaluación",
    level: "A1 · C1",
    requiresRegistration: false,
    status: "Próximamente",
    category: "Diagnóstico",
    downloadLabel: "Próximamente",
  },
];
