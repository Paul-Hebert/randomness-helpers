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
  <h1>Getting Started</h1>

  <p>You can install the library from npm:</p>

  <Highlight language={plaintext} code="npm i randomness-helpers" />

  <h2>Number Helpers</h2>

  <p>
    The library has a number of helper methods for generating different types of
    numbers, colors, geometric values, and more. For example, here are a few
    common random number helpers:
  </p>

  <div class="example-group">
    <Example
      callback={() => random(5, 20)}
      imports={['random']}
    />
    <Example
      callback={() => randomInt(0, 100)}
      imports={['randomInt']}
    />

    <Example
      callback={() => randomDecimal()}
      imports={['randomDecimal']}
    />

    <Example
      callback={() => randomPercent()}
      imports={['randomPercent']}
    />
  </div>

  <!-- <h2>Seeded Randomness</h2>

  <p>
    By default, the helper methods rely on <code>Math.random</code>. If you
    would prefer to use seeded random values there is a separate export for
    that. These functions are slightly slower, but ensure that each time you run
    a series of random operations with the same seed, they'll return the same
    values.
  </p>

  <p>TODO: Explain why this is helpful. Explain it can be slower.</p>

  <p>
    You'll need to call the <code>seed</code> function with your chosen seed to initialize
    the random number generator. From there you can use it the same way as the non-seeded
    helpers.
  </p>

  <Code
    lang="js"
    code={`import { seed } from 'randomness-helpers';

  const random = seed(123);

  random(0, 100);`}
  /> -->

  <h2>Chance</h2>

  <p>There are a few helpers for common randomness operations.</p>

  <p>
    <code>chance</code> returns either true or false. By default, it has a 50% chance
    of being <code>true</code> but you can pass in an optional likelihood variable.
  </p>

  <div class="example-group">
    <Example
      imports={['randomChance']}
      callback={() => (randomChance() ? "heads" : "tails")}
    />
    <Example
      imports={['randomChance']}
      callback={() => (randomChance(0.75) ? "cloudy" : "meatballs")}
    />
  </div>

  <p>You can also easily get a random item from an array:</p>

  <Example
      imports={['randomItemInArray']}
    callback={() =>
      randomItemInArray(["The Good", "The Bad", "The Ugly"])}
  />

  <h2>Colors</h2>

  <p>There are also helpers to generate random HSL colors.</p>

  <p>
    You can generate a completely random color, or pass in an object with
    optional <code>h</code>, <code>s</code>, <code>l</code>, and <code>a</code> properties.
    (For hue, saturation, lightness, and alpha (transparency.))
  </p>
  <p>
    Each property should either be an exact value, or an array with
    <code>[min, max]</code>
    values.
  </p>

  <div class="example-group">
    <Example
      callback={() => randomHsl()}
      imports={['randomHsl']}
      displayFunction={colorDisplayFunction}
    />

    <Example
      callback={() => randomHsl({ h: [0, 60] })}
      imports={['randomHsl']}
      displayFunction={colorDisplayFunction}
    />

    <Example
      callback={() =>
        randomHsl({ s: [40, 60], l: 75 })}
      imports={['randomHsl']}
      displayFunction={colorDisplayFunction}
    />
  </div>

  <p>
    You can also generate individual <code>hue</code>, <code>saturation</code>,
    and <code>lightness</code> values:
  </p>

  <div class="example-group">
    <Example
      callback={() => randomHue()}
      imports={['randomHue']}
    />
    <Example
      callback={() => randomSaturation()}
      imports={['randomSaturation']}
    />
    <Example
      callback={() => randomLightness()}
      imports={['randomLightness']}
    />
    <Example
      callback={() => randomAlpha()}
      imports={['randomAlpha']}
    />
  </div>

  <h2>Geometry</h2>

  <div class="example-group">
    <Example
      imports={['randomDegree']}
      callback={() => randomDegree()}
      displayFunction={(value) => `
        <svg style="rotate: ${value}deg; overflow: visible;" viewBox="0 0 100 100" width="50" height="50">
          <circle fill="#fff6" stroke="#000" r="49" cx="50" cy="50" />
          <circle fill="#000" r="10" cx="50" cy="50" />
          <circle fill="#000" r="5" cx="50" cy="1" />
          <line fill="none" stroke="#000" x1="50" y1="50" x2="50" y2="1" />
        </svg>
        ${value}
      `}
    />
  </div>
</main>