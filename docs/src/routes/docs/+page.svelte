<script lang="ts">
  import Chance from "../../components/docs-sections/Chance.svelte";
  import Colors from "../../components/docs-sections/Colors.svelte";
  import Geometry from "../../components/docs-sections/Geometry.svelte";
  import Intro from "../../components/docs-sections/Intro.svelte";
  import NumberHelpers from "../../components/docs-sections/NumberHelpers.svelte";

  const sections = [
    { title: "Intro", slug: "intro", content: Intro },
    { title: "Numbers", slug: "numbers", content: NumberHelpers },
    { title: "Chance", slug: "chance", content: Chance },
    { title: "Colors", slug: "colors", content: Colors },
    { title: "Geometry", slug: "geometry", content: Geometry },
  ];
</script>

<main>
  <nav>
    <ul>
      {#each sections as section}
        <li><a href={`#${section.slug}`}>{section.title}</a></li>
      {/each}
    </ul>
  </nav>
  <div>
    {#each sections as section}
      <section>
        {#if section.title === "intro"}
          <h1 id={section.slug}>{section.title}</h1>
        {:else}
          <h2 id={section.slug}>{section.title}</h2>
        {/if}

        <svelte:component this={section.content} />
      </section>
    {/each}
  </div>
</main>

<style>
  @media (min-width: 600px) {
    main {
      display: flex;
    }

    nav {
      width: 30em;
      position: sticky;
      top: 1em;
      align-self: start;
    }

    nav ul {
      list-style: none;
      padding-left: 0;
    }

    nav ul ul {
      padding-left: 2em;
    }
  }
</style>
