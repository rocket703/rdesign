// Bleistift-Skizzen für den Hero: werden beim Build als statische SVG-Dateien erzeugt
// (siehe src/pages/sketch/[name].svg.ts). Als <img> eingebunden rastert der Browser sie
// einmal – die SVG-Filter für Wackeln und Graphit-Körnung kosten beim Scrollen nichts.
import fs from 'node:fs';
import path from 'node:path';
import rough from 'roughjs';

const INK = '#4a5056';

const readPath = (file: string) => {
  const svg = fs.readFileSync(path.join(process.cwd(), 'public', file), 'utf8');
  return svg.match(/ d="([^"]+)"/)![1];
};

// Wackeln (niedrige Frequenz) + Körnung (hohe Frequenz, stanzt Lücken in den Strich)
const pencilFilter = (wobble: number, grain: number) => `
<filter id="pencil" x="-5%" y="-5%" width="110%" height="110%">
  <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="4" result="w"/>
  <feDisplacementMap in="SourceGraphic" in2="w" scale="${wobble}" xChannelSelector="R" yChannelSelector="G" result="s"/>
  <feTurbulence type="fractalNoise" baseFrequency="${grain}" numOctaves="1" seed="9" result="g"/>
  <feColorMatrix in="g" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.3 1.45" result="m"/>
  <feComposite in="s" in2="m" operator="in"/>
</filter>`;

const svgDoc = (w: number, h: number, body: string, filter = pencilFilter(1.2, 0.9)) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">` +
  `<defs>${filter}</defs><g filter="url(#pencil)">${body}</g></svg>`;

// ── Logo: Umriss der Bildmarke, doppelt und leicht versetzt nachgezogen ──
function logo() {
  const d = readPath('logo-header.svg');
  const body =
    `<g fill="none" stroke="#33383d" stroke-linejoin="round">` +
    `<path d="${d}" stroke-width="1"/>` +
    `<path d="${d}" stroke-width="0.55" opacity="0.6" transform="translate(0.7 0.5) rotate(0.15)"/>` +
    `</g>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 398 108" width="398" height="108">` +
    `<defs>${pencilFilter(1.1, 0.9)}</defs><g filter="url(#pencil)">${body}</g></svg>`;
}

// ── Wireframe-Skizzen mit Rough.js ──
type Drawable = ReturnType<ReturnType<typeof rough.generator>['line']>;
type Gen = {
  line: (x1: number, y1: number, x2: number, y2: number) => Drawable;
  rectangle: (x: number, y: number, w: number, h: number) => Drawable;
  circle: (x: number, y: number, d: number) => Drawable;
};

function sketch(seedBase: number, draw: (g: Gen) => Drawable[]) {
  const g = rough.generator({
    options: { stroke: INK, strokeWidth: 1, roughness: 0.9, bowing: 0.7 },
  });
  // jedes Element bekommt einen eigenen festen Seed: Linien wackeln unterschiedlich,
  // der Build bleibt trotzdem reproduzierbar
  let seed = seedBase;
  const shapes = draw({
    line: (x1, y1, x2, y2) => g.line(x1, y1, x2, y2, { seed: ++seed }),
    rectangle: (x, y, w, h) => g.rectangle(x, y, w, h, { seed: ++seed }),
    circle: (x, y, d) => g.circle(x, y, d, { seed: ++seed }),
  });
  return shapes
    .flatMap((s) => g.toPaths(s))
    .map((p) => `<path d="${p.d.replace(/-?\d+\.\d+/g, (n) => (+n).toFixed(1))}" fill="none" stroke="${p.stroke}" stroke-width="${p.strokeWidth}" stroke-linecap="round"/>`)
    .join('');
}

const textLines = (g: Gen, x: number, y: number, widths: number[], gap = 18) =>
  widths.map((w, i) => g.line(x, y + i * gap, x + w, y + i * gap));

const imageBox = (g: Gen, x: number, y: number, w: number, h: number) => [
  g.rectangle(x, y, w, h),
  g.line(x, y, x + w, y + h),
  g.line(x + w, y, x, y + h),
];

// oben links: Bildfläche mit Kreuz, Button, Textzeilen
const cornerTL = () =>
  svgDoc(460, 420, sketch(10, (g) => [
    ...imageBox(g, 10, 40, 330, 190),
    g.rectangle(370, 46, 70, 18),
    ...textLines(g, 10, 272, [300, 260, 330]),
    ...textLines(g, 10, 352, [140, 120]),
  ]));

// oben rechts: Browserfenster mit Mini-Logo, Navigation, Teaser mit Kreisen
function cornerTR() {
  const mark = readPath('logo-mark.svg');
  const lines = sketch(40, (g) => [
    g.rectangle(20, 20, 440, 400),
    g.line(330, 46, 358, 46), g.line(372, 46, 400, 46), g.line(414, 46, 440, 46),
    g.line(20, 80, 460, 80),
    ...textLines(g, 60, 120, [230, 200, 230], 16),
    g.circle(150, 230, 34), g.circle(330, 230, 34),
    ...textLines(g, 60, 290, [180, 150, 170], 18),
    ...textLines(g, 250, 290, [180, 150, 170], 18),
  ]);
  const logoMark = `<path d="${mark}" fill="none" stroke="${INK}" stroke-width="5" transform="translate(32 32) scale(0.055)"/>`;
  return svgDoc(480, 440, lines + logoMark);
}

// unten links: Reiter, Bildfläche, Textzeilen
const cornerBL = () =>
  svgDoc(460, 400, sketch(70, (g) => [
    g.rectangle(10, 30, 120, 22), g.rectangle(150, 30, 160, 22),
    ...imageBox(g, 10, 90, 330, 200),
    ...textLines(g, 10, 330, [290, 240]),
  ]));

// unten rechts: Formular mit Feldern und Buttons
const cornerBR = () =>
  svgDoc(460, 400, sketch(100, (g) => [
    g.line(30, 30, 330, 30), g.line(30, 30, 30, 60),
    ...textLines(g, 30, 80, [260, 200, 240], 16),
    g.rectangle(30, 150, 180, 24), g.rectangle(240, 150, 180, 24),
    ...textLines(g, 30, 210, [390, 390, 300], 26),
    g.rectangle(30, 300, 110, 26), g.rectangle(160, 300, 110, 26),
  ]));

export const sketches = {
  'hero-logo': logo,
  'corner-tl': cornerTL,
  'corner-tr': cornerTR,
  'corner-bl': cornerBL,
  'corner-br': cornerBR,
} as const;

export type SketchName = keyof typeof sketches;

// ── Gekritzelter Rahmen für Buttons: wird per preserveAspectRatio="none" auf die
// Button-Größe gestreckt, die Strichstärke bleibt dank non-scaling-stroke gleich ──
export function sketchFrame(seed: number) {
  const g = rough.generator({
    options: { roughness: 1.5, bowing: 2.2, maxRandomnessOffset: 2.5, seed },
  });
  return g
    .toPaths(g.rectangle(6, 5, 188, 42))
    .map((p) => `<path d="${p.d.replace(/-?\d+\.\d+/g, (n) => (+n).toFixed(1))}"/>`)
    .join('');
}
