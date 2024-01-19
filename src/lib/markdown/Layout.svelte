<script context="module">
	import h1 from './elements/h1.svelte';
	import h2 from './elements/h2.svelte';
	import h3 from './elements/h3.svelte';
	import h4 from './elements/h4.svelte';
	import h5 from './elements/h5.svelte';
	import h6 from './elements/h6.svelte';
	import a from './elements/a.svelte';
	import ol from './elements/ol.svelte';
	import ul from './elements/ul.svelte';
	import blockquote from './elements/blockquote.svelte';
	import pre from './elements/pre.svelte';
	import code from './elements/code.svelte';
	import kbd from './elements/kbd.svelte';

	export { h1, h2, h3, h4, h5, h6, a, ol, ul, blockquote, pre, code, kbd };
</script>

<div class="m-5 md:m-10 mb-20 xl:mb-10 space-y-2">
	<slot />
</div>
