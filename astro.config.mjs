import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://r3webdesign.de';

// Quelldatei(en) je URL – daraus ergibt sich das echte Änderungsdatum (lastmod)
function sourcesFor(pathname) {
  const clean = pathname.replace(/^\/|\/$/g, '');
  const project = clean.match(/^projekte\/(.+)$/);
  if (project) return [`src/content/projects/${project[1]}.md`, 'src/pages/projekte/[id].astro'];
  if (clean.startsWith('leistungen/')) return ['src/data/offers.ts', 'src/pages/leistungen/[slug].astro'];
  const page = clean === '' ? 'src/pages/index.astro' : `src/pages/${clean}.astro`;
  const index = `src/pages/${clean}/index.astro`;
  const extra = clean === '' ? ['src/data/faq.ts', 'src/data/services.ts'] : [];
  return [existsSync(page) ? page : index, ...extra];
}

function lastModified(pathname) {
  const files = sourcesFor(pathname).filter((file) => existsSync(file));
  if (!files.length) return undefined;
  try {
    const date = execFileSync('git', ['log', '-1', '--format=%cI', '--', ...files], { encoding: 'utf8' }).trim();
    return date || undefined;
  } catch {
    return undefined;
  }
}

export default defineConfig({
  // OHNE DIESE ZEILE KEINE SITEMAP:
  site: SITE,
  integrations: [
    sitemap({
      serialize(item) {
        const lastmod = lastModified(new URL(item.url).pathname);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
  // Interne Links beim Hovern bzw. Antippen vorladen
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  redirects: {
    '/projekte/gedankenrein-coaching': '/projekte/',
  },
});
