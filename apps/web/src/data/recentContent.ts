export type RecentContentFormat = "TikTok" | "Vídeo" | "Artículo" | "Podcast";

export type RecentContentItem = {
  id: string;
  title: string;
  format: RecentContentFormat;
  level: string;
  duration: string;
  image: string;
  href: string;
  alt: string;
  status: "Disponible" | "Demostración" | "Próximamente";
  category: string;
};

export const recentContent: RecentContentItem[] = [
  {
    id: "expresiones-francesas-hoy",
    title: "3 expresiones francesas que usarás hoy",
    format: "TikTok",
    level: "A2 · B1",
    duration: "00:58",
    image: "/images/recent/tiktok-expresiones.svg",
    href: "",
    alt: "Terraza parisina al atardecer para una cápsula breve de expresiones francesas.",
    status: "Demostración",
    category: "Expresión cotidiana",
  },
  {
    id: "subjonctif-explique",
    title: "Le subjonctif expliqué avec des exemples",
    format: "Vídeo",
    level: "B1 · C1",
    duration: "14:22",
    image: "/images/recent/video-subjonctif.svg",
    href: "",
    alt: "Vista del Sena y una pizarra de gramática para un vídeo sobre el subjonctif.",
    status: "Demostración",
    category: "Gramática",
  },
  {
    id: "erreurs-hispanophones",
    title: "Les erreurs courantes des hispanophones",
    format: "Artículo",
    level: "B1 · B2",
    duration: "6 min de lectura",
    image: "/images/recent/articulo-erreurs.svg",
    href: "",
    alt: "Mesa de estudio con café, cuaderno y correcciones de francés para un artículo.",
    status: "Demostración",
    category: "Corrección",
  },
  {
    id: "production-orale-delf-b1",
    title: "Producción oral DELF B1: guía completa",
    format: "Podcast",
    level: "B1",
    duration: "21:30",
    image: "/images/recent/podcast-delf-b1.svg",
    href: "",
    alt: "Micrófono de estudio para un podcast de preparación oral DELF B1.",
    status: "Demostración",
    category: "DELF",
  },
];
