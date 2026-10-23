export const STYLE_PRESETS = [
  { id: 'modern', label: 'Modern', url: 'werkhalle-coworking.de', description: 'Coworking-Space mit Glas, Farbverlauf und Leuchten' },
  { id: 'clean', label: 'Schlicht', url: 'cafe-an-der-elbe.de', description: 'Café mit viel Weißraum, Serifenschrift und feinen Linien' },
  { id: 'lando', label: 'Sportlich', url: 'elbufer-lauf.de', description: 'Stadtlauf in Neon, schräg und voller Energie' },
  { id: 'a11y', label: 'Barrierefrei', url: 'praxis-sonnenhof.de', description: 'Arztpraxis mit hohem Kontrast, großer Schrift und deutlichen Fokus-Rahmen' },
] as const;

export type StylePresetId = (typeof STYLE_PRESETS)[number]['id'];

export const SHOWCASE_COPY = {
  title: 'Welcher Stil passt zu dir?',
  text: 'Vier Branchen, vier eigene Auftritte: Jede Seite ist für ihr Publikum gebaut – nicht nur umgefärbt. Klick dich durch.',
} as const;
