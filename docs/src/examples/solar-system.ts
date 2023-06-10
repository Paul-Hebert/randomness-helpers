import type { ExampleData } from "./example-data";
import { random, randomDegree, randomHsl, setSeed } from "randomness-helpers";

export const solarSystem: ExampleData = {
  title: "Solar Systems",
  slug: "solar-systems",
  imports: ["random", "randomHsl", "randomDegree"],
  callback: () => {
    const starSize = random(5, 10);
    const star = `<circle cx="50" cy="50" r="${starSize}" fill="${randomHsl({
      h: [0, 100],
      s: [80, 100],
      l: [50, 80],
    })}" />`;
    const planets = [];

    for (
      let distance = starSize + 5;
      distance < 40;
      distance += random(5, 10)
    ) {
      const orbit = `<circle cx="50" cy="50" fill="none" stroke="#ccc" r="${distance}"/>`;
      const planet = `<circle 
        cx="50" 
        cy="${50 + distance}" 
        fill="${randomHsl({ s: [80, 100], l: [60, 90] })}"  
        r="${random(2, 4)}"
      />`;
      planets.push(`
        <g style="transform-origin: center; rotate: ${randomDegree()}deg;">
          ${orbit}
          ${planet}
        </g>
      `);
    }
    return `
      <svg viewBox="0 0 100 100" width="300" height="300" style="background: #000">
        ${star}
        ${planets.join("\n")}
      </svg>
    `;
  },
};
