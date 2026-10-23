export const STYLE_PRESETS = [
  { id: 'modern', label: 'Modern', url: 'werkhalle-coworking.beispiel', description: 'Coworking-Space mit Glas, Farbverlauf und Leuchten' },
  { id: 'clean', label: 'Schlicht', url: 'cafe-an-der-elbe.beispiel', description: 'Café mit viel Weißraum, Serifenschrift und feinen Linien' },
  { id: 'lando', label: 'Sportlich', url: 'elbufer-lauf.beispiel', description: 'Stadtlauf in Neon, schräg und voller Energie' },
  { id: 'a11y', label: 'Barrierefrei', url: 'praxis-sonnenhof.beispiel', description: 'Arztpraxis mit hohem Kontrast, großer Schrift und deutlichen Fokus-Rahmen' },
] as const;

export type StylePresetId = (typeof STYLE_PRESETS)[number]['id'];

export const SHOWCASE_COPY = {
  title: 'Welcher Stil passt zu dir?',
  text: 'Vier erfundene Beispielseiten aus vier Branchen: Jede ist für ihr Publikum gebaut – nicht nur umgefärbt. Klick dich durch.',
} as const;
