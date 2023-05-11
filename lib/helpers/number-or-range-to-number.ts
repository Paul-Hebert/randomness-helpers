import { random } from "../random/random";

export const numberOrRangeToNumber = (val: [number, number] | number) =>
  isNaN(val as number) ? random(...(val as [number, number])) : val;
