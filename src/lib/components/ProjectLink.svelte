<script lang="ts">
  import GitHub from "$lib/components/icons/GitHub.svelte";
  import ReadTheDocs from "$lib/components/icons/ReadTheDocs.svelte";

  export let projectName: string
  export let linkName: string

  const projectNameInLink =
    projectName === "This site!" ? "perchun.it" : projectName.toLowerCase();
</script>

<div class="mt-2">
  <a
    class="btn"
    target="blank"
    href={`https://s.perchun.it/${projectNameInLink}/${linkName === "main" ? "" : linkName.toLowerCase()}`}
  >
    {#if linkName === "github"}
      <GitHub />
      Check the GitHub!
    {:else if linkName === "readTheDocs"}
      <ReadTheDocs />
      See ReadTheDocs!
    {/if}
  </a>
</div>
