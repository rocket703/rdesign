import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // OHNE DIESE ZEILE KEINE SITEMAP:
  site: 'https://r3webdesign.de', 
  integrations: [sitemap()],
});