<script lang="ts">
  import { random, setSeed } from '../../../../dist';
  import ExampleCard from '../../components/ExampleCard.svelte'
  import { examples } from '../../examples/index';

  setSeed(1);
</script>

<main>
  <h1>Examples</h1>

  <ul>
    {#each examples as example}
      <li>
        <ExampleCard
          callback={example.callback}
          title={example.title}
          path={`examples/${example.slug}`}
          rotation={random(-2,2)}
        />
      </li>
    {/each}
  </ul>
</main>

<style>
  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
    gap: 1em;
  }
</style>