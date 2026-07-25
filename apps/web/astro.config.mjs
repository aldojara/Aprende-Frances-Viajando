// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://aprendefrancesviajando.com",
  base: "/",
  redirects: {
    "/proyecto/": {
      status: 301,
      destination: "/sobre-nosotros/",
    },
  },
});
