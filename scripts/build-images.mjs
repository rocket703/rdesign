// Erzeugt responsive Varianten aller Bilder in public/images/ und eine
// Übersicht mit echten Maßen (src/data/image-manifest.json).
// Aufruf: npm run images
import { mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SOURCE_DIR = 'public/images';
const OUTPUT_DIR = 'public/images/responsive';
const MANIFEST = 'src/data/image-manifest.json';
const WIDTHS = [480, 800, 1200, 1600, 2400];
const QUALITY = 80;

// Abweichende Einstellungen je Bild (z. B. kleine Anzeige oder Farbfilter darüber)
const OVERRIDES = {
  // Porträt: max. 320 px breit angezeigt (640 px für Retina), Duotone-Filter darüber
  'IMG_1907.webp': { quality: 60, widths: [320, 640] },
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
