<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
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

<div class="flex h-full">
	<div class="m-auto">
		<Icon icon="mdi:loading" class="h-16 w-16 animate-spin" />
	</div>
</div>
