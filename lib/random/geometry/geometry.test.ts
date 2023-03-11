import { test, expect } from "vitest";
import { roundToPrecision } from "../../helpers/round-to-precision";
import { randomDegree } from "./degree";

test("degrees are between 0 and 360", () => {
  const randomVal = randomDegree();

  expect(randomVal).toBeLessThanOrEqual(360);
  expect(randomVal).toBeGreaterThanOrEqual(0);
});

test("degrees accept a min and max", () => {
  const randomVal = randomDegree(100, 200);

  expect(randomVal).toBeLessThanOrEqual(200);
  expect(randomVal).toBeGreaterThanOrEqual(100);
});

test("degrees have two points of precision by default", () => {
  const randomVal = randomDegree();

  expect(randomVal).toEqual(roundToPrecision(randomVal, 2));
});
