<script>
	export let data
  const { uniqueCategories } = data
</script>


<svelte:head>
	<title>News | Categories</title>
</svelte:head>


<div class="compressed-content">
	<h1 class="h2">All news categories</h1>
	
	<ul>
		{#each uniqueCategories as category}
		<li>
			<a href="/news/category/{category.title}">
				{ category.title }
			</a>
			({category.count})
		</li>
		{/each}
	</ul>
</div>