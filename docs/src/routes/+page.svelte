<script>
  import Hero from "../components/Hero.svelte";
  import ExampleGrid from "../components/ExampleGrid.svelte";
  import { examples } from "../examples/index";
</script>

<main>
  <Hero />

  <section>
    <h2>Examples</h2>
    <ExampleGrid {examples} />
  </section>
</main>
