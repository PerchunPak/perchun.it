<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Project from '$lib/components/Project.svelte';
	import { currentProjectIndex } from '$lib/stores.ts';
	import ScreenSize from '$lib/components/ScreenSize.svelte';

	let isSidebarOpen = true;
	let innerWidth: number;
	$: if (innerWidth >= 768) isSidebarOpen = true;
</script>

<ScreenSize bind:innerWidth />

<div class="flex">
	{#if isSidebarOpen}
		<div class="w-full md:w-[35rem] 2xl:w-[30rem]">
			<Sidebar bind:isOpen={isSidebarOpen} />
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
</div>
