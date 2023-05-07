import type { ExampleData } from "./example-data";
import {
  randomHsl,
  randomHue,
  randomSaturation,
  randomInt,
  random,
} from "../../../dist/index";

export const snowFlakes: ExampleData = {
  title: "Snow Flakes",
  slug: "snow-flakes",
  imports: ["random", "randomHue", "randomInt"],
  callback: () => {
    const backgroundFill = randomHsl({
      h: [190, 210],
      s: [30, 60],
      l: [50, 80],
    });
    const background = `<rect x="0" y="0" width="100" height="100" fill="${backgroundFill}"/>`;

    const strokeWidth = random(1, 2);

    const trunkLength = randomInt(25, 45);
    const trunk = `<line  
        x1="50" x2="50" y1="50" y2="${50 - trunkLength}""
      />`;

    let branches = "";

    for (
      let i = random(3, 5 * strokeWidth);
      i < trunkLength;
      i += random(2 * strokeWidth, 10 * strokeWidth)
    ) {
      const distance = random(5, Math.min(trunkLength - i, 10));
      branches += `
        <line 
          x1="50" x2="${50 - distance}" y1="${50 - i}" y2="${50 - i - distance}"
        />
        <line 
          x1="50" x2="${50 + distance}" y1="${50 - i}" y2="${50 - i - distance}"
        />
      `;
    }

    const tree = trunk + branches;

    const trunkCount = randomInt(5, 8);
    let flake = "";

    for (let i = 0; i < trunkCount; i++) {
      flake += `
        <g style="
          rotate: ${(360 / trunkCount) * i}deg; 
          transform-origin: center;
        "
        stroke="#fff"
        stroke-width="${strokeWidth}"
        stroke-linecap="round">
          ${tree}
        </g>
      `;
    }

    return `
      <svg viewBox="0 0 100 100" width="300" height="300">
        ${background}
        ${flake}
      </svg>
    `;
  },
};
