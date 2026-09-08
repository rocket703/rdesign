export const PROJECT_BIOMES = ['technical', 'candy', 'clean'] as const;

export type ProjectBiome = (typeof PROJECT_BIOMES)[number];

export const BIOME_META: Record<
  ProjectBiome,
  {
    label: string;
    path: string;
    title: string;
    description: string;
    num: string;
  }
> = {
  technical: {
    num: '01',
    label: 'Technical Zone',
    path: 'stack.core',
    title: 'Engineering & Performance',
    description:
      'Fullstack, statische Stacks, APIs — wenn Zahlen zählen und der Code langfristig wartbar bleiben muss.',
  },
  candy: {
    num: '02',
    label: 'Signature',
    path: 'studio.self',
    title: 'Design mit Charakter',
    description:
    'Persönlich, direkt und mit eigener Handschrift — für einen Auftritt, der zu dir passt.',
  },
  clean: {
    num: '03',
    label: 'Clean Corner',
    path: 'minimal.ui',
    title: 'Ruhe & Klarheit',
    description:
      'Viel Weißraum, präzise Typo, vertrauensvolle Oberflächen — für Dienstleister und Premium-Auftritte.',
  },
};

export const EARTH_META = {
  num: '04',
  label: 'Grounded',
  path: 'craft.local',
  title: 'Handwerk aus Magdeburg',
  description:
    'Solide Umsetzung, ehrliche Kommunikation — digital gebaut in Magdeburg, damit es bleibt.',
};
