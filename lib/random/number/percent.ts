import { precision as defaultPrecision } from "../../config/precision";
import { random } from "../random";

export const randomPercent = (
  min = 0,
  max = 100,
  precision = defaultPrecision
) => random(min, max, precision);
