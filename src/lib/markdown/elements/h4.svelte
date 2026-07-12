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

<h4 {...rest} class={['h4 mb-5', className]}>{@render children()}</h4>
