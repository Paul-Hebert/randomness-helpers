<script lang="ts">
  import DocsExample from '../../../components/DocsExample.svelte'
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<main>
  <h1>Examples</h1>

  <h2>{data.example.title}</h2>

  <DocsExample
    imports={data.example.imports}
    callback={data.example.callback}
  />
</main>