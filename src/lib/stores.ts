import type { Invalidator, Subscriber, Unsubscriber, Updater, Writable } from 'svelte/store';
import { writable, get } from 'svelte/store';
import { projectsMetadata } from '$lib/projects-metadata';
import { pushState } from '$app/navigation';
import { browser } from '$app/environment';

class CurrentProjectIndexStore implements Writable<number> {
	readonly #store: Writable<number>;

	constructor() {
		this.#store = writable(0);
	}

	subscribe(run: Subscriber<number>, invalidate?: Invalidator<number>): Unsubscriber {
		return this.#store.subscribe(run, invalidate);
	}

	set(value: number): void {
		if (value < 0 || value > projectsMetadata.length - 1) {
			console.error(`Invalid project index (set): ${value}`);
			return;
		}

		if (get(this.#store) !== value) this.#pushState(value);
		this.#store.set(value);
	}

	update(updater: Updater<number>): void {
		this.#store.update((value: number): number => {
			const newValue = updater(value);
			if (newValue < 0 || newValue > projectsMetadata.length - 1) {
				console.error(`Invalid project index (update): ${newValue}`);
				return value;
			}

			if (value !== newValue) this.#pushState(newValue);
			return newValue;
		});
	}

	#pushState(id: number): void {
		if (!browser) return;
		pushState('/' + projectsMetadata[id].slug, { project: projectsMetadata[id] });
	}
}

export const currentProjectIndex = new CurrentProjectIndexStore();
