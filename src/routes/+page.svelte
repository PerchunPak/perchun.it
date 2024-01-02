<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import projectsInfo from '$lib/projects-info.ts';

  onMount(() => goto('/' + projectsInfo[0].name));
</script>
