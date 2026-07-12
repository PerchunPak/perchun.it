<script module>
	import H1 from './elements/h1.svelte';
	import H2 from './elements/h2.svelte';
	import H3 from './elements/h3.svelte';
	import H4 from './elements/h4.svelte';
	import H5 from './elements/h5.svelte';
	import H6 from './elements/h6.svelte';
	import A from './elements/a.svelte';
	import Ol from './elements/ol.svelte';
	import Ul from './elements/ul.svelte';
	import Blockquote from './elements/blockquote.svelte';
	import Pre from './elements/pre.svelte';
	import Code from './elements/code.svelte';
	import Kbd from './elements/kbd.svelte';

	export {
		H1 as h1,
		H2 as h2,
		H3 as h3,
		H4 as h4,
		H5 as h5,
		H6 as h6,
		A as a,
		Ol as ol,
		Ul as ul,
		Blockquote as blockquote,
		Pre as pre,
		Code as code,
		Kbd as kbd
	};
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="m-5 mb-20 space-y-2 xl:mb-10">
	{@render children()}
</div>
