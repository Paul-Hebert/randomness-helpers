<header>
  <nav>
    <a href="/">Home</a>
    <a href="/docs">Docs</a>
    <a href="/examples">Examples</a>
  </nav>
</header>

<slot />

<footer>Made by <a href="https://paulmh.xyz">Paul Hebert</a></footer>

<style>
  nav {
    display: flex;
    justify-content: end;
    gap: 1em;
  }

  nav > a:first-child {
    margin-right: auto;
  }
</style>