<script lang="ts">
	import Icon from '@iconify/svelte';
	import { currentProjectIndex, projectHref } from '#lib/current-project.svelte.ts';

	const previousHref = $derived(projectHref(currentProjectIndex() - 1));
	const nextHref = $derived(projectHref(currentProjectIndex() + 1));
</script>

<div class="flex justify-between">
	<a
		href={previousHref}
		class="btn-icon preset-filled btn-icon-lg"
		class:btn-disabled={!previousHref}
		aria-disabled={!previousHref}
		aria-label="Previous project"
	>
		<Icon icon="mdi:arrow-left" />
	</a>
	<a
		href={nextHref}
		class="btn-icon preset-filled btn-icon-lg"
		class:btn-disabled={!nextHref}
		aria-disabled={!nextHref}
		aria-label="Next project"
	>
		<Icon icon="mdi:arrow-right" />
	</a>
</div>
