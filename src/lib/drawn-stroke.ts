import type { CutVariant } from './zone-cut-paths';

const W = 1440;

/** Imperfect hand-drawn wobble along a polyline (deterministic). */
function wobbleY(x: number, t: number, amp: number, phase = 0): number {
  return (
    Math.sin(t * Math.PI * 5.4 + phase) * amp * 0.5 +
    Math.cos(t * Math.PI * 9.3 + phase * 1.7) * amp * 0.32 +
    Math.sin(t * Math.PI * 14.8 + phase * 2.3) * amp * 0.18
  );
}

export type SketchPoint = [number, number];

export function sketchHorizontalPoints(
  width = W,
  baseY = 44,
  segments = 32,
  amp = 7,
): SketchPoint[] {
  const pts: SketchPoint[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    pts.push([+(t * width).toFixed(2), +(baseY + wobbleY(t * width, t, amp)).toFixed(2)]);
  }
  return pts;
}

function parseEdgePairs(edge: string): SketchPoint[] {
  return edge.split(' ').map((pair) => {
    const [x, y] = pair.split(',').map(Number);
    return [x, y] as SketchPoint;
  });
}

export function sketchEdgeFromCut(variant: CutVariant, yOffset = 0): SketchPoint[] {
  const raw = cutEdgeRaw(variant);
  return raw.map(([x, y], i) => {
    const t = i / Math.max(raw.length - 1, 1);
    const amp = variant === 'saw' ? 4 : 5.5;
    return [x, +(y + yOffset + wobbleY(x, t, amp, yOffset * 0.02)).toFixed(2)];
  });
}

function cutEdgeRaw(variant: CutVariant): SketchPoint[] {
  if (variant === 'saw') {
    const teeth = 20;
    const amp = 36;
    const base = 52;
    const step = W / teeth;
    const pts: SketchPoint[] = [[0, base]];
    for (let i = 1; i <= teeth; i++) {
      const x = i * step;
      const y = i % 2 === 0 ? base - amp : base;
      pts.push([x, y]);
    }
    return pts;
  }
  if (variant === 'slash') {
    return parseEdgePairs(
      '0,110 120,88 240,102 380,72 520,94 660,58 800,82 940,48 1080,74 1220,42 1360,68 1440,38',
    );
  }
  return parseEdgePairs(
    '0,78 90,28 175,92 290,18 410,86 520,34 640,96 760,22 880,88 1000,38 1120,94 1240,26 1360,72 1440,44',
  );
}

export function sketchFromHeroEdge(edge: SketchPoint[], yOffset = 0): SketchPoint[] {
  const VB_H = 620;
  return edge.map(([x, y], i) => {
    const t = i / Math.max(edge.length - 1, 1);
    const px = (x / 100) * W;
    const py = (y / 100) * VB_H;
    return [+px.toFixed(2), +(py + yOffset + wobbleY(px, t, 5)).toFixed(2)];
  });
}

export function heroSeamBaseEdge(): SketchPoint[] {
  const TEETH = 18;
  const pts: SketchPoint[] = [];
  for (let i = 0; i <= TEETH; i++) {
    const t = i / TEETH;
    const x = 2 + t * 96;
    const y = 100 - t * 100;
    const jag = (i % 2 === 0 ? 1 : -1) * (3.2 + (1 - Math.abs(t - 0.5) * 2) * 1.2);
    pts.push([x, y + jag * 0.65]);
  }
  return pts;
}

export function pointsToDrawnPath(pts: SketchPoint[], dy = 0): string {
  if (!pts.length) return '';
  const [x0, y0] = pts[0];
  return `M ${x0} ${y0 + dy} ${pts
    .slice(1)
    .map(([x, y]) => `L ${x} ${y + dy}`)
    .join(' ')}`;
}

export function pointsToFillPolygon(pts: SketchPoint[], width: number, height: number): string {
  const top = pts.map(([x, y]) => `${x},${y}`).join(' ');
  return `${top} ${width},${height} 0,${height}`;
}

export type DrawnStrokeLayer = {
  dy: number;
  color: string;
  width: number;
  opacity?: number;
};

export const DEFAULT_DRAWN_STROKES: DrawnStrokeLayer[] = [
  { dy: 11, color: '#0f172a', width: 8, opacity: 0.85 },
  { dy: 0, color: '#d2ff00', width: 5 },
  { dy: -7, color: '#f8fafc', width: 2.5, opacity: 0.9 },
];

export function strokeLayersFromColors(
  back: string,
  mid: string,
  front: string,
): DrawnStrokeLayer[] {
  return [
    { dy: 11, color: back, width: 8, opacity: 0.9 },
    { dy: 0, color: mid, width: 5 },
    { dy: -7, color: front, width: 2.5, opacity: 0.95 },
  ];
}

export const HERO_FLOOR_VIEWBOX = `0 0 ${W} 72`;
