import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    image: z.string(),
    imageMobile: z.string().optional(),
    mobileNote: z.string().optional(),
    techStack: z.array(z.string()).default([]),
    customerUrl: z.string().catch("#"),
    status: z.string().catch("online"),
    archived: z.boolean().catch(false),
    biome: z.enum(['technical', 'candy', 'clean']).catch('technical'),
    seoTitle: z.string().optional(),
    seoDesc: z.string().optional(),
    tasks: z.array(z.string()).optional(),
    /** Slug eines Angebots unter /leistungen/ (z. B. „relaunch“) für die interne Verlinkung */
    relatedOffer: z.string().optional(),
    /** Projektart für das Band auf der Projektkarte (z. B. „Vereinsseite“) */
    category: z.string().optional(),
    /** Farben und Button-Stil der Projektseite – die Projektkarte wird eine kleine Version davon */
    theme: z
      .object({
        bg: z.string(),
        text: z.string(),
        muted: z.string(),
        accent: z.string(),
        accentText: z.string().default('#ffffff'),
        button: z.object({
          bg: z.string(),
          text: z.string(),
          border: z.string().default('none'),
          radius: z.string().default('8px'),
          transform: z.string().default('none'),
          weight: z.number().default(700),
          tracking: z.string().default('normal'),
          shadow: z.string().default('none'),
          clip: z.string().default('none'),
        }),
      })
      .optional(),
  }),
});

export const collections = { projects };