// @ts-nocheck
import type { ExampleData } from "./example-data";
import { random, randomInt, randomDegree, randomHsl } from "randomness-helpers";

export const circles: ExampleData = {
  title: "Circles",
  slug: "circles",
  imports: ["random", "randomHsl", "randomDegree"],
  callback: () => {
    const gridSize = 100;

    const circle = ({ x = 50, y = 50, radius = 5, fill = "#fff" }) => `
      <circle cx="${x}" cy="${y}" r="${radius}" fill="${fill}" />
    `;

    const circles = [];

    for (let i = 0; i < randomInt(20, 100); i++) {
      circles.push(
        circle({
          x: random(0, gridSize),
          y: random(0, gridSize),
          radius: random(2, 5),
          fill: randomHsl(),
        })
      );
    }

    return `
      <svg viewBox="0 0 100 100" width="300" height="300" style="background: #000">
        ${circles.join("\n")}
      </svg>
    `;
  },
};
