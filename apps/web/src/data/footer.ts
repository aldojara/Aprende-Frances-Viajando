export type FooterLinkStatus =
  | "Disponible"
  | "En construcción"
  | "En expansión"
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
      { label: "Inicio", href: "/", status: "Disponible" },
      { label: "Niveles", href: "/niveles/", status: "Disponible" },
      { label: "Gramática", href: "/gramatica/", status: "Disponible" },
      { label: "DELF", href: "/delf/", status: "En expansión" },
      { label: "Proyecto", href: "/proyecto/", status: "Disponible" },
      { label: "Catálogo", href: "/contenidos/", status: "Disponible" },
    ],
  },
  {
    id: "recursos",
    title: "Recursos",
    links: [
      { label: "Todos los recursos", href: "/contenidos/", status: "Disponible" },
      { label: "Descargables", status: "Próximamente" },
      { label: "Mapas visuales", status: "Próximamente" },
      { label: "Checklists", status: "Próximamente" },
      { label: "Mini tests", status: "Próximamente" },
    ],
  },
  {
    id: "proyecto",
    title: "Proyecto",
    links: [
      { label: "Sobre la plataforma", href: "/proyecto/", status: "Disponible" },
      { label: "IA aplicada", href: "/proyecto/#ia-aplicada", status: "Disponible" },
      {
        label: "Creador",
        href: "/autor/aldo-jara-pisconti/",
        status: "Disponible",
      },
      {
        label: "Metodología",
        href: "/proyecto/#construccion",
        status: "Disponible",
      },
    ],
  },
];

export const socialChannels: SocialChannel[] = [
  { id: "tiktok", label: "TikTok", status: "Próximamente", icon: "video" },
  { id: "youtube", label: "YouTube", status: "Próximamente", icon: "play" },
  { id: "instagram", label: "Instagram", status: "Próximamente", icon: "camera" },
  { id: "blog", label: "Blog", status: "Próximamente", icon: "article" },
  { id: "comunidad", label: "Comunidad", status: "Próximamente", icon: "community" },
];

export const legalLinks: FooterLink[] = [
  { label: "Aviso legal", status: "En construcción" },
  { label: "Privacidad", status: "En construcción" },
  { label: "Términos de uso", status: "En construcción" },
  { label: "Cookies", status: "En construcción" },
];
