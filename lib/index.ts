import { roundToPrecision } from "./round-to-precision/round-to-precision";
import randomSeed from "random-seed";

const { create } = randomSeed;

interface SeededOptions {
  precision: number;
}

interface HslOptions {
  h?: number[] | number;
  s?: number[] | number;
  l?: number[] | number;
  a?: number[] | number | null;
}

const defaultOptions = { precision: 2 };

export function seed(seed?: number, options?: SeededOptions) {
  const seededRandom = create(seed);

  // Construct options
  const { precision } = {
    ...defaultOptions,
    ...(options || {}),
  };

  const randomDecimal = seededRandom.random;

  const newSeed = (min?: number, max?: number) =>
    roundToPrecision(randomDecimal() * (max - min) + min, precision);

  // Math
  newSeed.int = seededRandom.intBetween;
  newSeed.decimal = () => roundToPrecision(randomDecimal(), precision);
  newSeed.percent = (min = 0, max = 100) =>
    roundToPrecision(seededRandom.floatBetween(min, max), precision);

  // Geometry
  newSeed.degree = (min = 0, max = 360) =>
    roundToPrecision(seededRandom.floatBetween(min, max), precision);
  // TODO: Points

  // Colors
  newSeed.hue = newSeed.degree;
  newSeed.saturation = newSeed.percent;
  newSeed.lightness = newSeed.percent;
  newSeed.alpha = newSeed.percent;

  const numberOrRangeToNumber = (val: number[] | number) =>
    isNaN(val as number) ? newSeed(...(val as number[])) : val;

  const defaultHslOptions: HslOptions = {
    h: [0, 360],
    s: [0, 100],
    l: [0, 100],
    a: null,
  };

  newSeed.hsl = (settings?: HslOptions) => {
    const { h, s, l, a } = {
      ...defaultHslOptions,
      ...(settings || {}),
    };

    const hue = numberOrRangeToNumber(h);
    const sat = numberOrRangeToNumber(s);
    const light = numberOrRangeToNumber(l);
    const alpha = a ? numberOrRangeToNumber(a) : null;

    return `hsl(${hue}, ${sat}%, ${light}% ${alpha ? `${alpha}%` : ""})`;
  };

  // Chance
  newSeed.chance = (chance = 0.5) => seededRandom.floatBetween(0, 1) < chance;
  newSeed.itemInArray = (array: any[]) =>
    array[newSeed.int(0, array.length - 1)];

  return newSeed;
}
