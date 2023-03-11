import { test, expect } from "vitest";
import { randomItemInArray } from "./item-in-array";

test("random item is in array", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(array.includes(randomItemInArray(array))).toBe(true);
});
