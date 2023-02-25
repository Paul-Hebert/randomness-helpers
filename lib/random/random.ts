import { precision as defaultPrecision } from "../config/precision";
import { randomFunction } from "../config/random-function";
import { roundToPrecision } from "../helpers/round-to-precision";

export const random = (min = 0, max = 100, precision = defaultPrecision) =>
  roundToPrecision(randomFunction() * (max - min) + min, precision);
