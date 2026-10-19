// Bleistift-Skizzen für den Hero: werden beim Build als statische SVG-Dateien erzeugt
// (siehe src/pages/sketch/[name].svg.ts). Als <img> eingebunden rastert der Browser sie
// einmal – der SVG-Filter für die Graphit-Körnung kostet beim Scrollen nichts.
import fs from 'node:fs';
import path from 'node:path';
import rough from 'roughjs';

const INK = '#4a5056';

const readPath = (file: string) => {
  const svg = fs.readFileSync(path.join(process.cwd(), 'public', file), 'utf8');
  return svg.match(/ d="([^"]+)"/)![1];
};

// Körnung (hohe Frequenz, stanzt Lücken in den Strich). Kein feDisplacementMap fürs Wackeln:
// Firefox rechnet ihn grob gerastert, die Striche werden dort treppig und zittrig.
// Das Wackeln kommt schon von Rough.js bzw. der doppelt nachgezogenen Logo-Linie.
const pencilFilter = (grain: number) => `
<filter id="pencil" x="-5%" y="-5%" width="110%" height="110%">
  <feTurbulence type="fractalNoise" baseFrequency="${grain}" numOctaves="1" seed="9" result="g"/>
  <feColorMatrix in="g" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.3 1.45" result="m"/>
  <feComposite in="SourceGraphic" in2="m" operator="in"/>
</filter>`;

const svgDoc = (w: number, h: number, body: string, filter = pencilFilter(0.9)) =>
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
    `<defs>${pencilFilter(0.9)}</defs><g filter="url(#pencil)">${body}</g></svg>`;
}

// ── Wireframe-Skizzen mit Rough.js ──
type Drawable = ReturnType<ReturnType<typeof rough.generator>['line']>;
type Gen = {
  line: (x1: number, y1: number, x2: number, y2: number) => Drawable;
  rectangle: (x: number, y: number, w: number, h: number) => Drawable;
  circle: (x: number, y: number, d: number) => Drawable;
  polygon: (points: [number, number][]) => Drawable;
  arc: (x: number, y: number, w: number, h: number, start: number, stop: number) => Drawable;
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
    polygon: (points) => g.polygon(points, { seed: ++seed }),
    arc: (x, y, w, h, start, stop) => g.arc(x, y, w, h, start, stop, false, { seed: ++seed }),
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

// oben links: Smartphone-Ansicht neben einer Karte mit Balkendiagramm, Textzeilen
const cornerTL = () =>
  svgDoc(460, 420, sketch(10, (g) => [
    // Smartphone: Gehäuse, Lautsprecher, Inhalt, Home-Button
    g.rectangle(60, 20, 130, 290),
    g.line(105, 38, 145, 38),
    g.rectangle(74, 56, 102, 60),
    ...textLines(g, 74, 138, [96, 76, 88], 16),
    g.rectangle(74, 200, 62, 18),
    g.circle(125, 288, 16),
    // Karte mit Balkendiagramm
    g.rectangle(215, 40, 225, 170),
    g.line(235, 62, 325, 62),
    g.rectangle(243, 130, 28, 60), g.rectangle(287, 90, 28, 100),
    g.rectangle(331, 115, 28, 75), g.rectangle(375, 70, 28, 120),
    g.line(231, 190, 424, 190),
    ...textLines(g, 215, 246, [220, 180, 200]),
    ...textLines(g, 60, 360, [370, 290]),
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

// ── Motive für die Köpfe der Unterseiten: je eine Skizze passend zum Thema ──
const MW = 420;
const MH = 340;

// Bild als Landschaft (Sonne + Berge) – das Kreuz-Motiv gibt es schon im Hero
const landscape = (g: Gen, x: number, y: number, w: number, h: number) => [
  g.rectangle(x, y, w, h),
  g.circle(x + w * 0.74, y + h * 0.3, h * 0.24),
  g.polygon([[x + 8, y + h - 8], [x + w * 0.36, y + h * 0.42], [x + w * 0.58, y + h * 0.72], [x + w * 0.72, y + h * 0.56], [x + w - 8, y + h - 8]]),
];

// Browserfenster mit Leiste und drei Punkten
const browser = (g: Gen) => [
  g.rectangle(10, 10, 400, 320),
  g.line(10, 44, 410, 44),
  g.circle(28, 27, 9), g.circle(44, 27, 9), g.circle(60, 27, 9),
];

const motif = (seed: number, draw: (g: Gen) => Drawable[]) => () => svgDoc(MW, MH, sketch(seed, draw));

const motifs = {
  // Projekte: Galerie
  gallery: motif(200, (g) => [
    ...browser(g),
    ...landscape(g, 30, 64, 170, 110), ...landscape(g, 220, 64, 170, 110),
    ...landscape(g, 30, 194, 170, 110),
    ...textLines(g, 220, 204, [150, 120, 140, 90], 22),
  ]),
  // Webdesign, Projekt-Detail, Relaunch: Seitenlayout
  browser: motif(220, (g) => [
    ...browser(g),
    ...textLines(g, 30, 80, [180, 130], 22),
    g.rectangle(30, 136, 90, 24),
    ...landscape(g, 230, 62, 160, 110),
    g.rectangle(30, 196, 105, 112), g.rectangle(157, 196, 105, 112), g.rectangle(284, 196, 106, 112),
    g.circle(82, 232, 30), g.circle(209, 232, 30), g.circle(337, 232, 30),
    ...textLines(g, 48, 272, [70, 50], 16), ...textLines(g, 175, 272, [70, 50], 16), ...textLines(g, 302, 272, [70, 50], 16),
  ]),
  // Webentwicklung: Editor mit Code und </>
  code: motif(240, (g) => [
    ...browser(g),
    g.line(30, 76, 150, 76), g.line(54, 98, 210, 98), g.line(78, 120, 190, 120), g.line(78, 142, 250, 142),
    g.line(54, 164, 140, 164), g.line(30, 186, 90, 186), g.line(30, 216, 170, 216), g.line(54, 238, 230, 238),
    g.line(54, 260, 160, 260), g.line(30, 282, 70, 282),
    g.line(300, 236, 276, 262), g.line(276, 262, 300, 288),
    g.line(318, 292, 336, 232),
    g.line(354, 236, 378, 262), g.line(378, 262, 354, 288),
  ]),
  // App-Entwicklung: zwei Smartphones
  phones: motif(260, (g) => [
    g.rectangle(60, 10, 150, 310), g.line(115, 28, 155, 28),
    ...landscape(g, 76, 46, 118, 80),
    ...textLines(g, 76, 150, [110, 86, 100], 18),
    g.rectangle(76, 220, 70, 22), g.circle(135, 296, 18),
    g.rectangle(240, 50, 130, 270), g.line(285, 66, 325, 66),
    g.rectangle(258, 190, 20, 50), g.rectangle(288, 160, 20, 80), g.rectangle(318, 175, 20, 65),
    g.line(252, 240, 356, 240),
    ...textLines(g, 258, 96, [96, 70], 18), g.circle(305, 296, 18),
  ]),
  // Hosting: Server-Rack
  server: motif(280, (g) => [
    ...[30, 115, 200].flatMap((y) => [
      g.rectangle(60, y, 300, 70),
      g.circle(92, y + 35, 14), g.circle(118, y + 35, 14),
      g.line(200, y + 28, 330, y + 28), g.line(200, y + 44, 300, y + 44),
    ]),
    g.line(210, 270, 210, 312), g.line(130, 312, 290, 312),
  ]),
  // SEO-Check: Lupe über einem Diagramm
  seo: motif(300, (g) => [
    g.circle(150, 140, 190),
    g.line(218, 208, 300, 290), g.line(228, 200, 310, 282), g.line(300, 290, 310, 282),
    g.rectangle(98, 150, 22, 40), g.rectangle(130, 125, 22, 65), g.rectangle(162, 100, 22, 90),
    g.line(90, 190, 210, 190),
    g.line(300, 120, 335, 90), g.line(335, 90, 360, 106), g.line(360, 106, 405, 50),
    g.line(390, 50, 405, 50), g.line(405, 50, 405, 65),
  ]),
  // Kontakt, Business-E-Mail: Brief mit Sprechblase
  mail: motif(320, (g) => [
    g.rectangle(30, 130, 290, 190),
    g.line(30, 130, 175, 235), g.line(175, 235, 320, 130),
    g.line(30, 320, 140, 220), g.line(320, 320, 210, 220),
    g.rectangle(230, 16, 170, 90),
    g.line(262, 106, 252, 138), g.line(252, 138, 292, 106),
    ...textLines(g, 252, 46, [124, 90], 22),
  ]),
  // Über mich: Laptop und Kaffeetasse
  desk: motif(340, (g) => [
    g.rectangle(50, 30, 260, 180),
    g.rectangle(66, 46, 228, 148),
    ...textLines(g, 86, 74, [150, 120, 170], 20),
    g.rectangle(86, 142, 70, 22),
    g.polygon([[30, 214], [330, 214], [352, 246], [8, 246]]),
    g.line(150, 230, 210, 230),
    g.rectangle(352, 186, 46, 56),
    g.arc(398, 214, 30, 32, -Math.PI / 2, Math.PI / 2),
    g.line(366, 176, 372, 156), g.line(384, 176, 390, 152),
    ...textLines(g, 30, 290, [300, 220], 20),
  ]),
  // Impressum, Datenschutz, 404: Dokument mit Schloss
  doc: motif(360, (g) => [
    g.polygon([[60, 14], [240, 14], [290, 64], [290, 326], [60, 326]]),
    g.line(240, 14, 240, 64), g.line(240, 64, 290, 64),
    ...textLines(g, 84, 60, [130], 22),
    ...textLines(g, 84, 110, [180, 160, 175, 120, 170, 150, 90], 26),
    g.arc(352, 214, 52, 64, Math.PI, Math.PI * 2),
    g.rectangle(318, 212, 68, 58),
    g.circle(352, 236, 12), g.line(352, 242, 352, 256),
  ]),
  // Leistungen: Karten mit Icons
  cards: motif(380, (g) => [
    ...[[20, 20], [220, 20], [20, 178], [220, 178]].flatMap(([x, y]) => [
      g.rectangle(x, y, 180, 140),
      g.circle(x + 34, y + 34, 36),
      ...textLines(g, x + 18, y + 78, [120, 140, 90], 18),
    ]),
  ]),
};

export type MotifName = keyof typeof motifs;

export const sketches = {
  'hero-logo': logo,
  'corner-tl': cornerTL,
  'corner-tr': cornerTR,
  'corner-bl': cornerBL,
  'corner-br': cornerBR,
  ...Object.fromEntries(Object.entries(motifs).map(([k, v]) => [`motif-${k}`, v])) as Record<`motif-${MotifName}`, () => string>,
} as const;

export type SketchName = keyof typeof sketches;

// ── Gekritzelte Rahmen für Buttons, Karten und Icon-Kreise: werden per
// preserveAspectRatio="none" auf die Elementgröße gestreckt, die Strichstärke bleibt
// dank non-scaling-stroke gleich. Die viewBox hat grob das Seitenverhältnis des
// Elements, damit die Striche beim Strecken nicht verzerren ──
type FrameGen = ReturnType<typeof rough.generator>;
type FrameOptions = Parameters<FrameGen['rectangle']>[4];

export const frameShapes = {
  button: { w: 200, h: 52, draw: (g: FrameGen, o?: FrameOptions) => g.rectangle(6, 5, 188, 42, o) },
  card: { w: 300, h: 480, draw: (g: FrameGen, o?: FrameOptions) => g.rectangle(6, 6, 288, 468, o) },
  wide: { w: 1000, h: 170, draw: (g: FrameGen, o?: FrameOptions) => g.rectangle(6, 6, 988, 158, o) },
  circle: { w: 80, h: 80, draw: (g: FrameGen, o?: FrameOptions) => g.circle(40, 40, 70, o) },
} as const;

export type FrameShape = keyof typeof frameShapes;

const roundPath = (d: string) => d.replace(/-?\d+\.\d+/g, (n) => (+n).toFixed(1));

/**
 * `filled`: die Fläche wird mitgezeichnet – mit Marker ausgemalt (unregelmäßige Kanten)
 * und dunkler schraffiert – statt eines CSS-Rechtecks mit Strichen darüber.
 * Klassen: .f = Fläche, .h = Schraffur, ohne Klasse = Umriss (Farben in style.css)
 */
export function sketchFrame(seed: number, shape: FrameShape = 'button', filled = false) {
  const g = rough.generator({
    options: { roughness: 1.5, bowing: 2.2, maxRandomnessOffset: 2.5, seed },
  });
  const draw = frameShapes[shape].draw;
  const layers: [string, ReturnType<typeof draw>][] = [];
  if (filled) {
    layers.push(['f', draw(g, { stroke: 'none', fill: '#000', fillStyle: 'solid', seed: seed + 3 })]);
    layers.push(['h', draw(g, { stroke: 'none', fill: '#000', fillStyle: 'hachure', hachureGap: 4.5, hachureAngle: -41, fillWeight: 1, seed: seed + 5 })]);
  }
  layers.push(['', draw(g)]);
  return layers
    .flatMap(([cls, drawable]) => g.toPaths(drawable).map((p) => `<path${cls ? ` class="${cls}"` : ''} d="${roundPath(p.d)}"/>`))
    .join('');
}
