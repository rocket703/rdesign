export const STYLE_PRESETS = [
  { id: 'modern', label: 'Modern', description: 'Glas, Farbverlauf, Leuchten' },
  { id: 'clean', label: 'Schlicht', description: 'Viel Weißraum, Serifenschrift, feine Linien' },
  { id: 'lando', label: 'Sportlich', description: 'Neon, schräg, voller Energie' },
  { id: 'a11y', label: 'Barrierefrei', description: 'Hoher Kontrast, große Schrift, deutliche Fokus-Rahmen' },
] as const;

export type StylePresetId = (typeof STYLE_PRESETS)[number]['id'];

export const SHOWCASE_COPY = {
  title: 'Welcher Stil passt zu dir?',
  text: 'Dieselbe Webseite, vier Stile: Schrift, Farben, Ecken und Schatten machen den Unterschied. Klick dich durch.',
  site: {
    name: 'Café an der Elbe',
    eyebrow: 'Magdeburg · seit 1998',
    title: 'Frühstück mit Elbblick',
    text: 'Hausgemachter Kuchen, regionaler Kaffee und ein Platz an der Sonne.',
    button: 'Tisch reservieren',
    cards: [
      { title: 'Frühstück', meta: 'ab 8 Uhr' },
      { title: 'Kuchen', meta: 'täglich frisch' },
      { title: 'Terrasse', meta: '40 Plätze' },
    ],
  },
} as const;
