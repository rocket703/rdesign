// Echtes Änderungsdatum je URL aus der Git-Historie der zugehörigen Quelldateien.
// Genutzt für die Sitemap (lastmod) und für dateModified / article:modified_time im Seitenkopf.
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';

/** Quelldatei(en), aus denen eine URL entsteht */
export function sourcesFor(pathname) {
  const clean = pathname.replace(/^\/|\/$/g, '');
  const project = clean.match(/^projekte\/(.+)$/);
  if (project) return [`src/content/projects/${project[1]}.md`, 'src/pages/projekte/[id].astro'];
  if (clean.startsWith('leistungen/')) return ['src/data/offers.ts', 'src/pages/leistungen/[slug].astro'];
  if (clean === 'leistungen') return ['src/pages/leistungen/index.astro', 'src/data/services.ts', 'src/data/offers.ts'];
  if (clean === 'projekte') return ['src/pages/projekte/index.astro', 'src/content/projects'];
  const page = clean === '' ? 'src/pages/index.astro' : `src/pages/${clean}.astro`;
  const index = `src/pages/${clean}/index.astro`;
  const extra = clean === '' ? ['src/data/faq.ts', 'src/data/services.ts', 'src/content/projects'] : [];
  return [existsSync(page) ? page : index, ...extra];
}

const cache = new Map();

/** ISO-Datum der letzten Änderung (Commit) – oder undefined, wenn keine Historie da ist */
export function lastModified(pathname) {
  if (cache.has(pathname)) return cache.get(pathname);
  const files = sourcesFor(pathname).filter((file) => existsSync(file));
  let date;
  if (files.length) {
    try {
      date = execFileSync('git', ['log', '-1', '--format=%cI', '--', ...files], { encoding: 'utf8' }).trim() || undefined;
    } catch {
      date = undefined;
    }
  }
  cache.set(pathname, date);
  return date;
}
