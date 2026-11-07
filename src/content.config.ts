import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    locale: z.enum(['es', 'en']).default('en'),
    date: z.coerce.date(),
    tags: z
      .array(z.string())
      .default([])
      .transform((tags: string[]): string[] => [...new Set(tags)]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
