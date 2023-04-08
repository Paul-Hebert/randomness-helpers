<script lang="ts">
  import Example from '../../components/Example.svelte'
  import { solarSystem } from '../../examples/solar-system';
</script>

<main>
  <h1>Examples</h1>

  <h2>{solarSystem.title}</h2>

  <Example
    imports={solarSystem.imports}
    callback={solarSystem.callback}
  />
</main>