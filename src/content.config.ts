import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/works" }),
  schema: z.object({
    slug: z.string(),
    title: z.object({ en: z.string(), es: z.string() }),
    category: z.enum([
      "cosmos",
      "bio-art",
      "sculpture",
      "opera",
      "performance",
      "immersive",
    ]),
    year: z.number(),
    yearRange: z.tuple([z.number(), z.number()]).optional(),
    technique: z.object({
      en: z.array(z.string()),
      es: z.array(z.string()),
    }),
    description: z.object({ en: z.string(), es: z.string() }),
    collaborators: z
      .array(
        z.object({
          name: z.string(),
          role: z.object({ en: z.string(), es: z.string() }),
        })
      )
      .default([]),
    exhibitions: z
      .array(
        z.object({
          year: z.number(),
          venue: z.string(),
          city: z.string().optional(),
        })
      )
      .default([]),
    awards: z
      .array(
        z.object({
          year: z.number(),
          name: z.string(),
          body: z.string(),
        })
      )
      .default([]),
    press: z
      .array(
        z.object({
          title: z.string(),
          outlet: z.string(),
          url: z.string(),
          year: z.number(),
        })
      )
      .default([]),
    videos: z
      .array(
        z.object({
          vimeoId: z.string(),
          label: z.object({ en: z.string(), es: z.string() }),
          duration: z.string().optional(),
        })
      )
      .default([]),
    images: z
      .array(
        z.object({
          src: z.string(),
          alt: z.object({ en: z.string(), es: z.string() }),
          isHero: z.boolean().optional(),
        })
      )
      .default([]),
    audio: z
      .array(
        z.object({
          src: z.string(),
          label: z.object({ en: z.string(), es: z.string() }),
        })
      )
      .optional(),
    related: z.array(z.string()).default([]),
    isOngoing: z.boolean().optional(),
  }),
});

export const collections = { works };
