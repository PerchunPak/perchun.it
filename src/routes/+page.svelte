<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { projectsMetadata } from "$lib/projects-metadata";
	import Icon from "@iconify/svelte";

	onMount(() => goto('/' + projectsMetadata[0].name));
</script>

<div class="flex h-full">
	<div class="m-auto">
	<Icon icon="mdi:loading" class="animate-spin h-16 w-16" />
	</div>
</div>
