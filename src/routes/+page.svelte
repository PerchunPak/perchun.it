<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { projectHref } from '#lib/current-project.svelte.ts';

	// Redirect on the client, so the layout sees `/` and opens the sidebar on small screens.
	onMount(() => goto(projectHref(0)!, { replace: true }));
</script>

<div class="flex h-full">
	<div class="m-auto">
		<Icon icon="mdi:loading" class="h-16 w-16 animate-spin" />
	</div>
</div>
