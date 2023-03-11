import { precision as defaultPrecision } from "../../config/precision";
import { random } from "../random";

export const randomDegree = (
  min = 0,
  max = 360,
  precision = defaultPrecision
) => random(min, max, precision);
