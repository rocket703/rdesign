export type CutVariant = 'slash' | 'saw' | 'shard' | 'ledge' | 'cradle' | 'drop';

const W = 1440;
const H = 200;

/**
 * Lando-style tab: compact flat plateau with deep, soft shoulders.
 * CSS controls the rendered height per breakpoint.
 */
function cradleTopEdge(yOffset = 0): string {
  const y = (n: number) => n + yOffset;
  const yBase = 104;
  const yTop = 4;
  const xShoulderL = 450;
  const xFlatL = 590;
  const xFlatR = 850;
  const xShoulderR = 990;

  return [
    `M 0 ${y(yBase)}`,
    `H ${xShoulderL}`,
    `C ${xShoulderL + 62} ${y(yBase)}, ${xFlatL - 48} ${y(yTop)}, ${xFlatL} ${y(yTop)}`,
    `H ${xFlatR}`,
    `C ${xFlatR + 48} ${y(yTop)}, ${xShoulderR - 62} ${y(yBase)}, ${xShoulderR} ${y(yBase)}`,
    `H ${W}`,
  ].join(' ');
}

/** Candy section dropping into the clean section below. */
function dropBottomEdge(yOffset = 0): string {
  const y = (n: number) => n + yOffset;
  return [
    `M 0 ${y(22)}`,
    `H 220`,
    `C 286 ${y(22)}, 312 ${y(142)}, 410 ${y(142)}`,
    `H 1030`,
    `C 1128 ${y(142)}, 1154 ${y(22)}, 1220 ${y(22)}`,
    `H ${W}`,
  ].join(' ');
}

/** Build polygon points for the fill shape (closed along bottom). */
export function cutFillPoints(variant: CutVariant): string | null {
  if (variant === 'cradle' || variant === 'drop') return null;
  const top = topEdge(variant);
  return `0,${H} ${top} ${W},${H}`;
}

/** Closed SVG path — earth below the cradle edge. */
export function cutFillPath(variant: CutVariant): string | null {
  if (variant === 'cradle') {
    return `${cradleTopEdge()} L ${W} ${H} L 0 ${H} Z`;
  }
  if (variant === 'drop') {
    return [
      `M 0 0 H ${W} V 22 H 1220`,
      `C 1154 22, 1128 142, 1030 142`,
      `H 410`,
      `C 312 142, 286 22, 220 22`,
      `H 0 Z`,
    ].join(' ');
  }
  return null;
}

export function cutUsesCurve(variant: CutVariant): boolean {
  return variant === 'cradle' || variant === 'drop';
}

/** Open polyline along the jagged top edge (for accent strokes). */
export function cutTopEdge(variant: CutVariant, yOffset = 0): string {
  return topEdge(variant, yOffset);
}

function topEdge(variant: CutVariant, yOffset = 0): string {
  const pts: Array<[number, number]> = [];

  if (variant === 'saw') {
    const teeth = 20;
    const amp = 36;
    const base = 52 + yOffset;
    const step = W / teeth;
    pts.push([0, base]);
    for (let i = 1; i <= teeth; i++) {
      const x = i * step;
      const y = i % 2 === 0 ? base - amp : base;
      pts.push([x, y]);
    }
  }

  if (variant === 'slash') {
    const notches: Array<[number, number]> = [
      [0, 110],
      [120, 88],
      [240, 102],
      [380, 72],
      [520, 94],
      [660, 58],
      [800, 82],
      [940, 48],
      [1080, 74],
      [1220, 42],
      [1360, 68],
      [W, 38],
    ];
    for (const [x, y] of notches) pts.push([x, y + yOffset]);
  }

  if (variant === 'shard') {
    const shards: Array<[number, number]> = [
      [0, 78],
      [90, 28],
      [175, 92],
      [290, 18],
      [410, 86],
      [520, 34],
      [640, 96],
      [760, 22],
      [880, 88],
      [1000, 38],
      [1120, 94],
      [1240, 26],
      [1360, 72],
      [W, 44],
    ];
    for (const [x, y] of shards) pts.push([x, y + yOffset]);
  }

  if (variant === 'ledge') {
    const ledge: Array<[number, number]> = [
      [0, 42],
      [220, 42],
      [220, 82],
      [500, 82],
      [500, 54],
      [820, 54],
      [820, 94],
      [1140, 94],
      [1140, 48],
      [W, 48],
    ];
    for (const [x, y] of ledge) pts.push([x, y + yOffset]);
  }

  return pts.map(([x, y]) => `${x},${y}`).join(' ');
}

/** SVG path string for stroking the top edge. */
export function cutStrokePath(variant: CutVariant, yOffset = 0): string {
  if (variant === 'cradle') return cradleTopEdge(yOffset);
  if (variant === 'drop') return dropBottomEdge(yOffset);

  const pts = topEdge(variant, yOffset)
    .split(' ')
    .map((pair) => pair.split(',').map(Number) as [number, number]);
  if (!pts.length) return '';
  const [x0, y0] = pts[0];
  return `M ${x0} ${y0} ${pts
    .slice(1)
    .map(([x, y]) => `L ${x} ${y}`)
    .join(' ')}`;
}

export const CUT_VIEWBOX = `0 0 ${W} ${H}`;
