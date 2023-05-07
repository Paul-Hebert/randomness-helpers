<script lang="ts">
  import ExampleGrid from "../../components/ExampleGrid.svelte";
  import { examples } from "../../examples/index";
</script>

<main>
  <h1>Examples</h1>

  <ExampleGrid {examples} />
</main>
