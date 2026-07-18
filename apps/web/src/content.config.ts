import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

const levelSchema = z.enum(["A1", "A2", "B1", "B2", "C1"]);
const publicationStatusSchema = z.enum(["draft", "published", "archived"]);
const coverageStatusSchema = z.enum(["available", "expanding", "planned"]);
const contentKindSchema = z.enum([
  "lesson",
  "practice",
  "media",
  "exam-preparation",
  "episode",
  "guide",
]);
const formatSchema = z.enum([
  "article",
  "video",
  "audio",
  "podcast",
  "interactive",
  "downloadable",
]);
const domainSchema = z.enum([
  "grammar",
  "delf",
  "listening",
  "communication",
  "travel-french",
  "vocabulary",
  "pronunciation",
]);
const grammarModuleSchema = z.enum([
  "fundamentos-frase",
  "tiempos-modos-formas",
  "pronombres-determinantes",
  "transformacion-discurso",
  "conectores-relaciones",
  "funciones-argumentacion",
]);
const communicationGoalSchema = z.enum([
  "hablar-del-pasado",
  "opinar-y-argumentar",
  "formular-hipotesis",
  "dar-consejos",
  "expresar-obligacion",
  "contar-lo-que-alguien-dijo",
  "causa-y-consecuencia",
]);
const examVersionSchema = z.enum(["tout-public", "junior-scolaire", "prim"]);
const examSkillSchema = z.enum([
  "overview",
  "listening",
  "reading",
  "writing",
  "speaking",
]);
const examContentTypeSchema = z.enum([
  "exam-overview",
  "skill-guide",
  "task-guide",
  "strategy",
  "evaluation",
  "practice",
  "mock-exam",
]);

const baseEditorialSchema = z.object({
  title: z.string(),
  description: z.string(),
  publicationStatus: publicationStatusSchema,
  coverageStatus: coverageStatusSchema,
  levels: z.array(levelSchema).min(1),
  tags: z.array(z.string()).default([]),
  demonstration: z.boolean().default(true),
});

const content = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/content" }),
  schema: baseEditorialSchema.extend({
    contentKind: contentKindSchema,
    format: formatSchema,
    domain: domainSchema,
    duration: z.string().optional(),
    objectives: z.array(z.string()).default([]),
    competencies: z.array(z.string()).default([]),
    grammarFamily: z.string().optional(),
    communicativeNeeds: z.array(z.string()).default([]),
    moduleId: grammarModuleSchema.optional(),
    moduleOrder: z.number().int().positive().optional(),
    grammarTopics: z.array(z.string()).default([]),
    communicationGoals: z.array(communicationGoalSchema).default([]),
    status: coverageStatusSchema.optional(),
    estimatedMinutes: z.number().int().positive().optional(),
    prerequisites: z.array(reference("content")).default([]),
    nextContent: reference("content").optional(),
    lessonOrder: z.number().int().positive().optional(),
    formation: z.array(z.string()).default([]),
    uses: z.array(z.string()).default([]),
    examples: z
      .array(
        z.object({
          french: z.string(),
          spanish: z.string(),
          note: z.string().optional(),
        }),
      )
      .default([]),
    comparisons: z.array(z.string()).default([]),
    commonMistakes: z.array(z.string()).default([]),
    practicalApplication: z.string().optional(),
    relatedContent: z.array(reference("content")).default([]),
    series: reference("series").optional(),
    episodeNumber: z.number().int().positive().optional(),
    relatedResources: z.array(reference("resources")).default([]),
    examVersion: examVersionSchema.optional(),
    examSkill: examSkillSchema.optional(),
    examContentType: examContentTypeSchema.optional(),
    taskType: z.string().optional(),
    examOrder: z.number().int().positive().optional(),
    sourceCheckedAt: z.string().optional(),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/resources" }),
  schema: baseEditorialSchema.extend({
    resourceType: z.enum([
      "checklist",
      "map",
      "worksheet",
      "transcript",
      "audio-pack",
      "guide",
    ]),
    format: formatSchema,
    fileHref: z.string().optional(),
    relatedContent: z.array(reference("content")).default([]),
  }),
});

const series = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/series" }),
  schema: baseEditorialSchema.extend({
    domain: domainSchema,
    format: z.enum(["video-series", "audio-series", "article-series"]),
    objectives: z.array(z.string()).default([]),
  }),
});

const learningPaths = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/learningPaths",
  }),
  schema: baseEditorialSchema.extend({
    objective: z.string(),
    estimatedDuration: z.string().optional(),
    steps: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
          content: reference("content").optional(),
          coverageStatus: coverageStatusSchema,
        }),
      )
      .min(1),
  }),
});

export const collections = {
  content,
  resources,
  series,
  learningPaths,
};
