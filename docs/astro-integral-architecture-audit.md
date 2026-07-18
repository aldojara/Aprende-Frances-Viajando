# Auditoría Astro y plan de arquitectura integral

Fecha: 2026-07-17  
Worktree: `C:\Users\Aldo\.codex\visualizations\2026\07\17\019f726e-d1ac-7223-b378-85566df1921c\audit-worktree`  
Rama: `codex/audit-integral-architecture`  
Base: `migration/astro-mvp` (`f48c5ffe89f53996089fd67f698a6c2ecafa5843`)  

## 1. Alcance y criterio

La versión Astro ubicada en `apps/web` se toma como referencia canónica para Cloudflare Pages. La raíz del repositorio conserva páginas HTML estáticas y material heredado, pero esta auditoría no propone modificar ese contenido ni el repositorio independiente de GitHub Pages.

La arquitectura objetivo debe soportar desde el inicio niveles A1, A2, B1, B2 y C1. La cobertura editorial puede ser progresiva, pero el modelo técnico no debe posicionar la plataforma como solo B1/B2.

Impacto visual de esta tarea: ninguno. No se modificó el home aprobado ni se cambiaron estilos, componentes o rutas de producción.

Nota de implementación posterior: para Astro 7, la configuración de colecciones debe vivir en `apps/web/src/content.config.ts` y usar loaders compatibles con Content Layer. Las referencias anteriores a `apps/web/src/content/config.ts` quedan corregidas por la implementación de la vertical A1-C1.

## 2. Estado actual del repositorio

### 2.1 Estructura general

```text
/
├─ apps/
│  └─ web/                     # Aplicación Astro canónica
├─ cursos/                     # HTML heredado A2/B1, fuera de Astro
├─ .github/workflows/          # Workflow heredado de sitemap para GitHub Pages
├─ *.html                      # Páginas estáticas heredadas de raíz
├─ robots.txt
├─ sitemap.xml
└─ README.md
```

La app Astro actual:

```text
apps/web/
├─ public/
│  ├─ favicon.ico
│  ├─ favicon.svg
│  └─ images/recent/*.svg
├─ src/
│  ├─ components/
│  │  ├─ global/Header.astro
│  │  └─ home/*.astro
│  ├─ data/*.ts
│  ├─ layouts/BaseLayout.astro
│  ├─ pages/index.astro
│  └─ styles/global.css
├─ astro.config.mjs
├─ package.json
├─ package-lock.json
└─ tsconfig.json
```

### 2.2 Páginas y rutas

Ruta Astro implementada:

- `/` mediante `apps/web/src/pages/index.astro`.

Rutas enlazadas o previstas, pero todavía no implementadas en Astro:

- `/niveles/`
- `/niveles/a1/`
- `/niveles/a2/`
- `/niveles/b1/`
- `/niveles/b2/`
- `/niveles/c1/`
- `/diagnostico/`
- `/gramatica/`
- `/delf/`
- `/recursos/`
- `/proyecto/`
- `/contenidos/`
- `/empieza/`
- `/comunicacion/`

El build actual confirma que solo se genera una página Astro: `/index.html`.

### 2.3 Layouts

`apps/web/src/layouts/BaseLayout.astro`:

- Importa `global.css`.
- Renderiza `Header`.
- Define `lang="es"`, metadatos básicos, `description`, título dinámico y favicons.
- Carga fuentes Google `Inter` y `Playfair Display`.
- No tiene footer, breadcrumbs, slots semánticos secundarios, Open Graph/Twitter cards, canonical URL ni esquema SEO extendido.

### 2.4 Componentes

Global:

- `Header.astro`: navegación principal, marca, CTAs y estado activo por prefijo de ruta.

Home:

- `Hero.astro`: posicionamiento integral A1-C1, DELF, multiformato e IA.
- `HowItWorks.astro`: pasos de experiencia progresiva.
- `LevelSelector.astro`: selector A1-C1 y diagnóstico, actualmente con datos inline.
- `ObjectiveCards.astro`: rutas por objetivo, con datos inline.
- `RecentContent.astro` + `ContentCard.astro`: grilla/carrusel responsive de contenido reciente.
- `FreeResources.astro` + `ResourceCard.astro`: recursos gratuitos con estado y descarga futura.
- `AIPlatform.astro` + `AIProcessStep.astro`: visión de IA con estados disponible/demostración/próximamente.
- `SuggestedRoute.astro` + `RouteStep.astro`: demostración editorial de ruta sugerida.

### 2.5 Colecciones de contenido

No existen colecciones Astro todavía:

- No hay `src/content/config.ts`.
- No hay `src/content/*`.
- No hay páginas dinámicas basadas en `getCollection`.

El contenido estructurado vive en `src/data/*.ts` y en algunos arrays inline dentro de componentes.

### 2.6 Modelos de datos

Modelos TypeScript actuales:

- `RecentContentItem`: id, título, formato, nivel, duración, imagen, href, alt, estado y categoría.
- `FreeResourceItem`: id, título, descripción, tipo, formato, nivel, archivo/href, registro, estado, categoría.
- `SuggestedRoute`, `RouteStep`: ruta editorial demostrativa con pasos, estado, formato, categoría y disponibilidad.
- `AIPlatformStep`: pasos de plataforma IA con estado, icono y capacidad futura.

Limitaciones:

- `level` es string libre, no taxonomía controlada.
- Los estados son similares pero no compartidos.
- No existe una entidad central para contenido, recursos, rutas, series, episodios, temas gramaticales o preparación DELF.
- No hay relación formal entre niveles, competencias, objetivos, temas, formatos y rutas.
- Los datos inline de `LevelSelector` y `ObjectiveCards` deberían moverse a taxonomías compartidas cuando se creen rutas reales.

### 2.7 Estilos y tokens

`apps/web/src/styles/global.css` define:

- Colores base: fondo cálido, superficie, azul, rojo, oro, texto, borde.
- Tipografías: display y body.
- Ancho de contenedor.
- Radios `sm/md/lg`.
- Sombras `sm/md`.
- Primitivas reutilizables: `.container`, `.section`, `.eyebrow`, `.button`, `.card`, `.visually-hidden`.

Patrón actual:

- CSS global para tokens y utilidades.
- CSS scoped dentro de cada componente.
- Responsive con breakpoints manuales.
- Componentes de cards con alturas estables, clamps de texto y carruseles horizontales en móvil.

### 2.8 Configuración Astro

`apps/web/astro.config.mjs` usa `defineConfig({})` sin integraciones.

El proyecto es estático por defecto. No hay configuración de `site`, adapter, sitemap oficial, markdown plugins, i18n ni redirects.

### 2.9 Build y despliegue

Scripts en `apps/web/package.json`:

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run astro`

Dependencias:

- `astro` `^7.1.0`.

Validación ejecutada:

- `npm ci`: correcto, 0 vulnerabilidades reportadas.
- `npm run build`: correcto, genera 1 página.

No se encontró configuración específica de Cloudflare Pages en el repo auditado. Probablemente el despliegue depende de configuración externa en Cloudflare: raíz `apps/web`, comando `npm run build`, salida `dist`.

### 2.10 Navegación

El header ya expresa la arquitectura inicial:

- Inicio
- Niveles
- Gramática
- DELF
- Recursos
- Proyecto
- CTA Explorar
- CTA Empieza gratis

Brecha: esas rutas todavía no existen, por lo que una vez desplegado el home puede conducir a 404 en navegación primaria.

### 2.11 Pruebas o validaciones

No hay test runner configurado. No hay `astro check` en scripts, Playwright, unit tests ni validaciones de contenido.

Validaciones disponibles hoy:

- TypeScript estricto vía `tsconfig` extendiendo `astro/tsconfigs/strict`.
- `astro build`, que actualmente compila.
- Validación manual de datos TypeScript en tiempo de build.

## 3. Elementos reutilizables

### 3.1 Componentes reutilizables con poca extracción

- `ContentCard.astro`: base para tarjetas de catálogo, episodios, artículos, audios y videos.
- `ResourceCard.astro`: base para descargables, PDFs, tests y materiales.
- `RouteStep.astro`: base para pasos de rutas de aprendizaje.
- `AIProcessStep.astro`: base para fases futuras o capacidades de plataforma.
- `Header.astro`: navegación principal lista para crecer si se centraliza el arreglo de nav.

### 3.2 Patrones visuales reutilizables

- Badges de estado tipo pill.
- Metadatos en `dl`.
- Tarjetas con imagen 16:9.
- Grids responsive con carrusel horizontal móvil.
- Paneles de ruta con progreso editorial.
- Estados visuales: disponible, demostración/en preparación y próximamente.

### 3.3 Datos reutilizables

- `recentContent` puede migrarse a una colección `content`.
- `freeResources` puede migrarse a una colección `resources` o integrarse como tipo de contenido.
- `suggestedRoute` puede convertirse en colección `learningPaths`.
- `aiPlatformSteps` debe permanecer como datos de marketing/visión, no como feature implementada.

## 4. Brechas frente a la arquitectura integral

### 4.1 Arquitectura de rutas

Faltan rutas reales para todos los dominios principales: niveles, gramática, DELF, comprensión oral, comunicación, francés para viajar, series, recursos, catálogo, rutas, proyecto y diagnóstico.

### 4.2 Contenido y colecciones

Falta una capa editorial normalizada con:

- Niveles CEFR A1-C1.
- Competencias: comprensión oral, comprensión escrita, producción oral, producción escrita, interacción, gramática, vocabulario, pronunciación.
- Objetivos: viajar, DELF, comunicación, fundamentos, fluidez, repaso.
- Formatos: artículo, video, audio, podcast, ejercicio, infografía, checklist, test, episodio, ruta.
- Estados: disponible, en expansión, próximamente.
- Relaciones entre temas, episodios, recursos y rutas.

### 4.3 Catálogo y filtros

No existe página de catálogo ni filtros por nivel, formato, objetivo, competencia, duración, estado o serie.

### 4.4 Rutas de aprendizaje

Hay una demostración visual, pero no existe modelo persistente para rutas, módulos, pasos, prerrequisitos, resultados esperados o secuencia editorial.

### 4.5 Series y episodios

No hay modelo para series, temporadas, episodios, orden, recursos asociados, transcripciones, audios o vínculos a temas.

### 4.6 EdTech futuro

La visión aparece bien marcada como futura en el home. Falta separar técnicamente:

- Funcionalidades actuales estáticas.
- Funcionalidades editoriales en expansión.
- Funcionalidades futuras con usuario/progreso/IA.

Esto evita presentar progreso, diagnóstico adaptativo o recomendaciones como implementados antes de tiempo.

### 4.7 SEO y despliegue

Faltan:

- `site` en Astro config.
- Sitemap generado desde Astro o integración equivalente.
- Metadatos por ruta.
- Slugs normalizados.
- Página 404.
- Redirecciones desde rutas heredadas si se decide integrarlas más adelante.

## 5. Propuesta de árbol de rutas

Primera arquitectura objetivo, sin implicar que todo el contenido exista desde el inicio:

```text
/
/niveles/
/niveles/a1/
/niveles/a2/
/niveles/b1/
/niveles/b2/
/niveles/c1/
/niveles/[level]/[slug]/

/gramatica/
/gramatica/[slug]/

/delf/
/delf/a1/
/delf/a2/
/delf/b1/
/delf/b2/
/delf/[level]/[slug]/

/comprension-oral/
/comprension-oral/[slug]/

/comunicacion/
/comunicacion/[slug]/

/frances-para-viajar/
/frances-para-viajar/[slug]/

/series/
/series/[serie]/
/series/[serie]/[episode]/

/recursos/
/recursos/[slug]/

/contenidos/
/contenidos/[slug]/

/rutas/
/rutas/[slug]/

/diagnostico/
/empieza/
/proyecto/
```

Notas:

- `/contenidos/` funciona como catálogo transversal.
- Las rutas temáticas pueden listar subconjuntos de la misma colección.
- Las páginas dinámicas deben filtrar por taxonomía, no duplicar contenido.
- `/diagnostico/` debe ser informativo o próximamente mientras no haya evaluación real.

## 6. Propuesta de estructura de carpetas Astro

```text
apps/web/src/
├─ components/
│  ├─ catalog/
│  │  ├─ CatalogGrid.astro
│  │  ├─ CatalogFilters.astro
│  │  └─ EmptyState.astro
│  ├─ content/
│  │  ├─ ContentCard.astro
│  │  ├─ ContentHeader.astro
│  │  ├─ ContentMeta.astro
│  │  └─ StatusBadge.astro
│  ├─ global/
│  │  ├─ Header.astro
│  │  └─ Footer.astro
│  ├─ home/
│  ├─ routes/
│  │  ├─ LearningPathCard.astro
│  │  └─ PathStepList.astro
│  └─ shared/
│     ├─ PageHero.astro
│     ├─ SectionHeader.astro
│     └─ TaxonomyPills.astro
├─ content/
│  ├─ config.ts
│  ├─ content/
│  ├─ resources/
│  ├─ series/
│  └─ learning-paths/
├─ data/
│  ├─ navigation.ts
│  ├─ taxonomies.ts
│  └─ home/
├─ layouts/
│  ├─ BaseLayout.astro
│  ├─ ContentLayout.astro
│  └─ ListingLayout.astro
├─ pages/
│  ├─ index.astro
│  ├─ niveles/
│  ├─ gramatica/
│  ├─ delf/
│  ├─ comprension-oral/
│  ├─ comunicacion/
│  ├─ frances-para-viajar/
│  ├─ series/
│  ├─ recursos/
│  ├─ contenidos/
│  ├─ rutas/
│  ├─ diagnostico.astro
│  ├─ empieza.astro
│  ├─ proyecto.astro
│  └─ 404.astro
└─ styles/
   └─ global.css
```

## 7. Colecciones Astro propuestas

### 7.1 `content`

Unidad editorial principal. Sirve para artículos, videos, audios, ejercicios, temas guiados, infografías y páginas didácticas.

Campos sugeridos:

```ts
{
  title: string;
  description: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  secondaryLevels?: ("A1" | "A2" | "B1" | "B2" | "C1")[];
  status: "disponible" | "en-expansion" | "proximamente";
  format: "articulo" | "video" | "audio" | "podcast" | "ejercicio" | "infografia" | "tema-guiado" | "test";
  domain: "gramatica" | "delf" | "comprension-oral" | "comunicacion" | "frances-para-viajar" | "vocabulario" | "pronunciacion";
  objectives: string[];
  competencies: string[];
  topics: string[];
  duration?: string;
  image?: string;
  alt?: string;
  featured?: boolean;
  publishedAt?: Date;
  updatedAt?: Date;
  canonicalPath?: string;
  relatedContent?: string[];
  series?: string;
  episode?: string;
}
```

### 7.2 `resources`

Descargables o materiales reutilizables.

Campos:

```ts
{
  title: string;
  description: string;
  level: Level | "multi";
  levels?: Level[];
  status: ContentStatus;
  resourceType: "pdf" | "checklist" | "mapa-visual" | "plantilla" | "quiz" | "audio" | "transcripcion";
  file?: string;
  href?: string;
  requiresRegistration: boolean;
  topics: string[];
  relatedContent?: string[];
}
```

### 7.3 `series`

Agrupa episodios.

Campos:

```ts
{
  title: string;
  description: string;
  status: ContentStatus;
  levels: Level[];
  domain: Domain;
  format: "serie-video" | "serie-audio" | "serie-articulos" | "curso-seriado";
  cover?: string;
  objectives: string[];
}
```

Los episodios pueden vivir en `content` referenciando `series`, o en una colección `episodes` si se necesita granularidad propia. Para la siguiente fase conviene evitar una colección extra y modelarlos como `content` con `series` y `episode`.

### 7.4 `learning-paths`

Rutas de aprendizaje editoriales.

Campos:

```ts
{
  title: string;
  description: string;
  level: Level;
  status: ContentStatus;
  objective: string;
  estimatedDuration?: string;
  audience?: string;
  outcomes: string[];
  steps: {
    order: number;
    title: string;
    description?: string;
    content?: string;
    status?: ContentStatus;
    required?: boolean;
  }[];
}
```

## 8. Taxonomías propuestas

Taxonomías centrales en `src/data/taxonomies.ts`:

- `levels`: A1, A2, B1, B2, C1.
- `domains`: niveles, gramática, DELF, comprensión oral, comunicación, francés para viajar, recursos, series.
- `competencies`: comprensión oral, comprensión escrita, producción oral, producción escrita, interacción oral, gramática, vocabulario, pronunciación.
- `objectives`: viajar, preparar DELF, comunicarme mejor, empezar desde cero, reforzar gramática, mejorar escucha, ganar fluidez.
- `formats`: artículo, video, audio, podcast, ejercicio, infografía, checklist, test, ruta.
- `statuses`: disponible, en expansión, próximamente.
- `examParts`: comprensión oral, comprensión escrita, producción oral, producción escrita para DELF.
- `travelSituations`: aeropuerto, hotel, restaurante, transporte, salud, compras, emergencias.

Regla importante: las taxonomías deben cubrir A1-C1 desde la primera implementación, aunque muchas páginas queden con estado `proximamente` o `en-expansion`.

## 9. Estrategia de estados

Estados canónicos:

- `disponible`: existe ruta usable y contenido real.
- `en-expansion`: existe página o sección base, pero la cobertura está incompleta.
- `proximamente`: se muestra como parte de la arquitectura, sin enlace profundo activo o con página informativa honesta.

Mapeo visual:

- `disponible`: verde suave.
- `en-expansion`: azul suave.
- `proximamente`: oro/superficie suave.

Reglas de UX:

- No enlazar tarjetas sin contenido real salvo a páginas hub claramente marcadas.
- No usar lenguaje de progreso personalizado si no hay persistencia.
- No presentar diagnóstico, IA, seguimiento o recomendaciones como funcionalidad activa hasta implementarlas.

## 10. Estrategia de catálogo y filtros

Fase inicial sin JavaScript pesado:

- `/contenidos/` renderiza estáticamente todos los ítems de la colección `content`.
- Filtros por query string opcionales pueden añadirse luego con componente liviano.
- En la primera versión, se pueden crear vistas estáticas por taxonomía:
  - `/niveles/a1/`
  - `/gramatica/`
  - `/delf/b1/`
  - `/recursos/`

Fase siguiente:

- `CatalogFilters.astro` renderiza controles semánticos.
- Un script pequeño filtra en cliente por `data-level`, `data-format`, `data-domain`, `data-status`.
- Mantener contenido completo en HTML para SEO.

Fase futura:

- Búsqueda local generada en build o índice JSON.
- Filtros combinables y orden por fecha, nivel, duración o ruta recomendada.

## 11. Decisiones técnicas recomendadas

1. Mantener `apps/web` como única superficie Astro canónica.
2. No migrar masivamente el HTML heredado en la siguiente tarea.
3. Crear primero taxonomías, esquemas y páginas hub mínimas.
4. Extraer estados y badges compartidos antes de duplicar UI en nuevas páginas.
5. Reutilizar cards actuales, moviéndolas gradualmente de `home` a `content`/`shared` cuando se usen fuera del home.
6. Añadir `site` a `astro.config.mjs` cuando se confirme el dominio final de Cloudflare Pages.
7. Mantener la visión EdTech futura como roadmap, no como feature implementada.
8. Usar slugs estables en español sin acentos para rutas.

## 12. Riesgos

- Rutas enlazadas desde el header pueden generar 404 hasta que existan hubs mínimos.
- El workflow de sitemap en `.github` apunta a `main` y GitHub Pages, no a Cloudflare Pages/Astro.
- El README raíz y README de Astro están desactualizados frente a la arquitectura actual.
- La raíz del repo mezcla legado HTML con app Astro, lo que puede confundir despliegue y mantenimiento.
- Hay mojibake visible en varios archivos (`FrancÃ©s`, `PrÃ³ximamente`), probablemente por encoding histórico. Conviene corregirlo de forma controlada en una tarea separada o durante edición de archivos tocados.
- Los datos actuales usan strings libres para nivel y estado, lo que puede generar inconsistencias al crecer el catálogo.
- Sin pruebas ni `astro check` explícito, el build puede no detectar todos los problemas de tipado de contenido futuro.

## 13. Plan por fases

### Fase 1: base arquitectónica sin rediseño

- Crear taxonomías compartidas A1-C1.
- Crear `src/content/config.ts`.
- Crear colecciones vacías o con semillas mínimas.
- Crear páginas hub mínimas para rutas ya enlazadas.
- Crear componentes compartidos `StatusBadge`, `PageHero`, `SectionHeader`.
- Crear catálogo inicial estático basado en colecciones.
- Mantener el home visualmente intacto.

### Fase 2: contenido inicial y navegación coherente

- Migrar datos demostrativos de `src/data` a colecciones donde aplique.
- Conectar `RecentContent` y `FreeResources` a contenido real o mantenerlos como home data con tipos compartidos.
- Activar `/niveles/`, `/gramatica/`, `/delf/`, `/recursos/`, `/contenidos/`, `/proyecto/`.
- Añadir página 404.
- Revisar header para evitar enlaces a rutas totalmente vacías.

### Fase 3: rutas de aprendizaje

- Implementar colección `learning-paths`.
- Crear `/rutas/` y `/rutas/[slug]/`.
- Crear rutas por nivel A1-C1 con estado editorial.
- Relacionar pasos con contenidos existentes.

### Fase 4: series, episodios y recursos

- Implementar `/series/` y páginas de serie.
- Modelar episodios como contenido con campos de serie.
- Añadir recursos asociados, transcripciones y descargables.

### Fase 5: catálogo avanzado

- Filtros en cliente por nivel, dominio, formato, estado y objetivo.
- Índice local de búsqueda si el volumen lo justifica.
- Vistas por combinación editorial importante: DELF B1, francés para viajar A2, gramática B2, etc.

### Fase 6: evolución EdTech

- Diagnóstico real.
- Seguimiento de progreso.
- Recomendaciones.
- Feedback asistido por IA.
- Cuentas de usuario o persistencia, solo cuando se defina backend/autenticación.

## 14. Archivos exactos para la siguiente tarea

Crear:

- `apps/web/src/data/taxonomies.ts`
- `apps/web/src/data/navigation.ts`
- `apps/web/src/content/config.ts`
- `apps/web/src/content/content/.gitkeep`
- `apps/web/src/content/resources/.gitkeep`
- `apps/web/src/content/series/.gitkeep`
- `apps/web/src/content/learning-paths/.gitkeep`
- `apps/web/src/components/shared/StatusBadge.astro`
- `apps/web/src/components/shared/PageHero.astro`
- `apps/web/src/components/shared/SectionHeader.astro`
- `apps/web/src/components/catalog/CatalogGrid.astro`
- `apps/web/src/components/catalog/CatalogFilters.astro`
- `apps/web/src/components/catalog/EmptyState.astro`
- `apps/web/src/layouts/ListingLayout.astro`
- `apps/web/src/layouts/ContentLayout.astro`
- `apps/web/src/pages/niveles/index.astro`
- `apps/web/src/pages/niveles/[level]/index.astro`
- `apps/web/src/pages/gramatica/index.astro`
- `apps/web/src/pages/delf/index.astro`
- `apps/web/src/pages/delf/[level]/index.astro`
- `apps/web/src/pages/comprension-oral/index.astro`
- `apps/web/src/pages/comunicacion/index.astro`
- `apps/web/src/pages/frances-para-viajar/index.astro`
- `apps/web/src/pages/series/index.astro`
- `apps/web/src/pages/recursos/index.astro`
- `apps/web/src/pages/contenidos/index.astro`
- `apps/web/src/pages/rutas/index.astro`
- `apps/web/src/pages/diagnostico.astro`
- `apps/web/src/pages/empieza.astro`
- `apps/web/src/pages/proyecto.astro`
- `apps/web/src/pages/404.astro`

Modificar:

- `apps/web/src/components/global/Header.astro`: importar navegación desde `src/data/navigation.ts` cuando existan hubs reales.
- `apps/web/src/styles/global.css`: añadir solo tokens de estado compartidos si se extrae `StatusBadge`.
- `apps/web/astro.config.mjs`: añadir `site` y/o integración de sitemap cuando se confirme URL canónica.
- `apps/web/package.json`: añadir scripts de validación, por ejemplo `check` con `astro check`, si se incorpora como dependencia/comando de proyecto.
- `apps/web/README.md`: reemplazar starter README por instrucciones reales de Astro/Cloudflare Pages.

No tocar en la siguiente tarea salvo decisión explícita:

- Home aprobado en `apps/web/src/pages/index.astro`.
- Componentes visuales existentes del home.
- HTML heredado de raíz.
- `cursos/` heredado.
- Workflow de GitHub Pages, salvo que se abra una tarea específica de despliegue/documentación.

## 15. Verificación ejecutada

```text
npm ci
npm run build
```

Resultado: build correcto, 1 página Astro generada.
