<script>
  import { randomDegree } from "randomness-helpers";

  import DocsExample from "../DocsExample.svelte";
</script>

<div class="example-group">
  <DocsExample
    imports={["randomDegree"]}
    callback={() => randomDegree()}
    displayFunction={(value) => `
        <svg style="rotate: ${value}deg; overflow: visible;" viewBox="0 0 100 100" width="50" height="50">
          <circle fill="#fff6" stroke="#000" r="49" cx="50" cy="50" />
          <circle fill="#000" r="10" cx="50" cy="50" />
          <circle fill="#000" r="5" cx="50" cy="1" />
          <line fill="none" stroke="#000" x1="50" y1="50" x2="50" y2="1" />
        </svg>
        ${value}
      `}
  />
</div>
