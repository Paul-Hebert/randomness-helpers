// @ts-nocheck
import type { ExampleData } from "./example-data";
import { random, randomInt, randomDegree, randomHsl } from "randomness-helpers";

export const colorWheel: ExampleData = {
  title: "Color Wheel",
  slug: "color-wheel",
  imports: ["random", "randomHsl", "randomDegree"],
  callback: () => {
    const gridSize = 100;

    const circle = ({ x = 50, y = 50, radius = 5, fill = "#fff" }) => `
      <circle cx="${x}" cy="${y}" r="${radius}" fill="${fill}" />
    `;

    const circles = [];

    for (let i = 0; i < 200; i++) {
      const angle = randomDegree();
      const distance = random(1, 70);
      const angleInRadians = (angle * Math.PI) / 180;

      circles.push(
        circle({
          x: 50 + Math.cos(angleInRadians) * distance,
          y: 50 + Math.sin(angleInRadians) * distance,
          radius: 5 - distance / 15,
          fill: randomHsl({ h: angle, l: 25 + distance, s: [30, 70] }),
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
