<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLBlockquoteAttributes } from 'svelte/elements';

	let {
		children,
		class: className,
		...rest
	}: HTMLBlockquoteAttributes & { children: Snippet } = $props();
</script>

<blockquote {...rest} class={['blockquote', className]}>{@render children()}</blockquote>
