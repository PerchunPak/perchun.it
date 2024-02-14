<script lang="ts">
	import { type ComponentType, getContext, onMount, Readable } from 'svelte';
	import Icon from '@iconify/svelte';
	import { projectsMetadata } from '$lib/projects-metadata';

	const currentProjectIndex = getContext<Readable<number>>('currentProjectIndex');

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
			<Icon icon="mdi:loading" class="h-16 w-16 animate-spin" />
		</div>
	</div>
{/if}
