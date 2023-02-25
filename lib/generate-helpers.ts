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

export interface RandomHelpers {
  (min?: number, max?: number): number;
  int: (min: number, max: number) => number;
  decimal: (min?: number, max?: number) => number;
  percent: (min?: number, max?: number) => number;
  degree: (min?: number, max?: number) => number;
  hue: (min?: number, max?: number) => number;
  saturation: (min?: number, max?: number) => number;
  lightness: (min?: number, max?: number) => number;
  alpha: (min?: number, max?: number) => number;
  hsl: (hslOptions?: HslOptions) => string;
  chance: (likelihood?: number) => boolean;
  itemInArray: (array?: unknown[]) => unknown;
}

export function generateHelpers(randomFunction = Math.random) {
  const defaultPrecision = 2;

  const randomInRange = (min = 0, max = 1, precision = defaultPrecision) =>
    roundToPrecision(randomFunction() * (max - min) + min, precision);

  // Math
  const int = (min: number, max: number) => randomInRange(min, max, 0);
  const decimal = () => roundToPrecision(randomFunction(), defaultPrecision);
  const percent = (min = 0, max = 100) =>
    roundToPrecision(randomInRange(min, max), defaultPrecision);

  // Geometry
  const degree = (min = 0, max = 360) =>
    roundToPrecision(randomInRange(min, max), defaultPrecision);
  // TODO: Points

  // Colors
  const hue = degree;
  const saturation = percent;
  const lightness = percent;
  const alpha = percent;

  const numberOrRangeToNumber = (val: number[] | number) =>
    isNaN(val as number) ? randomInRange(...(val as number[])) : val;

  const defaultHslOptions: HslOptions = {
    h: [0, 360],
    s: [0, 100],
    l: [0, 100],
    a: null,
  };

  const hsl = (settings?: HslOptions) => {
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
  const chance = (chance = 0.5) => randomInRange(0, 1) < chance;
  const itemInArray = (array: any[]) => array[int(0, array.length - 1)];

  const helpers: RandomHelpers = Object.assign(randomInRange, {
    int,
    decimal,
    percent,
    degree,
    hue,
    saturation,
    lightness,
    hsl,
    alpha,
    chance,
    itemInArray,
  });

  return helpers;
}
