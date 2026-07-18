import { withBase } from "./paths";

type RoutableContent = {
  id: string;
  data: {
    domain: string;
    levels?: string[];
    demonstration?: boolean;
  };
};

export const getFinalContentSlug = (id: string) => {
  const segments = id.split("/").filter(Boolean);
  return segments[segments.length - 1] ?? id;
};

export const getDelfContentLevel = (item: RoutableContent) => {
  const folderLevel = item.id.split("/").find((segment) => /^b[12]$/i.test(segment));
  const metadataLevel = item.data.levels?.find((level) => level === "B1" || level === "B2");

  return (folderLevel ?? metadataLevel ?? "").toLowerCase();
};

export const getContentRoute = (item: RoutableContent) => {
  if (item.data.domain === "grammar" && item.data.demonstration === false) {
    return withBase(`/gramatica/${getFinalContentSlug(item.id)}/`);
  }

  if (item.data.domain === "delf" && item.data.demonstration === false) {
    const level = getDelfContentLevel(item);
    const slug = getFinalContentSlug(item.id);

    return level ? withBase(`/delf/${level}/${slug}/`) : undefined;
  }

  return undefined;
};
