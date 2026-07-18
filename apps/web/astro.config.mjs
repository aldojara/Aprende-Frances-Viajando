// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// GitHub Preview uses a subpath, while the canonical local/Cloudflare app is served from root.
// Do not copy deployment URL settings automatically between those projects.
export default defineConfig({});
