<script>
  import { Highlight } from "svelte-highlight";
  import { plaintext } from "svelte-highlight/languages";
</script>

<p>You can install the library from npm:</p>

<div>
  <Highlight language={plaintext} code="npm i randomness-helpers" />
</div>

<style>
  div :global(.hljs) {
    border-radius: 0.25em;
  }
</style>
