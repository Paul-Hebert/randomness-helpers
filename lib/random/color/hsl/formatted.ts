import { numberOrRangeToNumber } from "../../../helpers/number-or-range-to-number";

export interface HslOptions {
  h?: number[] | number;
  s?: number[] | number;
  l?: number[] | number;
  a?: number[] | number | null;
}

const defaultHslOptions: HslOptions = {
  h: [0, 360],
  s: [0, 100],
  l: [0, 100],
  a: null,
};

export const randomHsl = (settings?: HslOptions) => {
  const { h, s, l, a } = {
    ...defaultHslOptions,
    ...(settings || {}),
  };

  const hue = numberOrRangeToNumber(h);
  const sat = numberOrRangeToNumber(s);
  const light = numberOrRangeToNumber(l);
  const alpha = a ? numberOrRangeToNumber(a) : null;

  return `hsl(${hue}, ${sat}%, ${light}%${alpha ? ` ${alpha}%` : ""})`;
};
