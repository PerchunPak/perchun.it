<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Project from '$lib/components/Project.svelte';
	import { currentProjectIndex } from '$lib/stores.ts';
	import ScreenSize from '$lib/components/ScreenSize.svelte';
	import NavigationButtons from '$lib/components/NavigationButtons.svelte';
	import { onMount } from 'svelte';

	let isSidebarOpen = true;
	let innerWidth: number;
	$: if (innerWidth >= 768) isSidebarOpen = true;

	let loaded = false;
	onMount(() => (loaded = true));
</script>

<ScreenSize bind:innerWidth />

<div class="flex">
	{#if isSidebarOpen}
		<div class="w-full md:w-[35rem] 2xl:w-[30rem]">
			<Sidebar bind:isOpen={isSidebarOpen}>
				{#if innerWidth >= 768 || !loaded}
					<footer class="absolute bottom-0 w-full bg-base-200">
						<NavigationButtons />
					</footer>
				{/if}
			</Sidebar>
		</div>
	{:else}
		<div class="absolute left-2 top-2">
			<button class="btn btn-square btn-ghost" on:click={() => (isSidebarOpen = !isSidebarOpen)}>
				<iconify-icon icon="mdi:menu" class="p-1.5 w-full h-full" width="unset" height="unset" />
			</button>
		</div>
	{/if}
	<div class="hidden md:contents" class:hidden={isSidebarOpen || innerWidth >= 768}>
		<Project idStore={currentProjectIndex} />
	</div>

	{#if innerWidth < 768 && loaded}
		<footer class="fixed bottom-0 bg-base-200 w-full">
			<div class="py-0 w-full h-full">
				<NavigationButtons />
			</div>
		</footer>
	{/if}
</div>
