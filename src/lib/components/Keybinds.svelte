<script lang="ts">
	import { getContext } from 'svelte';
	import type { Readable } from 'svelte/store';
	import { nextProject, previousProject } from '$lib/projects-metadata';

	const currentProjectIndex = getContext<Readable<number>>('currentProjectIndex');
	let isADown = false;
	let isDDown = false;
	let isArrowLeftDown = false;
	let isArrowRightDown = false;

	function onKeyDown(event: KeyboardEvent) {
		if (event.repeat) return;

		switch (event.key) {
			case 'a':
				isADown = true;

				event.preventDefault();
				break;

			case 'd':
				isDDown = true;

				event.preventDefault();
				break;

			case 'ArrowLeft':
				isArrowLeftDown = true;

				event.preventDefault();
				break;

			case 'ArrowRight':
				isArrowRightDown = true;

				event.preventDefault();
				break;
		}

		if (isADown || isArrowLeftDown) previousProject($currentProjectIndex);
		if (isDDown || isArrowRightDown) nextProject($currentProjectIndex);
	}
	function onKeyUp(event: KeyboardEvent) {
		switch (event.key) {
			case 'a':
				isADown = false;

				event.preventDefault();
				break;

			case 'd':
				isDDown = false;

				event.preventDefault();
				break;

			case 'ArrowLeft':
				isArrowLeftDown = false;

				event.preventDefault();
				break;

			case 'ArrowRight':
				isArrowRightDown = false;

				event.preventDefault();
				break;
		}
	}
</script>

<svelte:window on:keydown={onKeyDown} on:keyup={onKeyUp} />
