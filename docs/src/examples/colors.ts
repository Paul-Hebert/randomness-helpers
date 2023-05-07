import type { ExampleData } from "./example-data";
import {
  randomHsl,
  randomHue,
  randomSaturation,
  randomInt,
} from "../../../dist/index";

export const colors: ExampleData = {
  title: "Colors",
  slug: "colors",
  imports: ["randomHue", "randomSaturation", "randomInt"],
  callback: () => {
    const hue = randomHue();
    const saturation = randomSaturation();

    let markup = "";

    for (let i = 0; i < 5; i++) {
      const color = randomHsl({
        h: hue,
        s: saturation + randomInt(-5, 5),
        l: (i + 1) * 15 + randomInt(-5, 5),
      });

      markup += `
        <rect
          x="${i * 20}" 
          y="0"
          width="20"
          height="100"
          fill="${color}"
        ></rect>
      `;
    }

    return `
      <svg viewBox="0 0 100 100" width="300" height="300">
        ${markup}
      </svg>
    `;
  },
};
