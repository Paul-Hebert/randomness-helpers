import { randomInt } from "../number/int";

export const randomItemInArray = (array: any[]) =>
  array[randomInt(0, array.length - 1)];
