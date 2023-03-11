import { toAttributeString } from "astro/dist/runtime/server/render/util";
import { expect, test } from "vitest";
import { randomHsl, randomHsla } from "./formatted";

// @see https://stackoverflow.com/a/19290026/7816145
const hslColorRegex = /hsl\(([\d.]+), ([\d.]+)%, ([\d.]+)%\)/;
const hslaColorRegex = /hsla\(([\d.]+), ([\d.]+)%, ([\d.]+)%, ([\d.]+)%\)/;

test("hsl colors are formatted correctly", () => {
  const hsl = randomHsl();

  const matches = hsl.match(hslColorRegex);

  expect(matches.length).toBe(4);

  const h = parseFloat(matches[1]);
  expect(h).toBeLessThanOrEqual(360);
  expect(h).toBeGreaterThanOrEqual(0);

  const s = parseFloat(matches[2]);
  expect(s).toBeLessThanOrEqual(100);
  expect(s).toBeGreaterThanOrEqual(0);

  const l = parseFloat(matches[3]);
  expect(l).toBeLessThanOrEqual(100);
  expect(l).toBeGreaterThanOrEqual(0);
});

test("passing an alpha option to hsl returns hsla", () => {
  const hsl = randomHsl({ a: 50 });

  const matches = hsl.match(hslaColorRegex);

  expect(matches.length).toBe(5);

  const a = parseFloat(matches[4]);
  expect(a).toBe(50);
});

test("passing various values to jsl works", () => {
  const hsl = randomHsl({ h: 50, s: [10, 30], l: [80, 90] });

  const matches = hsl.match(hslColorRegex);

  expect(matches.length).toBe(4);

  const h = parseFloat(matches[1]);
  expect(h).toBe(50);

  const s = parseFloat(matches[2]);
  expect(s).toBeLessThanOrEqual(30);
  expect(s).toBeGreaterThanOrEqual(10);

  const l = parseFloat(matches[3]);
  expect(l).toBeLessThanOrEqual(90);
  expect(l).toBeGreaterThanOrEqual(80);
});

test("hsla colors are formatted correctly", () => {
  const hsla = randomHsla();

  const matches = hsla.match(hslaColorRegex);

  expect(matches.length).toBe(5);

  const h = parseFloat(matches[1]);
  expect(h).toBeLessThanOrEqual(360);
  expect(h).toBeGreaterThanOrEqual(0);

  const s = parseFloat(matches[2]);
  expect(s).toBeLessThanOrEqual(100);
  expect(s).toBeGreaterThanOrEqual(0);

  const l = parseFloat(matches[3]);
  expect(l).toBeLessThanOrEqual(100);
  expect(l).toBeGreaterThanOrEqual(0);

  const a = parseFloat(matches[4]);
  expect(a).toBeLessThanOrEqual(100);
  expect(a).toBeGreaterThanOrEqual(0);
});
