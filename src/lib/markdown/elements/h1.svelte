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

<div class="flex w-full flex-col items-center">
	<h1 {...rest} class={['h1 mb-5', className]}>{@render children()}</h1>
</div>
