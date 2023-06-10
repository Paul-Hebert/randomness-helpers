<script lang="ts">
  import {
    randomAlpha,
    randomHsl,
    randomHue,
    randomLightness,
    randomSaturation,
  } from "../../../../lib/index.ts";
  import DocsExample from "../DocsExample.svelte";

  const colorDisplayFunction = (value: string) => `
    <span style="background-color: ${value}; width: 2em; height: 2em; border-radius: 50%;"></span>
    <span style="line-height: 1;">${value}</span>
  `;
</script>

<p>There are also helpers to generate random HSL colors.</p>

<p>
  You can generate a completely random color, or pass in an object with optional <code
    >h</code
  >, <code>s</code>, <code>l</code>, and <code>a</code> properties. (For hue, saturation,
  lightness, and alpha (transparency.))
</p>
<p>
  Each property should either be an exact value, or an array with
  <code>[min, max]</code>
  values.
</p>

<div class="example-group">
  <DocsExample
    callback={() => randomHsl()}
    imports={["randomHsl"]}
    displayFunction={colorDisplayFunction}
  />

  <DocsExample
    callback={() => randomHsl({ h: [0, 60] })}
    imports={["randomHsl"]}
    displayFunction={colorDisplayFunction}
  />

  <DocsExample
    callback={() => randomHsl({ s: [40, 60], l: 75 })}
    imports={["randomHsl"]}
    displayFunction={colorDisplayFunction}
  />
</div>

<p>
  You can also generate individual <code>hue</code>, <code>saturation</code>,
  and <code>lightness</code> values:
</p>

<div class="example-group">
  <DocsExample callback={() => randomHue()} imports={["randomHue"]} />
  <DocsExample
    callback={() => randomSaturation()}
    imports={["randomSaturation"]}
  />
  <DocsExample
    callback={() => randomLightness()}
    imports={["randomLightness"]}
  />
  <DocsExample callback={() => randomAlpha()} imports={["randomAlpha"]} />
</div>
