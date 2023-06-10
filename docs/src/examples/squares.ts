import type { ExampleData } from "./example-data";
import { randomHsl, randomInt } from "../../../lib/index";

export const squares: ExampleData = {
  title: "Squares",
  slug: "squares",
  imports: ["randomHsl", "randomInt"],
  callback: () => {
    let markup = "";

    const squareSize = randomInt(8, 10);
    const columnCount = 100 / squareSize;

    const color = randomHsl({ s: 30, l: 30 });
    const strokeWidth = 0.25;

    for (let xCount = 0; xCount < columnCount; xCount++) {
      for (let yCount = 0; yCount < columnCount; yCount++) {
        const x = xCount * squareSize;
        const y = yCount * squareSize;

        const cushion = (squareSize * 1) / 10;
        const innerPointX = randomInt(cushion, squareSize - cushion);
        const innerPointY = randomInt(cushion, squareSize - cushion);
        let section = "";

        const endSize = strokeWidth;
        const sizeDifference = squareSize - endSize;

        for (let i = 0; i < columnCount; i++) {
          const shrinkage = (i / columnCount) * sizeDifference;
          const currentSize = squareSize - shrinkage;

          section += `
            <rect 
              x="${x + (innerPointX / columnCount) * i}"
              y="${y + (innerPointY / columnCount) * i}"
              width="${currentSize}"
              height="${currentSize}"
              stroke="${color}"
              stroke-width="${strokeWidth}"
              fill="none"
            />
          `;
        }

        markup += `<g>${section}</g>`;
      }
    }

    return `
      <svg viewBox="0 0 100 100" width="300" height="300">
        ${markup}
      </svg>
    `;
  },
};
