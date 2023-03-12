<script lang="ts">
  import Highlight from 'svelte-highlight';
	import { javascript } from 'svelte-highlight/languages';
  import "svelte-highlight/styles/hybrid.css";

  export let callback: () => string | number;
  export let displayFunction: ((value: string) => string) = (value) => value;
  export let imports: string[];

  let codeExample = callback.toString()
    // Remove Vite import transformations from code examples
    .replace(/__vite_ssr_import_(.+)__\./g, '')
    // Remove arrow function wrapper
    // TODO: Remove brackets around functions with brackets.
    // TODO: Handle indentation better
    .replace('() => ','');

  if(imports) {
    codeExample = `import { ${imports.join(', ')} }  from 'randomness-helpers';
    
${codeExample}`
  }

    let value = callback();
</script>

<div class="example">
  <div class="code-wrapper">
    <Highlight language={javascript} code={codeExample} />
  </div>

  <output>{@html displayFunction(value.toString())}</output>

  <button on:click={() => value = callback()}>Refresh</button>
</div>

<style>
  .example {
    border-radius: 0.25em;
    overflow: hidden;
    background-color: hsl(var(--hue), 10%, 90%);
    display: grid;
    grid-template-areas: 
      'code code'
      'output refresh';
    grid-template-columns: 1fr auto;
  }
  
  .code-wrapper {
    line-height: 1.5;
    grid-area: code;
  }

  output {
    grid-area: output;
    display: block;
    padding: 1em;
    display: flex;
    align-items: center;
    gap: 0.75em;
  }

  button {
    align-self: center;
    grid-area: refresh;
    margin: 1em;
  }
</style>
