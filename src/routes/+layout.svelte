<script lang="ts">
	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		autoModeWatcher,
		initializeStores,
		Drawer,
		type DrawerSettings,
		getDrawerStore
	} from '@skeletonlabs/skeleton';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Icon from '@iconify/svelte';
	import Keybinds from '$lib/components/Keybinds.svelte';
	import { currentProjectIndex } from '$lib/stores';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import NavigationButtons from '$lib/components/NavigationButtons.svelte';

	initializeStores();

	const drawerStore = getDrawerStore();
	currentProjectIndex.subscribe(() => drawerStore.close());

	const drawerSettings: DrawerSettings = { width: 'w-fit', padding: 'pr-10' };

	let innerWidth: number;
	let loaded: boolean = false;
	onMount(() => {
		if ($page.url.pathname === '/' && innerWidth < 1280) drawerStore.open(drawerSettings);
		loaded = true;
	});
</script>

<svelte:window bind:innerWidth />

<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}</svelte:head>

<Keybinds />
<Drawer>
	<Sidebar />
</Drawer>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar background="bg-surface-50-900-token">
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button
						class="xl:hidden btn btn-sm mr-1"
						on:click={() => drawerStore.open(drawerSettings)}
					>
						<Icon icon="mdi:menu" class="w-6 h-6" />
					</button>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				{#each [['mdi:github', 'https://github.com/PerchunPak'], ['ic:baseline-discord', 'https://discord.com/users/perchun'], ['ic:baseline-telegram', 'https://t.me/perchun'], ['mdi:email', 'mailto:hi@perchun.it']] as data}
					<a class="btn-icon variant-ghost-surface" href={data[1]} target="_blank" rel="noreferrer">
						<Icon icon={data[0]} class="w-full h-full p-1" />
					</a>
				{/each}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<div class="hidden xl:contents">
			<Sidebar />
		</div>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="pageFooter">
		{#if innerWidth < 1280 && loaded}
			<div class="absolute bottom-4 variant-filled-surface rounded-token p-2 w-full">
				<NavigationButtons />
			</div>
		{/if}
	</svelte:fragment>
</AppShell>
