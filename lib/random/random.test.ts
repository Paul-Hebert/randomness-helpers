import { expect, test } from "vitest";
import { random } from "./random";

test("should generate a number between 0 and 100 by default", () => {
  const randomVal = random();
  expect(randomVal).toBeLessThanOrEqual(100);
  expect(randomVal).toBeGreaterThanOrEqual(0);
});

test("should accept min and max", () => {
  const randomVal = random(200, 300);
  expect(randomVal).toBeLessThanOrEqual(300);
  expect(randomVal).toBeGreaterThanOrEqual(200);
});
