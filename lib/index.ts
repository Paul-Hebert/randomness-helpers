import { roundToPrecision } from "./round-to-precision/round-to-precision";
import randomSeed from "random-seed";

const { create } = randomSeed;

interface SeededOptions {
  precision: number;
}

const defaultOptions = { precision: 2 };

export function seeded(seed?: number, options?: SeededOptions) {
  const seededRandom = create(seed);

  // Construct options
  const { precision } = {
    ...defaultOptions,
    ...(options || {}),
  };

  const randomDecimal = () => seededRandom.floatBetween(0, 1);

  const newSeed = (min: number, max: number) =>
    roundToPrecision(randomDecimal() * (max - min) + min, precision);

  newSeed.decimal = () => roundToPrecision(randomDecimal(), precision);
  newSeed.percent = () => roundToPrecision(randomDecimal() * 100, precision);

  newSeed.hue = () =>
    roundToPrecision(seededRandom.floatBetween(0, 360), precision);
  newSeed.saturation = newSeed.percent;
  newSeed.lightness = newSeed.percent;
  newSeed.alpha = newSeed.percent;

  newSeed.hsl = () =>
    `hsl(${newSeed.hue()}, ${newSeed.saturation()}%, ${newSeed.lightness()}%)`;

  return newSeed;
}
