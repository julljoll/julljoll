import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({
    pattern: ['src/content/blog/*.md', '*.md', '!README.md', '!CV_*.md', '!ROADMAP_*.md', '!LICENSE*'],
    base: '.',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    locale: z.enum(['es', 'en']).default('en'),
    date: z.coerce.date(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    tags: z
      .array(z.string())
      .default([])
      .transform((tags: string[]): string[] => [...new Set(tags)]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
