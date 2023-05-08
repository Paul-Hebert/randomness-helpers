<script>
  import {
    random,
    randomInt,
    randomDecimal,
    randomPercent,
  } from "../../../../dist/index.js";
  import DocsExample from "../DocsExample.svelte";
</script>

<p>
  The library has a number of helper methods for generating different types of
  numbers, colors, geometric values, and more. For example, here are a few
  common random number helpers:
</p>

<div class="example-group">
  <DocsExample callback={() => random(5, 20)} imports={["random"]} />
  <DocsExample callback={() => randomInt(0, 100)} imports={["randomInt"]} />

  <DocsExample callback={() => randomDecimal()} imports={["randomDecimal"]} />

  <DocsExample callback={() => randomPercent()} imports={["randomPercent"]} />
</div>
