export type SuggestedRouteStatus =
  | "Demostración"
  | "En preparación"
  | "Próximamente";

export type RouteStepState =
  | "Ejemplo completado"
  | "Enfoque actual"
  | "Siguiente"
  | "Pendiente";

export type RouteStep = {
  id: string;
  order: number;
  title: string;
  shortTitle?: string;
  description: string;
  state: RouteStepState;
  href?: string;
  available: boolean;
  category?: string;
  format?: string;
  duration?: string;
  icon?: "grammar" | "speech" | "practice";
  ariaLabel?: string;
};

export type SuggestedRoute = {
  id: string;
  title: string;
  level: string;
  objective: string;
  description: string;
  status: SuggestedRouteStatus;
  steps: RouteStep[];
};

export const suggestedRoute: SuggestedRoute = {
  id: "b1-comunicacion-diaria",
  title: "B1 · Comunicación diaria",
  level: "B1",
  objective: "Mejorar mi comunicación",
  description:
    "Una secuencia editorial para reforzar tiempos verbales, pronombres y producción oral en situaciones cotidianas.",
  status: "Demostración",
  steps: [
    {
      id: "present-et-futur-proche",
      order: 1,
      title: "Présent et futur proche",
      shortTitle: "Présent et futur",
      description: "Expresar acciones actuales, planes inmediatos e intenciones.",
      state: "Ejemplo completado",
      available: false,
      category: "Tiempos verbales",
      format: "Tema guiado",
      icon: "grammar",
      ariaLabel:
        "Paso 1, Présent et futur proche, ejemplo completado de forma ilustrativa",
    },
    {
      id: "passe-compose-imparfait",
      order: 2,
      title: "Passé composé et imparfait",
      shortTitle: "Passé composé",
      description:
        "Narrar experiencias y distinguir acciones puntuales de contexto y duración.",
      state: "Enfoque actual",
      available: false,
      category: "Narración",
      format: "Comparación",
      icon: "grammar",
      ariaLabel:
        "Paso 2, Passé composé et imparfait, enfoque actual de la ruta editorial",
    },
    {
      id: "pronoms-complements",
      order: 3,
      title: "Pronoms compléments",
      description: "Utilizar COD, COI, y, en y otros pronombres frecuentes.",
      state: "Siguiente",
      available: false,
      category: "Pronombres",
      format: "Práctica",
      icon: "practice",
      ariaLabel: "Paso 3, Pronoms compléments, siguiente paso recomendado",
    },
    {
      id: "subjonctif-present",
      order: 4,
      title: "Subjonctif présent",
      description: "Expresar necesidad, opinión, emoción y valoración.",
      state: "Pendiente",
      available: false,
      category: "Modo verbal",
      format: "Tema guiado",
      icon: "grammar",
      ariaLabel: "Paso 4, Subjonctif présent, pendiente",
    },
    {
      id: "discours-indirect",
      order: 5,
      title: "Discours indirect",
      description:
        "Transmitir palabras, preguntas e instrucciones de otra persona.",
      state: "Pendiente",
      available: false,
      category: "Comunicación",
      format: "Transformación",
      icon: "speech",
      ariaLabel: "Paso 5, Discours indirect, pendiente",
    },
    {
      id: "production-orale-b1",
      order: 6,
      title: "Production orale B1",
      description:
        "Integrar estructuras en una situación comunicativa guiada.",
      state: "Pendiente",
      available: false,
      category: "Producción oral",
      format: "Simulación",
      icon: "speech",
      ariaLabel: "Paso 6, Production orale B1, pendiente",
    },
  ],
};
