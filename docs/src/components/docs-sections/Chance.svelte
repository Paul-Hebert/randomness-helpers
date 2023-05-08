<script>
  import { randomChance, randomItemInArray } from "../../../../dist/index.js";

  import DocsExample from "../DocsExample.svelte";
</script>

<p>There are a few helpers for common randomness operations.</p>

<p>
  <code>chance</code> returns either true or false. By default, it has a 50%
  chance of being <code>true</code> but you can pass in an optional likelihood variable.
</p>

<div class="example-group">
  <DocsExample
    imports={["randomChance"]}
    callback={() => (randomChance() ? "heads" : "tails")}
  />
  <DocsExample
    imports={["randomChance"]}
    callback={() => (randomChance(0.75) ? "cloudy" : "meatballs")}
  />
</div>

<p>You can also easily get a random item from an array:</p>

<DocsExample
  imports={["randomItemInArray"]}
  callback={() => randomItemInArray(["The Good", "The Bad", "The Ugly"])}
/>
