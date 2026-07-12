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

<h5 {...rest} class={['h5 mb-5', className]}>{@render children()}</h5>
