<script lang="ts">
	import '../app.css';
	import Icon from '@iconify/svelte';
	import { Dialog, Portal } from '@skeletonlabs/skeleton-svelte';
	import { error } from '@sveltejs/kit';
	import { onMount, type Snippet } from 'svelte';
	import { page } from '$app/state';
	import Keybinds from '$lib/components/Keybinds.svelte';
	import NavigationButtons from '$lib/components/NavigationButtons.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { provideProjectNavigation } from '$lib/project-navigation';
	import { projectsMetadata } from '$lib/projects-metadata';

	let { children }: { children: Snippet } = $props();
	const enteredThroughRoot = page.url.pathname === '/';
	let drawerOpen = $state(false);
	let drawerClosing = $state(false);
	let drawerCloseTimeout: ReturnType<typeof setTimeout> | undefined;
	const drawerTransitionDuration = 200;

	function finishDrawerClose(): void {
		drawerCloseTimeout = undefined;
		drawerOpen = false;
		drawerClosing = false;
	}

	function setDrawerOpen(open: boolean): void {
		if (open) {
			if (drawerCloseTimeout) clearTimeout(drawerCloseTimeout);
			drawerCloseTimeout = undefined;
			drawerClosing = false;
			drawerOpen = true;
			return;
		}

		if (!drawerOpen || drawerClosing) return;
		drawerClosing = true;

		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		drawerCloseTimeout = setTimeout(
			finishDrawerClose,
			prefersReducedMotion ? 0 : drawerTransitionDuration
		);
	}

	function closeDrawer(): void {
		if (drawerOpen) setDrawerOpen(false);
	}

	const currentIndex = $derived.by(() => {
		if (page.route.id === null) error(404, 'Page not found');

		const projectSlug = page.url.pathname.split('/')[1];
		if (!projectSlug) return 0;

		const index = projectsMetadata.findIndex((project) => project.slug === projectSlug);
		if (index === -1) error(404, 'Project not found');
		return index;
	});

	provideProjectNavigation({
		get currentIndex() {
			return currentIndex;
		}
	});

	let previousIndex = $state<number>();
	$effect(() => {
		if (previousIndex !== undefined && currentIndex !== previousIndex) {
			void closeDrawer();
		}
		previousIndex = currentIndex;
	});

	onMount(() => {
		if (enteredThroughRoot && window.innerWidth < 1280) drawerOpen = true;

		return () => {
			if (drawerCloseTimeout) clearTimeout(drawerCloseTimeout);
		};
	});

	const animBackdrop =
		'transition-opacity duration-200 opacity-0 starting:data-[state=open]:opacity-0 data-[state=open]:opacity-100 data-[closing]:!pointer-events-none data-[closing]:!opacity-0';
	const animModal =
		'transition-all duration-200 opacity-0 -translate-x-full starting:data-[state=open]:opacity-0 starting:data-[state=open]:-translate-x-full data-[state=open]:opacity-100 data-[state=open]:translate-x-0 data-[closing]:!pointer-events-none data-[closing]:!opacity-0 data-[closing]:!-translate-x-full';

	const socialLinks = [
		['mdi:github', 'https://github.com/PerchunPak', 'GitHub'],
		['ic:baseline-discord', 'https://discord.com/users/perchun', 'Discord'],
		['ic:baseline-telegram', 'https://t.me/perchun', 'Telegram'],
		['mdi:email', 'mailto:hi@perchun.it', 'email']
	] as const;
</script>

<Keybinds />

<Dialog
	open={drawerOpen}
	onOpenChange={({ open }) => setDrawerOpen(open)}
	closeOnEscape={true}
	closeOnInteractOutside={true}
>
	<div class="text-surface-950-50 flex h-full min-h-0 flex-col">
		<header
			class="preset-filled-surface-50-950 flex min-h-16 shrink-0 items-center justify-between p-2 shadow-sm"
		>
			<Dialog.Trigger class="btn btn-sm mr-1 xl:hidden" aria-label="Open sidebar">
				<Icon icon="mdi:menu" class="size-6" />
			</Dialog.Trigger>
			<div class="ml-auto flex items-center gap-2">
				{#each socialLinks as [icon, href, label] (href)}
					<a
						class="preset-tonal-surface btn-icon btn-icon-2xl rounded-full p-1"
						{href}
						target="_blank"
						rel="noreferrer"
						aria-label={`My ${label}`}
					>
						<Icon {icon} class="size-full" />
					</a>
				{/each}
			</div>
		</header>

		<div class="flex min-h-0 flex-1">
			<aside class="preset-filled-surface-100-900 hidden min-h-0 shrink-0 xl:block">
				<Sidebar />
			</aside>
			<main class="relative min-w-0 flex-1 overflow-y-auto">
				{@render children()}
				<footer class="preset-filled-surface-500 sticky bottom-0 w-full p-2 xl:hidden">
					<NavigationButtons />
				</footer>
			</main>
		</div>
	</div>

	<Portal>
		<Dialog.Backdrop
			data-closing={drawerClosing || undefined}
			class="bg-surface-950/75 pointer-events-auto fixed inset-0 z-50 {animBackdrop}"
		/>
		<Dialog.Positioner class="pointer-events-none fixed inset-0 z-50 flex justify-start">
			<Dialog.Content
				data-closing={drawerClosing || undefined}
				class="preset-filled-surface-100-900 pointer-events-auto relative h-dvh max-w-[calc(100vw-2rem)] overflow-y-auto shadow-2xl {animModal}"
			>
				<Dialog.Title class="sr-only">Project navigation</Dialog.Title>
				<Dialog.CloseTrigger
					class="preset-tonal-surface btn-icon absolute top-2 right-2"
					aria-label="Close sidebar"
				>
					<Icon icon="mdi:close" />
				</Dialog.CloseTrigger>
				<Sidebar onnavigate={() => void closeDrawer()} />
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog>
