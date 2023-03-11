import { precision as defaultPrecision } from "../../config/precision";
import { random } from "../random";

export const randomDecimal = (min = 0, max = 1, precision = defaultPrecision) =>
  random(min, max, precision);
