<script lang="ts">
  export let callback: () => string | number;
  export let title: string;
  export let path: string;
  export let rotation = 0;

  let value = callback();
</script>

<article style="--rotation: {rotation}deg;">
  <header>
    <a href="{path}">{title}</a>

    <button on:click={() => value = callback()}>Refresh</button>
  </header>

  <div>{@html value.toString()}</div>
</article>

<style>
  article {
    display: grid;
    border-radius: 0.5em;
    overflow: hidden;
    position: relative;
    grid-template-areas: 'content';
    transition: transform 0.2s ease-out;
    transform: scale(0.95) rotate(var(--rotation));
    box-shadow: 0 2px 4px 2px hsla(0, 0%, 0%, 0.1);
  }

  article:hover {
    transform: translateY(-1px);
  }

  header, div {
    grid-area: content;
  }

  header {
    align-self: end;
    display: flex;
    justify-content: space-between;
    background-color: hsla(0, 0%, 100%, 0.9);
    padding: 1em;
    gap: 1em;
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
    content: '';
    position: absolute;
    inset: 0;
  }

  button {
    position: relative;
    z-index: 2;
  }
</style>
