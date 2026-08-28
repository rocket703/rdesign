const W = 1440;
const H = 128;

/** Steep racing slash — top edge of the fill (left high → right low). */
export function techSeamEdgePoints(): Array<[number, number]> {
  return [
    [-40, 78],
    [W + 40, 18],
  ];
}

export function techSeamFillPolygon(): string {
  return `0,${H} 0,78 ${W},18 ${W},${H}`;
}

export function techSeamLinePath(yOffset = 0): string {
  return `M -40 ${78 + yOffset} L ${W + 40} ${18 + yOffset}`;
}

/** Thin speed stripes parallel to the main slash. */
export function techSpeedLines(): string[] {
  const lines: string[] = [];
  const offsets = [-52, -36, 52, 68];
  for (const o of offsets) {
    lines.push(`M -60 ${78 + o} L ${W + 60} ${18 + o}`);
  }
  return lines;
}

export const TECH_SEAM_VIEWBOX = `0 0 ${W} ${H}`;
