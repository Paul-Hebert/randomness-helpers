import { numberOrRangeToNumber } from "../../../helpers/number-or-range-to-number";

export interface HslOptions {
  h?: [number, number] | number;
  s?: [number, number] | number;
  l?: [number, number] | number;
  a?: [number, number] | number | null;
}

const defaultHslOptions: HslOptions = {
  h: [0, 360],
  s: [0, 100],
  l: [0, 100],
  a: null,
};

const defaultHslaOptions: HslOptions = {
  ...defaultHslOptions,
  a: [0, 100],
};

export const randomHsl = (settings?: HslOptions) =>
  buildHslFromOptions({
    ...defaultHslOptions,
    ...(settings || {}),
  });

export const randomHsla = (settings?: HslOptions) =>
  buildHslFromOptions({
    ...defaultHslaOptions,
    ...(settings || {}),
  });

const buildHslFromOptions = (settings?: HslOptions) => {
  const { h, s, l, a } = settings;

  const hue = numberOrRangeToNumber(h);
  const sat = numberOrRangeToNumber(s);
  const light = numberOrRangeToNumber(l);
  const alpha = a ? numberOrRangeToNumber(a) : null;

  return `hsl${alpha ? `a` : ""}(${hue}, ${sat}%, ${light}%${
    alpha ? `, ${alpha}%` : ""
  })`;
};
