<script lang="ts">
	import '../app.css';
	import Icon from '@iconify/svelte';
	import { AppBar, Dialog, Portal } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import Keybinds from '#lib/components/Keybinds.svelte';
	import NavigationButtons from '#lib/components/NavigationButtons.svelte';
	import Sidebar from '#lib/components/Sidebar.svelte';
	import { currentProjectIndex } from '#lib/current-project.svelte.ts';

	let { children } = $props();

	/** Tailwind's `xl` breakpoint, where the sidebar stops being a drawer. */
	const DESKTOP_WIDTH = 1280;
	const SOCIAL_LINKS = [
		{ icon: 'mdi:github', href: 'https://github.com/PerchunPak', label: 'GitHub' },
		{ icon: 'ic:baseline-discord', href: 'https://discord.com/users/perchun', label: 'Discord' },
		{ icon: 'ic:baseline-telegram', href: 'https://t.me/perchun', label: 'Telegram' },
		{ icon: 'mdi:email', href: 'mailto:hi@perchun.it', label: 'email' }
	];

	let innerWidth = $state(0);
	let mounted = $state(false);
	let drawerOpen = $state(false);

	// A $derived only notifies when the index really changes, so the redirect from `/` to the
	// first project (same index) does not close the drawer that onMount opened.
	const projectIndex = $derived(currentProjectIndex());
	$effect(() => {
		void projectIndex;
		drawerOpen = false;
	});

	onMount(() => {
		if (page.url.pathname === '/' && innerWidth < DESKTOP_WIDTH) drawerOpen = true;
		mounted = true;
	});

	/** How far (in px) a finger must move before the gesture counts as a swipe or a scroll. */
	const SWIPE_SLOP = 10;
	/** How far (in px) the drawer must be dragged to the left to close on release. */
	const SWIPE_CLOSE_DISTANCE = 80;

	let touchStart: { x: number; y: number } | null = null;
	let swiping = false;
	/** Horizontal offset of the drawer while the user drags it, always <= 0. */
	let dragOffset = $state<number | null>(null);

	function onTouchStart(event: TouchEvent) {
		if (event.touches.length !== 1) return;
		touchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY };
		swiping = false;
	}

	function onTouchMove(event: TouchEvent) {
		if (!touchStart) return;
		const dx = event.touches[0].clientX - touchStart.x;
		const dy = event.touches[0].clientY - touchStart.y;
		if (!swiping) {
			if (Math.abs(dx) < SWIPE_SLOP && Math.abs(dy) < SWIPE_SLOP) return;
			// The first clear movement decides: vertical scrolls the sidebar, horizontal drags it.
			if (Math.abs(dy) >= Math.abs(dx)) {
				touchStart = null;
				return;
			}
			swiping = true;
		}
		dragOffset = Math.min(0, dx);
	}

	function onTouchEnd() {
		if (swiping && dragOffset !== null && dragOffset <= -SWIPE_CLOSE_DISTANCE) drawerOpen = false;
		touchStart = null;
		swiping = false;
		dragOffset = null;
	}
</script>

<svelte:window bind:innerWidth />

<Keybinds />

<Dialog open={drawerOpen} onOpenChange={(details) => (drawerOpen = details.open)}>
	<Portal>
		<Dialog.Backdrop
			class="fixed inset-0 z-50 bg-surface-50-950/50 opacity-0 transition transition-discrete data-[state=open]:opacity-100 starting:data-[state=open]:opacity-0"
		/>
		<Dialog.Positioner
			class="fixed inset-0 z-50 flex justify-start"
			ontouchstart={onTouchStart}
			ontouchmove={onTouchMove}
			ontouchend={onTouchEnd}
			ontouchcancel={onTouchEnd}
		>
			<!-- A margin, not padding: taps in the gap must land outside the content to close it. -->
			<Dialog.Content
				class="mr-10 h-full -translate-x-full shadow-xl transition transition-discrete data-[state=open]:translate-x-0 starting:data-[state=open]:-translate-x-full"
				style={dragOffset === null ? undefined : `translate: ${dragOffset}px 0; transition: none`}
			>
				<Dialog.Title class="sr-only">Sidebar</Dialog.Title>
				<Sidebar />
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog>

<div class="flex h-full flex-col">
	<AppBar>
		<AppBar.Toolbar class="grid-cols-[auto_auto]">
			<AppBar.Lead>
				<button
					class="mr-1 btn btn-sm xl:invisible"
					onclick={() => (drawerOpen = true)}
					aria-label="Open Sidebar"
				>
					<Icon icon="mdi:menu" class="size-6" />
				</button>
			</AppBar.Lead>
			<AppBar.Trail>
				{#each SOCIAL_LINKS as link (link.href)}
					<a
						class="btn-icon preset-tonal-surface btn-icon-lg"
						href={link.href}
						target="_blank"
						rel="noreferrer"
						aria-label="My {link.label}"
					>
						<Icon icon={link.icon} class="size-7" />
					</a>
				{/each}
			</AppBar.Trail>
		</AppBar.Toolbar>
	</AppBar>

	<div class="flex min-h-0 flex-1">
		<aside class="hidden xl:block">
			<Sidebar />
		</aside>
		<main class="min-w-0 flex-1 overflow-y-auto">
			<aside
				class="m-5 mb-0 flex items-center gap-3 card preset-tonal-warning p-4"
				aria-label="Outdated information"
			>
				<Icon icon="mdi:alert" class="size-6 shrink-0" />
				<p>
					Most of this was written a few years ago and I haven't updated it since. For what I'm
					working on now, check
					<a href="https://github.com/PerchunPak" class="anchor" target="_blank" rel="noreferrer">
						my GitHub
					</a>.
				</p>
			</aside>
			{@render children()}
		</main>
	</div>

	{#if mounted && innerWidth < DESKTOP_WIDTH}
		<footer class="preset-filled-surface-500 p-2">
			<NavigationButtons />
		</footer>
	{/if}
</div>
