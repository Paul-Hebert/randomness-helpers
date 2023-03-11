import { expect, test } from "vitest";
import { random } from "../random/random";
import { setRandomPrecision } from "./precision";
import { setRandomFunction } from "./random-function";
import { setSeed } from "./set-seed";

test("should not have more than two decimal points", () => {
  const randomVal = random();
  const secondHalf = randomVal.toString().split(".")[1];

  expect(secondHalf.length).toBeLessThanOrEqual(2);
});

test("should have more than two decimal points but less than five when configured", () => {
  setRandomPrecision(5);
  const randomVal = random();
  const secondHalf = randomVal.toString().split(".")[1];

  expect(secondHalf.length).toBeGreaterThan(2);
  expect(secondHalf.length).toBeLessThanOrEqual(5);
});

test("seeded random functions should generate identical results", () => {
  setSeed(1);
  const firstVal = random();
  setSeed(1);
  const secondVal = random();

  expect(firstVal).toEqual(secondVal);
});

test("overwriting the random function", () => {
  setRandomFunction(() => 30);

  expect(random(0, 1)).toEqual(30);
});
