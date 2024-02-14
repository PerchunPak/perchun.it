<script lang="ts">
	import '../app.css';
	import {
		AppShell,
		AppBar,
		autoModeWatcher,
		initializeStores,
		Drawer,
		type DrawerSettings,
		getDrawerStore
	} from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';
	import { onMount, setContext } from 'svelte';
	import { derived, type Readable } from 'svelte/store';
	import { error } from '@sveltejs/kit';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Keybinds from '$lib/components/Keybinds.svelte';
	import { page } from '$app/stores';
	import NavigationButtons from '$lib/components/NavigationButtons.svelte';
	import { projectsMetadata } from '$lib/projects-metadata';

	initializeStores();

	const currentProjectIndex: Readable<number> = derived(page, ({ route: { id: routeId }, url }) => {
		if (routeId === null) {
			error(404, 'Page not found');
		}

		const projectSlug = url.pathname.split('/')[1];
		if (!projectSlug) return 0;

		const newIndex = projectsMetadata.findIndex((project) => project.slug === projectSlug);
		if (newIndex === -1) {
			error(404, 'Project not found');
		}
		return newIndex;
	});
	setContext('currentProjectIndex', currentProjectIndex);

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

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
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
						class="btn btn-sm mr-1 xl:hidden"
						on:click={() => drawerStore.open(drawerSettings)}
						aria-label="Open Sidebar"
					>
						<Icon icon="mdi:menu" class="h-6 w-6" />
					</button>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				{#each [['mdi:github', 'https://github.com/PerchunPak'], ['ic:baseline-discord', 'https://discord.com/users/perchun'], ['ic:baseline-telegram', 'https://t.me/perchun'], ['mdi:email', 'mailto:hi@perchun.it']] as data}
					<a
						class="variant-ghost-surface btn-icon"
						href={data[1]}
						target="_blank"
						rel="noreferrer"
						aria-label={`My ${data[0].split('-').at(-1)?.split(':').at(-1)}`}
					>
						<Icon icon={data[0]} class="h-full w-full p-1" />
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
			<div class="variant-filled-surface absolute bottom-0 w-full p-2">
				<NavigationButtons />
			</div>
		{/if}
	</svelte:fragment>
</AppShell>
