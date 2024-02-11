<script lang="ts">
	import { type ComponentType, onMount, tick } from 'svelte';
	import { currentProjectIndex } from '$lib/stores';
	import { projectsMetadata } from '$lib/projects-metadata';
	import { page } from '$app/stores';
	import { replaceState, afterNavigate } from '$app/navigation';

	export let data;
	let pageContents: ComponentType;

	onMount(async () => {
		pageContents = (await import(`../../lib/markdown/projects/${data.project.slug}.mdx`)).default;
		currentProjectIndex.subscribe(async (value) => {
			const project = projectsMetadata[value];
			pageContents = (await import(`../../lib/markdown/projects/${project.slug}.mdx`)).default;
		});
	});

	afterNavigate(async () => {
		replaceState('', { project: data.project });
		await tick();
		console.log($page.state);
	});
</script>

<svelte:component this={pageContents} />
