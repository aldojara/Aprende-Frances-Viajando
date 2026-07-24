import type { APIRoute } from "astro";
import { absoluteUrl } from "../utils/seo";

export const GET: APIRoute = ({ site, url }) => {
  const baseUrl = site ?? url;
  const body = `User-agent: *
Allow: /

Sitemap: ${absoluteUrl("/sitemap.xml", baseUrl)}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
