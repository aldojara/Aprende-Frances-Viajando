export type DelfLevel = "A1" | "A2" | "B1" | "B2";
export type DelfSkillId = "listening" | "reading" | "writing" | "speaking";

export type DelfSkillSpec = {
  id: DelfSkillId;
  label: string;
  shortLabel: string;
  mode: "collective" | "individual";
  duration: string;
  preparation?: string;
  score: string;
  parts: string[];
  summary: string;
};

export type DelfExamSpec = {
  variant: "DELF tout public";
  level: DelfLevel;
  editorialStatus: "Próximamente" | "En expansión";
  levelName: string;
  sourceUrl: string;
  examplesUrl: string;
  sourceCheckedAt: string;
  totalScore: string;
  scorePerSkill: string;
  globalMinimum: string;
  minimumPerSkill: string;
  formatWarnings: string[];
  skills: DelfSkillSpec[];
};

const shared = {
  variant: "DELF tout public" as const,
  totalScore: "100 puntos",
  scorePerSkill: "25 puntos por prueba",
  globalMinimum: "50/100",
  minimumPerSkill: "5/25 por prueba",
  sourceCheckedAt: "2026-07-18",
};

export const delfExamSpecs: Record<DelfLevel, DelfExamSpec> = {
  A1: {
    ...shared,
    level: "A1",
    editorialStatus: "Próximamente",
    levelName: "Principiante",
    sourceUrl: "https://www.france-education-international.fr/diplome/delf-tout-public/niveau-a1",
    examplesUrl:
      "https://france-education-international.fr/diplome/delf-tout-public/niveau-a1/exemples-sujets?langue=fr",
    formatWarnings: [
      "Las páginas oficiales de ejemplos indican que pueden circular dos formatos para comprensión oral y escrita.",
    ],
    skills: [
      {
        id: "listening",
        label: "Comprensión oral",
        shortLabel: "Oral",
        mode: "collective",
        duration: "20 min",
        score: "25 puntos",
        parts: ["documentos muy cortos de la vida cotidiana"],
        summary: "Reconocer información esencial en mensajes breves y claros.",
      },
      {
        id: "reading",
        label: "Comprensión escrita",
        shortLabel: "Escrita",
        mode: "collective",
        duration: "30 min",
        score: "25 puntos",
        parts: ["documentos escritos breves"],
        summary: "Comprender información simple en textos cotidianos.",
      },
      {
        id: "writing",
        label: "Producción escrita",
        shortLabel: "Escrita",
        mode: "collective",
        duration: "30 min",
        score: "25 puntos",
        parts: ["formulario", "mensaje o frases simples"],
        summary: "Completar datos y escribir mensajes muy simples.",
      },
      {
        id: "speaking",
        label: "Producción oral",
        shortLabel: "Oral",
        mode: "individual",
        duration: "5 a 7 min",
        preparation: "10 min",
        score: "25 puntos",
        parts: ["entretien dirigé", "échange d'informations", "dialogue simulé"],
        summary: "Presentarse, hacer preguntas y resolver un intercambio básico.",
      },
    ],
  },
  A2: {
    ...shared,
    level: "A2",
    editorialStatus: "Próximamente",
    levelName: "Básico",
    sourceUrl: "https://www.france-education-international.fr/diplome/delf-tout-public/niveau-a2",
    examplesUrl:
      "https://www.france-education-international.fr/diplome/delf-tout-public/niveau-a2/exemples-sujets",
    formatWarnings: [
      "Las páginas oficiales de ejemplos indican que pueden circular dos formatos para comprensión oral y escrita.",
    ],
    skills: [
      {
        id: "listening",
        label: "Comprensión oral",
        shortLabel: "Oral",
        mode: "collective",
        duration: "25 min",
        score: "25 puntos",
        parts: ["documentos cortos de situaciones cotidianas"],
        summary: "Comprender mensajes y anuncios sencillos de la vida diaria.",
      },
      {
        id: "reading",
        label: "Comprensión escrita",
        shortLabel: "Escrita",
        mode: "collective",
        duration: "30 min",
        score: "25 puntos",
        parts: ["documentos escritos cortos"],
        summary: "Localizar información útil en textos simples.",
      },
      {
        id: "writing",
        label: "Producción escrita",
        shortLabel: "Escrita",
        mode: "collective",
        duration: "45 min",
        score: "25 puntos",
        parts: ["dos producciones breves"],
        summary: "Describir experiencias y escribir para invitar, agradecer o pedir información.",
      },
      {
        id: "speaking",
        label: "Producción oral",
        shortLabel: "Oral",
        mode: "individual",
        duration: "6 a 8 min",
        preparation: "10 min",
        score: "25 puntos",
        parts: ["entretien dirigé", "monologue suivi", "exercice en interaction"],
        summary: "Hablar de sí mismo, presentar un tema personal e interactuar en una situación sencilla.",
      },
    ],
  },
  B1: {
    ...shared,
    level: "B1",
    editorialStatus: "En expansión",
    levelName: "Intermedio",
    sourceUrl: "https://www.france-education-international.fr/diplome/delf-tout-public/niveau-b1",
    examplesUrl:
      "https://france-education-international.fr/diplome/delf-tout-public/niveau-b1/exemples-sujets?langue=en",
    formatWarnings: [
      "Las páginas oficiales de ejemplos señalan dos formatos para comprensión oral y escrita; por eso no se presenta un único número universal de preguntas.",
      "La organización del día del examen puede variar según el centro examinador.",
    ],
    skills: [
      {
        id: "listening",
        label: "Comprensión oral",
        shortLabel: "Escuchar",
        mode: "collective",
        duration: "25 min",
        score: "25 puntos",
        parts: ["documentos orales y preguntas de comprensión"],
        summary: "Captar la situación, la idea principal y detalles relevantes de documentos claros.",
      },
      {
        id: "reading",
        label: "Comprensión escrita",
        shortLabel: "Leer",
        mode: "collective",
        duration: "45 min",
        score: "25 puntos",
        parts: ["documentos escritos con preguntas de comprensión"],
        summary: "Identificar información útil y comprender textos de interés general.",
      },
      {
        id: "writing",
        label: "Producción escrita",
        shortLabel: "Escribir",
        mode: "collective",
        duration: "45 min",
        score: "25 puntos",
        parts: ["texto personal argumentado de 160 palabras mínimo"],
        summary: "Expresar una actitud personal, narrar y justificar ideas con claridad.",
      },
      {
        id: "speaking",
        label: "Producción oral",
        shortLabel: "Hablar",
        mode: "individual",
        duration: "15 min",
        preparation: "10 min",
        score: "25 puntos",
        parts: ["entretien dirigé", "expression d'un point de vue", "exercice en interaction"],
        summary: "Presentarse, sostener un punto de vista e interactuar ante dos examinadores.",
      },
    ],
  },
  B2: {
    ...shared,
    level: "B2",
    editorialStatus: "En expansión",
    levelName: "Intermedio alto",
    sourceUrl: "https://www.france-education-international.fr/diplome/delf-tout-public/niveau-b2",
    examplesUrl:
      "https://www.france-education-international.fr/diplome/delf-tout-public/niveau-b2/exemples-sujets?langue=es",
    formatWarnings: [
      "Las páginas oficiales de ejemplos señalan dos formatos para comprensión oral y escrita; los ejercicios y la forma de las preguntas pueden cambiar.",
      "Algunos documentos de comprensión oral pueden tener una sola escucha; conviene entrenar ambas condiciones.",
    ],
    skills: [
      {
        id: "listening",
        label: "Comprensión oral",
        shortLabel: "Escuchar",
        mode: "collective",
        duration: "30 min",
        score: "25 puntos",
        parts: ["documentos de audio y preguntas de comprensión"],
        summary: "Comprender ideas principales, posiciones, detalles y relaciones argumentativas.",
      },
      {
        id: "reading",
        label: "Comprensión escrita",
        shortLabel: "Leer",
        mode: "collective",
        duration: "60 min",
        score: "25 puntos",
        parts: ["documentos escritos extensos"],
        summary: "Leer con autonomía textos de opinión, información y argumentación.",
      },
      {
        id: "writing",
        label: "Producción escrita",
        shortLabel: "Escribir",
        mode: "collective",
        duration: "60 min",
        score: "25 puntos",
        parts: ["texto argumentado de 250 palabras mínimo"],
        summary: "Tomar posición, organizar argumentos y desarrollar ejemplos pertinentes.",
      },
      {
        id: "speaking",
        label: "Producción oral",
        shortLabel: "Hablar",
        mode: "individual",
        duration: "20 min",
        preparation: "30 min",
        score: "25 puntos",
        parts: ["monologue suivi", "exercice en interaction"],
        summary: "Defender un punto de vista argumentado y responder a objeciones del jurado.",
      },
    ],
  },
};

export const delfLevels = Object.values(delfExamSpecs);
export const delfSkillOrder: DelfSkillId[] = ["listening", "reading", "writing", "speaking"];
