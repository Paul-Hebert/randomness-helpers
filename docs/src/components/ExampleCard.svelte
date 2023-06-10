<script lang="ts">
  import RefreshButton from "./RefreshButton.svelte";

  export let callback: () => string | number;
  export let title: string;
  export let path: string;
  export let rotationFunction: () => number;

  let rotation = rotationFunction();

  let value = callback();
</script>

<article style="--rotation: {rotation}deg;">
  <header>
    <a href={path}>{title}</a>

    <RefreshButton
      onClick={() => {
        value = callback();
        rotation = rotationFunction();
      }}
    />
  </header>

  <div>{@html value.toString()}</div>
</article>

<style>
  article {
    display: grid;
    border-radius: 0.5em;
    overflow: hidden;
    position: relative;
    grid-template-areas: "content";
    transition-property: transform, box-shadow;
    transition-timing-function: ease-out;
    transition-duration: 0.2s;
    transform: scale(0.95) rotate(var(--rotation));
    box-shadow: 0 2px 4px 2px hsla(0, 0%, 0%, 0.1);
  }

  article:hover {
    transform: translateY(-1px);
    box-shadow: 0 1px 7px 4px hsla(0, 0%, 0%, 0.12);
  }

  header,
  div {
    grid-area: content;
  }

  header {
    align-self: end;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: hsla(0, 0%, 100%, 0.9);
    padding: 0.5em 0.5em;
    gap: 0.75em;
    z-index: 1;
  }

  div {
    display: grid;
    place-items: center;
  }

  div :global(> *) {
    width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    font-weight: bold;
    text-decoration: none;
  }

  a::before {
    content: "";
    position: absolute;
    inset: 0;
  }
</style>
