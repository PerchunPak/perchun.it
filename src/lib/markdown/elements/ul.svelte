<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		children,
		class: className,
		...rest
	}: HTMLAttributes<HTMLUListElement> & {
		children: Snippet;
	} = $props();
</script>

<ul {...rest} class={['list-inside list-disc space-y-1', className]}>{@render children()}</ul>
