<!-- Renders any page at /articles/category/* -->
<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { postsPerPage } from '$lib/config'
	import PostsListCategory from '$lib/components/PostsListCategory.svelte';

	let { data } = $props();

 	const { page, posts, category, total } = data

	let lowerBound = $derived((page * postsPerPage) - (postsPerPage - 1) || 1)
	let upperBound = $derived(Math.min(page * postsPerPage, total))
</script>


<svelte:head>
	<title>Category: {category}</title>
</svelte:head>

<main class="center">
<h1 class="category-gradient">Category: {category}</h1>

{#if posts.length}
	<!-- <div>
		{#each posts as post}
			<div>
				<p>{post.type}</p>
				<p>{post.title}</p>
				<p>{post.date}</p>	
				<p>{post.excerpt}</p>
			</div>
		{/each}
	</div> -->
	<hr class="solid">
	<PostsListCategory posts={posts} />
	<Pagination currentPage={page} totalPosts={total} path="/articles/category/{category}/page" />
{:else}
	<p><strong>Oops!</strong> Sorry, couldn't find any posts in the category "{category}".</p>

	<p><a href="/articles">Back to Articles</a></p>
{/if}
</main>

<style>
	.category-gradient {
		color: #000000;
		background-image: linear-gradient(45deg, #fce106 4%, #000000 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;

		text-align: center;
	}
</style>