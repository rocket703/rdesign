import manifest from '../data/image-manifest.json';

type ManifestEntry = {
  width: number;
  height: number;
  base: string;
  variants: number[];
};

const entries = manifest as Record<string, ManifestEntry>;

/**
 * Liefert src, srcset und echte Maße für ein Bild aus public/images/.
 * Varianten erzeugt `npm run images`; fehlt ein Bild im Manifest,
 * wird das Original ohne srcset ausgeliefert.
 */
export function responsiveImage(src: string, fallbackWidth = 1200) {
  const entry = entries[src];
  if (!entry) return { src, srcset: undefined, width: undefined, height: undefined };

  const variant = (w: number) => `${entry.base}-${w}.webp`;
  const fallback =
    entry.variants.find((w) => w >= fallbackWidth) ?? entry.variants[entry.variants.length - 1];

  return {
    src: variant(fallback),
    srcset: entry.variants.map((w) => `${variant(w)} ${w}w`).join(', '),
    width: entry.width,
    height: entry.height,
  };
}
