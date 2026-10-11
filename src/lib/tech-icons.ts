import {
  siAstro,
  siBootstrap,
  siCss,
  siExpo,
  siForgejo,
  siGithub,
  siHtml5,
  siJavascript,
  siJquery,
  siLivekit,
  siMatrix,
  siNginx,
  siPhp,
  siPostgresql,
  siReact,
  siResend,
  siSupabase,
  siTailwindcss,
  siVercel,
  siWireguard,
  siWordpress,
} from 'simple-icons';

export type TechIcon = {
  title: string;
  /** SVG-Pfad im 24×24-Raster */
  path: string;
  /** Marken-Icons sind gefüllt, eigene Symbole gezeichnet */
  mode: 'fill' | 'stroke';
};

const brand = (icon: { title: string; path: string }, title = icon.title): TechIcon => ({
  title,
  path: icon.path,
  mode: 'fill',
});

// Eigene Symbole für Begriffe ohne Marken-Logo
const symbols: Record<string, TechIcon> = {
  seo: { title: 'SEO', mode: 'stroke', path: 'M10.5 4a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM15.5 15.5 21 21' },
  'static site': { title: 'Statische Seite', mode: 'stroke', path: 'M13 2 4 14h7l-1 8 9-12h-7l1-8Z' },
  'cms-integration': {
    title: 'CMS-Integration',
    mode: 'stroke',
    path: 'M4 4h16v16H4ZM4 9h16M9 9v11',
  },
  web3forms: { title: 'Web3Forms', mode: 'stroke', path: 'M5 3h14v18H5ZM8 8h8M8 12h8M8 16h5' },
  mailtory: { title: 'Mailtory (E-Mail-Marketing)', mode: 'stroke', path: 'M3 5h18v14H3ZM3 6l9 7 9-7' },
};

const brands: Record<string, TechIcon> = {
  astro: brand(siAstro),
  bootstrap: brand(siBootstrap),
  css3: brand(siCss, 'CSS3'),
  css: brand(siCss),
  'github pages': brand(siGithub, 'GitHub Pages'),
  html5: brand(siHtml5),
  javascript: brand(siJavascript),
  jquery: brand(siJquery),
  postgresql: brand(siPostgresql),
  php: brand(siPhp, 'PHP'),
  'react native': brand(siReact, 'React Native'),
  expo: brand(siExpo),
  nginx: brand(siNginx),
  livekit: brand(siLivekit),
  matrix: brand(siMatrix),
  wireguard: brand(siWireguard),
  forgejo: brand(siForgejo),
  resend: brand(siResend),
  supabase: brand(siSupabase),
  'tailwind css': brand(siTailwindcss),
  vercel: brand(siVercel),
  wordpress: brand(siWordpress),
};

// Inhalte nutzen teils geschützte Bindestriche (U+2011)
const normalize = (label: string) => label.toLowerCase().replace(/‑/g, '-').trim();

export function techIcon(label: string): TechIcon | null {
  const key = normalize(label);
  return brands[key] ?? symbols[key] ?? null;
}
