import { expect, test } from "vitest";
import { randomDecimal } from "./decimal";
import { randomPercent } from "./percent";
import { randomInt } from "./int";
import { roundToPrecision } from "../../helpers/round-to-precision";

test("decimals are between 0 and 1", () => {
  const randomVal = randomDecimal();
  expect(randomVal).toBeLessThanOrEqual(1);
  expect(randomVal).toBeGreaterThanOrEqual(0);
});

test("decimals accept a min and max", () => {
  const randomVal = randomDecimal(0.5, 0.75);
  expect(randomVal).toBeLessThanOrEqual(0.75);
  expect(randomVal).toBeGreaterThanOrEqual(0.5);
});

test("decimals have two points of precision by default", () => {
  const randomVal = randomDecimal();

  expect(randomVal).toEqual(roundToPrecision(randomVal, 2));
});

test("percents are between 0 and 100", () => {
  const randomVal = randomPercent();
  expect(randomVal).toBeLessThanOrEqual(100);
  expect(randomVal).toBeGreaterThanOrEqual(0);
});

test("percents accept a min and max", () => {
  const randomVal = randomPercent(5, 75);
  expect(randomVal).toBeLessThanOrEqual(75);
  expect(randomVal).toBeGreaterThanOrEqual(5);
});

test("percents have two points of precision by default", () => {
  const randomVal = randomPercent();

  expect(randomVal).toEqual(roundToPrecision(randomVal, 2));
});

test("ints are between 0 and 100 by default", () => {
  const randomVal = randomInt();
  expect(randomVal).toBeLessThanOrEqual(100);
  expect(randomVal).toBeGreaterThanOrEqual(0);
});

test("ints accept a min and max", () => {
  const randomVal = randomInt(5, 75);
  expect(randomVal).toBeLessThanOrEqual(75);
  expect(randomVal).toBeGreaterThanOrEqual(5);
});

test("ints have 0 points of precision by default", () => {
  const randomVal = randomInt();

  expect(randomVal.toString().includes(".")).toBe(false);
});
