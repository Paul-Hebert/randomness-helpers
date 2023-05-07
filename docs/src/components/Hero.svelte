<section>
  <h1>Seeded</h1>

  <p>
    A collection of helper functions to make it easy to generate random numbers,
    colors and more for generative art and games.
  </p>

  <a href="/docs">Get Started</a>
</section>

<style>
  section {
    display: grid;
    align-items: center;
    gap: 1em;
    grid-template-areas:
      "heading heading"
      "description cta";
  }

  h1 {
    font-size: calc(2vw + 2rem);
    grid-area: heading;
  }

  p {
    grid-area: description;
  }

  a {
    grid-area: cta;
  }
</style>
