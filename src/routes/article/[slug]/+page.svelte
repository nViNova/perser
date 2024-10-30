<script lang="ts">
	import Image from '$lib/components/image.svelte';
	import Markdown from '$lib/components/markdown.svelte';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const imageOptions = {
		sizes: [{ width: 400, maxWidth: 400 }, { width: 640 }]
	};
</script>

<style>
  
    @import "https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css";
    :root {
      --bulma-primary-h: 54deg;
      --bulma-primary-s: 98%;
      --bulma-primary-l: 50%;
      --bulma-scheme-h: 0;
      --bulma-scheme-s: 0%;
      --bulma-light-l: 97%;
      --bulma-body-background-color: hsl(0,0%,97%);
      --bulma-body-color: hsl(0deg,0%,28%);
      --bulma-strong-color: hsl(0deg,0%,28%);
      --bulma-subtitle-color: hsl(0deg,0%,28%);
      --bulma-subtitle-strong-color: hsl(0deg,0%,28%);
    }

    .card {
      --bulma-card-color: hsl(0deg,0%,28%);
      --bulma-card-background-color: hsl(0,0,97%);
      --bulma-card-header-color: hsl(0deg,0%,28%);
    }

    .navbar {
      --bulma-navbar-background-color: hsl(54,98%,50%);
    }

    .tabs {
      --bulma-tabs-link-active-color: hsl(221deg,14%,21%);
      --bulma-tabs-boxed-link-hover-background-color: hsl(54,98%,50%);
      --bulma-tabs-boxed-link-active-background-color: hsl(54,98%,50%);
    }

    .title {
      --bulma-title-color: hsl(0deg,0%,28%);
    }

    .thumbnail {
      display: block;
      max-width:60%;
      max-height:20%;
      width: auto;
      height: auto;
    }


</style>      

<div class="container is-max-desktop">

<p class="title is-2 mb-3">{data.title}</p>


<p class="mb-3 has-text-weight-medium">by {data.author}; Edited by {data.editor}</p>

<!-- <figure class="image is-16by9"> -->
  <img class="thumbnail" src='/{data.thumbnail.src}' alt={data.attribution} width={data.thumbnail.width} height={data.thumbnail.height} />
<p class="mb-3 has-text-weight-light">{data.attribution}</p>
  <!-- </figure> -->


<Markdown hast={data.body} {imageOptions} />
<p class="title is-4 mb-3">References</p>
<Markdown hast={data.references} {imageOptions} />

</div>

<!-- <Image
	src={data.image.src}  
	alt="demo"
	width={data.image.width}
	height={data.image.height}
	options={imageOptions}
/> -->

