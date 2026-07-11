<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		children,
		class: className,
		...rest
	}: HTMLAttributes<HTMLElement> & { children: Snippet } = $props();
</script>

<kbd {...rest} class={['kbd', className]}>{@render children()}</kbd>
