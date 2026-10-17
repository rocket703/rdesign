// Erzeugt responsive Varianten aller Bilder in public/images/ und eine
// Übersicht mit echten Maßen (src/data/image-manifest.json).
// Aufruf: npm run images
import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SOURCE_DIR = 'public/images';
const OUTPUT_DIR = 'public/images/responsive';
const MANIFEST = 'src/data/image-manifest.json';
const WIDTHS = [480, 800, 1200, 1600, 2400];
const QUALITY = 80;

// Abweichende Einstellungen je Bild (z. B. kleine Anzeige oder Farbfilter darüber)
const OVERRIDES = {
  // Porträt: höchstens 320 px breit angezeigt (640 px für Retina), 160 px für das runde Bild auf /kontakt/
  'dustin-rose.webp': { quality: 78, widths: [320, 640] },
  // Kopf-Ausschnitt fürs runde Bild auf /kontakt/ (72 px, 144 px für Retina)
  'dustin-rose-avatar.webp': { quality: 80, widths: [160] },
};

await mkdir(OUTPUT_DIR, { recursive: true });

// Alte Varianten entfernen, damit keine verwaisten Größen liegen bleiben
for (const file of await readdir(OUTPUT_DIR)) {
  if (file.endsWith('.webp')) await rm(path.join(OUTPUT_DIR, file));
}

const manifest = {};
const sources = (await readdir(SOURCE_DIR)).filter((file) => /\.(webp|png|jpe?g)$/i.test(file)).sort();

for (const file of sources) {
  const sourcePath = path.join(SOURCE_DIR, file);
  const { width, height } = await sharp(sourcePath).metadata();
  const name = path.parse(file).name;
  const { quality = QUALITY, maxWidth = Infinity, widths = WIDTHS } = OVERRIDES[file] ?? {};

  // Nur verkleinern: Breiten oberhalb des Originals entfallen,
  // das Original selbst kommt als größte Variante dazu.
  const targets = widths.filter((w) => w < width && w <= maxWidth);
  if (!targets.includes(width) && width <= widths.at(-1) && width <= maxWidth) targets.push(width);

  const variants = [];
  for (const target of targets) {
    const output = path.join(OUTPUT_DIR, `${name}-${target}.webp`);
    await sharp(sourcePath).resize({ width: target }).webp({ quality }).toFile(output);
    variants.push(target);
  }

  manifest[`/images/${file}`] = { width, height, base: `/images/responsive/${name}`, variants };
  console.log(`${file}: ${width}×${height} → ${variants.join(', ')}`);
}

await writeFile(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Manifest geschrieben: ${MANIFEST}`);

// Vorschaubilder fürs Teilen (WhatsApp, LinkedIn …): je Projekt ein JPG in 1200 × 630,
// oberer Ausschnitt des Screenshots. JPG statt WebP, weil nicht jede App WebP-Vorschauen zeigt.
const OG_DIR = 'public/og';
const PROJECTS_DIR = 'src/content/projects';
await mkdir(OG_DIR, { recursive: true });
for (const file of await readdir(PROJECTS_DIR)) {
  if (!/\.mdx?$/.test(file)) continue;
  const text = await readFile(path.join(PROJECTS_DIR, file), 'utf8');
  const image = text.match(/^image:\s*["']?([^"'\n]+)/m)?.[1];
  if (!image) continue;
  const slug = path.parse(file).name;
  try {
    await sharp(path.join('public', image))
      .resize({ width: 1200, height: 630, fit: 'cover', position: 'top' })
      .jpeg({ quality: 82, progressive: true, mozjpeg: true })
      .toFile(path.join(OG_DIR, `${slug}.jpg`));
    console.log(`og/${slug}.jpg`);
  } catch {
    console.log(`og/${slug}.jpg übersprungen (${image} fehlt)`);
  }
}
