import type { Invalidator, Subscriber, Unsubscriber, Updater, Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import projectsInfo from '$lib/projects-info';
import { goto } from '$app/navigation';
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
		if (value < 0 || value > projectsInfo.length - 1) {
			console.error(`Invalid project index: ${value}`);
			return;
		}

		// if (get(this.#store) !== value) this.#goto(value); // todo goto
		this.#store.set(value);
	}

	update(updater: Updater<number>): void {
		this.#store.update((value: number): number => {
			const newValue = updater(value);
			if (newValue < 0 || newValue > projectsInfo.length - 1) {
				console.error(`Invalid project index: ${newValue}`);
				return value;
			}

			// if (value !== newValue) this.#goto(newValue); // todo goto
			return newValue;
		});
	}

	#goto(id: number): void {
		if (!browser) return;
		goto('/' + (projectsInfo[id].name === 'This site!' ? 'perchun.it' : projectsInfo[id].name));
	}
}

export const currentProjectIndex = new CurrentProjectIndexStore();
