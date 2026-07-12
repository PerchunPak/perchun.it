<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		children,
		class: className,
		...rest
	}: HTMLAttributes<HTMLHeadingElement> & {
		children: Snippet;
	} = $props();
</script>

<h3 {...rest} class={['h3 mb-5', className]}>{@render children()}</h3>
