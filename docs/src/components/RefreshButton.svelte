<script lang="ts">
  export let onClick: () => void;

  let rotation = 0;
</script>

<button
  on:click={() => {
    onClick();
    rotation += 180;
  }}
>
  <svg
    aria-hidden="true"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    style={`--rotation: ${rotation}deg`}
  >
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path
      d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
    />
  </svg>

  Refresh
</button>

<style>
  button {
    background-color: hsl(var(--hue), 75%, 65%);
    border: none;
    border-radius: 0.25em;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5em 0.75em;
    display: flex;
    font-weight: bold;
    align-items: center;
    gap: 0.5em;
    position: relative;
    z-index: 2;
  }

  @media (prefers-reduced-motion: no-preference) {
    button {
      transition: transform 0.3s ease-out;
      transform: scale(0.95);
    }

    button:hover {
      transform: scale(1.05) translateY(-1px);
    }

    button:active {
      transform: scale(0.95);
    }

    button svg {
      transition: rotate 0.3s ease-out;
      rotate: var(--rotation);
    }

    button:hover:not(:active) svg {
      rotate: calc(var(--rotation) - 10deg);
    }
  }
</style>
