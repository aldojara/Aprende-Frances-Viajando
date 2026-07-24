// @ts-check
import { defineConfig } from "astro/config";

const previewBase = "/Aprende-Frances-Viajando-Astro-Preview";
// Astro config runs in Node; the project intentionally avoids adding @types/node.
// @ts-ignore
const env = process.env;
const rawBase =
  env.PUBLIC_BASE_PATH ??
  env.BASE_PATH ??
  (env.GITHUB_PAGES === "true" ? previewBase : "/");
const base = rawBase === "/" ? "/" : `/${rawBase.replace(/^\/|\/$/g, "")}`;

const site =
  env.PUBLIC_SITE_URL ??
  env.SITE ??
  (base === previewBase ? "https://aldojara.github.io" : "http://localhost:4321");

export default defineConfig({
  site,
  base,
});
