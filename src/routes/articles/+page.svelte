<script>
	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { siteDescription } from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>Articles</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<main class="center">
	<h1 class="article-gradient">Articles</h1>

	<PostsList posts={data.posts} />

	<Pagination currentPage={1} totalPosts={data.total} />
</main>

<style>
	.article-gradient {
		color: #000000;
		background-image: linear-gradient(45deg, #fce106 4%, #000000 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;

		text-align: center;
	}
</style>

