import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    image: z.string(),
    techStack: z.array(z.string()).default([]),
    customerUrl: z.string().catch("#"),
    status: z.string().catch("online"),
    seoTitle: z.string().optional(),
    seoDesc: z.string().optional(),
    tasks: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };