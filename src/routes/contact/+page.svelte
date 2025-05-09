<script>
	import { createBubbler, preventDefault } from 'svelte/legacy';
	const bubble = createBubbler();
	import Callout from '$lib/components/Callout.svelte'
</script>


<svelte:head>
	<title>Contact Us</title>
</svelte:head>


<main class="center">

<h1>Contact Us.</h1>

Feel free to reach us at our <a href="https://www.facebook.com/upparser/">Facebook Page</a>, at our email, dcsupparser@gmail.com, or fill up this form here!

<!-- <Callout>This form does nothing! Website in development.</Callout> -->

<iframe data-tally-src="https://tally.so/embed/mZgZrV?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="552" frameborder="0" marginheight="0" marginwidth="0" title="null"></iframe>
<script>var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}</script>

</main>