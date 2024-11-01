<!-- Renders any page at /articles/category/* -->
<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
  import { postsPerPage } from '$lib/config'

	export let data

  const { page, posts, category, total } = data

	$: lowerBound = (page * postsPerPage) - (postsPerPage - 1) || 1
	$: upperBound = Math.min(page * postsPerPage, total)
</script>


<svelte:head>
	<title>Category: {category}</title>
</svelte:head>


<h1>Articles category: {category}</h1>

{#if posts.length}
	<PostsList posts={posts} />
	<Pagination currentPage={page} totalPosts={total} path="/articles/category/{category}/page" />
{:else}
	<p><strong>Oops!</strong> Sorry, couldn't find any posts in the category "{category}".</p>

	<p><a href="/articles">Back to Articles</a></p>
{/if}