<script lang="ts">
	import { type ComponentType, onMount } from 'svelte';
	import { currentProjectIndex } from '$lib/stores';
	import { projectsMetadata } from '$lib/projects-metadata';
	import Icon from '@iconify/svelte';

	let pageContents: ComponentType;

	onMount(async () => {
		currentProjectIndex.subscribe(async (value) => {
			const project = projectsMetadata[value];
			pageContents = (await import(`../../lib/markdown/projects/${project.slug}.mdx`)).default;
		});
	});
</script>

{#if pageContents}
	<svelte:component this={pageContents} />
{:else}
	<div class="flex h-full">
		<div class="m-auto">
			<Icon icon="mdi:loading" class="animate-spin h-16 w-16" />
		</div>
	</div>
{/if}
