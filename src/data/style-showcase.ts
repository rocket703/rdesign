export const STYLE_PRESETS = [
  { id: 'lando', label: 'Lando', description: 'Neon, schräg, Racing-Energy' },
  { id: 'clean', label: 'Clean', description: 'Weißraum, feine Linien' },
  { id: 'modern', label: 'Modern', description: 'Glas, Gradient, Glow' },
  { id: 'a11y', label: 'Barrierefrei', description: 'Kontrast, Klarheit, Fokus' },
] as const;

export type StylePresetId = (typeof STYLE_PRESETS)[number]['id'];

export const SHOWCASE_COPY = {
  eyebrow: 'CSS Live',
  text: 'Button, Typo, Rand und Schatten — ein Markup, vier komplett andere Welten. So baue ich Systeme, die sich anfühlen, nicht nur aussehen.',
  cta: 'Projekt anfragen',
  preview: {
    pill: 'Live',
    tags: ['Radius', 'Schatten', 'Rand'] as const,
  },
} as const;
