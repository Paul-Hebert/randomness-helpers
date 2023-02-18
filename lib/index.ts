import Srand from "seeded-rand";
import { roundToPrecision } from "./round-to-precision/round-to-precision";

interface SeededOptions {
  precision: number;
}

const defaultOptions = { precision: 2 };

export function seeded(seed: string, options?: SeededOptions) {
  const seededRandom = new Srand(seed || new Date());

  // Construct options
  const { precision } = {
    ...defaultOptions,
    ...(options || {}),
  };

  const newSeed = (min: number, max: number) =>
    roundToPrecision(seededRandom.random() * (max - min) + min, precision);

  newSeed.decimal = () => roundToPrecision(seededRandom.random(), precision);
  newSeed.percent = () =>
    roundToPrecision(seededRandom.random() * 100, precision);

  newSeed.hue = () => roundToPrecision(newSeed(0, 360), precision);
  newSeed.saturation = newSeed.percent;
  newSeed.lightness = newSeed.percent;
  newSeed.alpha = newSeed.percent;

  newSeed.hsl = () =>
    `hsl(${newSeed.hue()}, ${newSeed.saturation()}%, ${newSeed.lightness()}%)`;

  return newSeed;
}
