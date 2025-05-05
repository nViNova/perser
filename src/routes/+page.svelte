<script>
	import HomeTabs from '$lib/components/HomeTabs.svelte';
	import { siteTitle } from '$lib/config';
	let { data } = $props();

</script>

<svelte:head>
	<title>{siteTitle}</title></svelte:head>


<div class="hero">
	<div class="caption">
		<h1>Take <p class="heading-gradient">apart</p>,</h1>
		<h1>Take <p class="heading-gradient">a part</p>.</h1>
	</div>
	<!-- arrow down -->
	<div class="icon">
		<p>Scroll</p>
		<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="m480-351 173-173-43-42-130 130-130-130-43 42 173 173Zm0 271q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Z"/></svg>
	</div>
</div>

<div class="home-body">
	<HomeTabs data={data}/>
</div>