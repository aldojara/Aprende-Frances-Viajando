export type FooterLinkStatus =
  | "Disponible"
  | "En construcción"
  | "Próximamente";

export type FooterLink = {
  label: string;
  href?: string;
  status: FooterLinkStatus;
  external?: boolean;
  ariaLabel?: string;
};

export type FooterSection = {
  id: string;
  title: string;
  links: FooterLink[];
};

export type SocialChannel = {
  id: string;
  label: string;
  href?: string;
  status: "Disponible" | "Próximamente";
  icon: "video" | "play" | "camera" | "article" | "community";
  ariaLabel?: string;
};

export const footerSections: FooterSection[] = [
  {
    id: "explorar",
    title: "Explorar",
    links: [
      {
        label: "Inicio",
        href: "/",
        status: "Disponible",
      },
      {
        label: "Niveles",
        status: "En construcción",
      },
      {
        label: "Gramática",
        status: "En construcción",
      },
      {
        label: "DELF",
        status: "En construcción",
      },
      {
        label: "Rutas de aprendizaje",
        status: "Próximamente",
      },
      {
        label: "Contenido reciente",
        status: "En construcción",
      },
    ],
  },
  {
    id: "recursos",
    title: "Recursos",
    links: [
      {
        label: "Todos los recursos",
        status: "En construcción",
      },
      {
        label: "Descargables",
        status: "Próximamente",
      },
      {
        label: "Mapas visuales",
        status: "Próximamente",
      },
      {
        label: "Checklists",
        status: "Próximamente",
      },
      {
        label: "Mini tests",
        status: "Próximamente",
      },
    ],
  },
  {
    id: "proyecto",
    title: "Proyecto",
    links: [
      {
        label: "Sobre la plataforma",
        status: "En construcción",
      },
      {
        label: "IA aplicada",
        status: "Próximamente",
      },
      {
        label: "Metodología",
        status: "En construcción",
      },
      {
        label: "Contacto",
        status: "En construcción",
      },
    ],
  },
];

export const socialChannels: SocialChannel[] = [
  {
    id: "tiktok",
    label: "TikTok",
    status: "Próximamente",
    icon: "video",
  },
  {
    id: "youtube",
    label: "YouTube",
    status: "Próximamente",
    icon: "play",
  },
  {
    id: "instagram",
    label: "Instagram",
    status: "Próximamente",
    icon: "camera",
  },
  {
    id: "blog",
    label: "Blog",
    status: "Próximamente",
    icon: "article",
  },
  {
    id: "comunidad",
    label: "Comunidad",
    status: "Próximamente",
    icon: "community",
  },
];

export const legalLinks: FooterLink[] = [
  {
    label: "Aviso legal",
    status: "En construcción",
  },
  {
    label: "Privacidad",
    status: "En construcción",
  },
  {
    label: "Términos de uso",
    status: "En construcción",
  },
  {
    label: "Cookies",
    status: "En construcción",
  },
];
