import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { lastModified } from './src/lib/last-modified.mjs';

const SITE = 'https://r3webdesign.de';

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
  // CSS direkt in jede Seite schreiben: GitHub Pages löscht beim Deployment die alten,
  // per Hash benannten CSS-Dateien, zwischengespeicherte HTML-Seiten (bis 10 Min.) zeigten
  // sonst kurz eine Seite ohne Gestaltung. Kostet ca. 20 KB (gzip) je Seite, spart dafür eine Anfrage.
  build: { inlineStylesheets: 'always' },
  // Interne Links beim Hovern bzw. Antippen vorladen
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  // Weiterleitung /projekte/gedankenrein-coaching(/) → /projekte/ (301) steht in Caddy auf dem Server
});
