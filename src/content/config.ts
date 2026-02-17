import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    image: z.string(),
    techStack: z.array(z.string()).default([]),
    // Fallback auf "#" wenn customerUrl fehlt
    customerUrl: z.string().catch("#"), 
    // Fallback auf "online" wenn status fehlt
    status: z.string().catch("online"), 
    // SEO Felder optional machen, damit alte Dateien nicht crashen
    seoTitle: z.string().optional(),
    seoDesc: z.string().optional(),
  }),
});

export const collections = { projects };