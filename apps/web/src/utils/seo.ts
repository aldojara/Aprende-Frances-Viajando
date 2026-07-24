import { withBase } from "./paths";

export const siteName = "Aprende Francés Viajando";

export const defaultDescription =
  "Plataforma para aprender francés por niveles, preparar el DELF y practicar con recursos guiados.";

export const defaultOgImage = "/images/hero-paris.jpg";

export const absoluteUrl = (path: string | undefined, baseUrl: URL) => {
  const value = path || "/";

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  if (normalizedBase !== "/" && value.startsWith(normalizedBase)) {
    return new URL(value, baseUrl).toString();
  }

  return new URL(withBase(value), baseUrl).toString();
};

export const serializeJsonLd = (data: unknown) =>
  JSON.stringify(data).replace(/</g, "\\u003c");
