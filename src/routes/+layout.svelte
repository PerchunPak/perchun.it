<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, autoModeWatcher, initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Icon from "@iconify/svelte";

	initializeStores();

	const drawerStore = getDrawerStore();
</script>

<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}</svelte:head>

<Drawer>
	<Sidebar />
</Drawer>
<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="xl:hidden btn btn-sm mr-1" on:click={() => drawerStore.open({width: 'w-fit'})}>
							<Icon icon="mdi:menu" class="w-6 h-6" />
					</button>
					<strong class="text-xl uppercase">Skeleton</strong>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://discord.gg/EXqV7W8MtY"
					target="_blank"
					rel="noreferrer"
				>
					Discord
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://twitter.com/SkeletonUI"
					target="_blank"
					rel="noreferrer"
				>
					Twitter
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
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
</AppShell>
