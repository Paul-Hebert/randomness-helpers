import { expect, test } from "vitest";
import { numberOrRangeToNumber } from "./number-or-range-to-number";
import { roundToPrecision } from "./round-to-precision";

test("should round to precision correctly", () => {
  expect(roundToPrecision(3, 2)).toEqual(3);
  expect(roundToPrecision(3.1, 2)).toEqual(3.1);
  expect(roundToPrecision(3.11, 2)).toEqual(3.11);
  expect(roundToPrecision(3.111, 2)).toEqual(3.11);
  expect(roundToPrecision(3.115, 2)).toEqual(3.12);
  expect(roundToPrecision(3.115, 3)).toEqual(3.115);
  expect(roundToPrecision(3.1115, 3)).toEqual(3.112);
});

test("should distinguish between ranges and numbers", () => {
  expect(numberOrRangeToNumber(5)).toEqual(5);

  const randomInRange = numberOrRangeToNumber([20, 30]);

  expect(randomInRange).toBeLessThanOrEqual(30);
  expect(randomInRange).toBeGreaterThanOrEqual(20);
});
