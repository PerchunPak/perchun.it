<script lang="ts">
	import { currentProjectIndex } from '$lib/stores';
	import { projectsMetadata } from "$lib/projects-metadata";

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

		if (isADown || isArrowLeftDown) {
			currentProjectIndex.update((v) => {
				if (v === 0) return v;
				return v - 1;
			});
		}
		if (isDDown || isArrowRightDown) {
			currentProjectIndex.update((v) => {
				if (v === projectsMetadata.length - 1) return v;
				return v + 1;
			});
		}
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
