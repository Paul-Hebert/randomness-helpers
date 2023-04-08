<script lang="ts">
  import Example from '../../components/Example.svelte'
  import Highlight from 'svelte-highlight';
  import {
    random,
    randomDecimal,
    randomInt,
    randomPercent,
    randomChance,
    randomDegree,
    randomItemInArray,
    randomHsl,
    randomHue,
    randomLightness,
    randomSaturation,
    randomAlpha,
    setRandomPrecision,
    setSeed,
  } from '../../../../dist/index';
  import { plaintext } from 'svelte-highlight/languages';

  // Setting an initial seed ensures values are consistent between static rendering
  // and initial hydration
  setSeed(1);

  const colorDisplayFunction = (value: string) => `
    <span style="background-color: ${value}; width: 2em; height: 2em; border-radius: 50%;"></span>
    <span style="line-height: 1;">${value}</span>
  `;
</script>

<main>
  <h1>Examples</h1>

  <div class="example-group">
    <Example
      imports={['random', 'randomHsl', 'randomDegree']}
      callback={() => {
        const starSize = random(5, 10);
        const star = `<circle cx="50" cy="50" r="${starSize}" fill="${randomHsl(
          { h: [0, 100], s: [80, 100], l: [50, 80] }
        )}" />`;
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
      }}
    />
  </div>
</main>