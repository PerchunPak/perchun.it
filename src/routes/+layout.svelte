<script>
	import '../app.css';
	import 'iconify-icon';
</script>

<svelte:head>
	<title>Perchun's portfolio</title>
	<meta name="keywords" content="Perchun, portfolio, programmer, backend, software">
	<meta name="description" content="16 years old Junior+ Backend/Software developer!">

	<script async defer src="https://simpleanal.perchun.it/latest.js"></script>
	<noscript>
		<img
			src="https://simpleanal.perchun.it/noscript.gif"
			alt=""
			referrerpolicy="no-referrer-when-downgrade"
		/>
	</noscript>
</svelte:head>

<main class="m-0 w-full min-h-screen">
	<slot />
</main>
