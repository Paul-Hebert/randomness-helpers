<script lang="ts">
  import { random, randomChanceOfNegative } from "randomness-helpers";
  import type { ExampleData } from "../examples/example-data";
  import ExampleCard from "./ExampleCard.svelte";

  export let examples: ExampleData[];
</script>

<ul>
  {#each examples as example}
    <li>
      <ExampleCard
        callback={example.callback}
        title={example.title}
        path={`examples/${example.slug}`}
        rotationFunction={() => randomChanceOfNegative(random(1, 2.5))}
      />
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
    gap: 1em;
  }
</style>
