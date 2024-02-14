<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';
	import { projectsMetadata } from '$lib/projects-metadata';

	onMount(() => goto('/' + projectsMetadata[0].name));
</script>

<div class="flex h-full">
	<div class="m-auto">
		<Icon icon="mdi:loading" class="h-16 w-16 animate-spin" />
	</div>
</div>
