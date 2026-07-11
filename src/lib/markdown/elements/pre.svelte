<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		children,
		class: className,
		...rest
	}: HTMLAttributes<HTMLPreElement> & {
		children: Snippet;
	} = $props();
</script>

<pre {...rest} class={['pre', className]}>{@render children()}</pre>
