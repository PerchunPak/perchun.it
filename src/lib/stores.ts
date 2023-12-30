import {
	type Invalidator,
	type Subscriber,
	type Unsubscriber,
	type Updater,
	writable,
	type Writable
} from 'svelte/store';
import projectsInfo from '$lib/projects-info.ts';

class CurrentProjectIndexStore implements Writable<number> {
	#store: Writable<number>;

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
		this.#store.set(value);
	}

	update(updater: Updater<number>): void {
		this.#store.update((value: number): number => {
			const newValue = updater(value);
			if (newValue < 0 || newValue > projectsInfo.length - 1) {
				console.error(`Invalid project index: ${newValue}`);
				return value;
			}
			return newValue;
		});
	}
}

export const currentProjectIndex = new CurrentProjectIndexStore();
