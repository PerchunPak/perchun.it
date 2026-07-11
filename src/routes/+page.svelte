<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { projectsMetadata } from '$lib/projects-metadata';

	onMount(
		() =>
			void goto(resolve('/[project]', { project: projectsMetadata[0].slug }), {
				replaceState: true
			})
	);
</script>
