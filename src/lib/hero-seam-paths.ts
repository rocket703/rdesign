/** Zigzag seam from bottom-left → top-right (hero split). Coords in %. */

const TEETH = 18;

export function heroSeamEdge(): Array<[number, number]> {
  const pts: Array<[number, number]> = [];
  for (let i = 0; i <= TEETH; i++) {
    const t = i / TEETH;
    const x = 2 + t * 96;
    const y = 100 - t * 100;
    const jag = (i % 2 === 0 ? 1 : -1) * (3.2 + (1 - Math.abs(t - 0.5) * 2) * 1.2);
    pts.push([+(x + jag * 0.65).toFixed(2), +(y + jag * 0.65).toFixed(2)]);
  }
  return pts;
}

function toPct(pts: Array<[number, number]>): string {
  return pts.map(([x, y]) => `${x}% ${y}%`).join(', ');
}

/** Light panel: right / upper side of the seam */
export function heroLightClip(): string {
  const edge = heroSeamEdge();
  return `polygon(${toPct(edge)}, 100% 0%, 100% 100%)`;
}

/** Dark panel: left / lower side of the seam */
export function heroDarkClip(): string {
  const edge = heroSeamEdge();
  return `polygon(0% 100%, 0% 0%, ${toPct([...edge].reverse())})`;
}

const VB_W = 1000;
const VB_H = 620;

export const HERO_SEAM_VIEWBOX = `0 0 ${VB_W} ${VB_H}`;

export function heroSeamStrokePath(yOffset = 0): string {
  const edge = heroSeamEdge();
  const scale = (x: number, y: number): [number, number] => [
    (x / 100) * VB_W,
    (y / 100) * VB_H + yOffset,
  ];
  const scaled = edge.map(([x, y]) => scale(x, y));
  const [x0, y0] = scaled[0];
  return `M ${x0} ${y0} ${scaled
    .slice(1)
    .map(([x, y]) => `L ${x} ${y}`)
    .join(' ')}`;
}
