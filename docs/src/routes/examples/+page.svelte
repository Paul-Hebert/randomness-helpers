<script lang="ts">
  import DocsExample from '../../components/DocsExample.svelte'
  import { solarSystem } from '../../examples/solar-system';
</script>

<main>
  <h1>Examples</h1>

  <h2>{solarSystem.title}</h2>

  <DocsExample
    imports={solarSystem.imports}
    callback={solarSystem.callback}
  />
</main>