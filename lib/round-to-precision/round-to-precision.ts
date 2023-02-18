export function roundToPrecision(value, precision) {
  let rounder = 1;

  for (let i = 0; i < precision; i++) {
    rounder *= 10;
  }

  return Math.round(value * rounder) / rounder;
}
