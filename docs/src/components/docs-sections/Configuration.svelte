<script>
  import { Highlight } from "svelte-highlight";
  import { javascript } from "svelte-highlight/languages";
</script>

<p>
  There are a few options for configuring all of the randomness functions at
  once.
</p>

<h3>Seeded Randomness</h3>

<p>
  By default, all of the helper functions are un-seeded. This means that every
  time you run the functions you'll get different values.
</p>

<p>
  Alternately you can set a "seed" for your randomness helpers. The helpers will
  then return "pseudo-random" values. This means that they will return seemingly
  random values, but they will return the same series of values in order each
  time the same seed is used.
</p>

<p>
  This can be helpful if you want to be able to "save" a specific piece of
  generative art or game level for reuse or iteration.
</p>

<p>
  You can set a seed using the <code>setSeed</code> function. This will automatically
  apply to all of the helpers.
</p>

<div>
  <Highlight
    language={javascript}
    code={`import { setSeed } from 'randomness-helpers';

setSeed(1)`}
  />
</div>

<h3>Custom Randomness Function</h3>

<p>
  All of the randomness functions rely on <code>Math.random</code> by default.
</p>

<p>
  If you set a custom seed, they'll instead really on a seeded randomness
  function from the <a href="https://www.npmjs.com/package/random-seed"
    ><code>random-seed</code></a
  > npm package.
</p>

<p>
  Alternately, you can pass in your own randomness function. This will override <code
    >setSeed</code
  >.
</p>

<div>
  <Highlight
    language={javascript}
    code={`import { setRandomFunction } from 'randomness-helpers';

setRandomFunction(myCustomFunction)`}
  />
</div>

<h3>Randomness Precision</h3>

<p>
  By default, the helper functions return values with 2 levels of decimal
  precision. If you'd like to set a shared decimal precision across all
  functions you can do so. (Note, setting a level of 0 or 1 may not work well
  with decimal functions.)
</p>

<div>
  <Highlight
    language={javascript}
    code={`import { setPrecision } from 'randomness-helpers';
    
setPrecision(2)`}
  />
</div>

<style>
  div :global(.hljs) {
    border-radius: 0.25em;
  }
</style>
