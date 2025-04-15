<script>
	import ListItems from "./ListItems.svelte";
	let { posts = [] } = $props();
	
</script>


<ul class="posts-list-category">
	{#each posts as post}
		<li>
			<div class="cat">
				{#if post.categories}
					<aside class="post-footer-categories">
						<ul class="posts-list-footer-categories">
							<li>
								<a href="/articles/category/{post.categories[0]}/" class="catt">
									{post.categories[0]}
								</a>
							</li>
							<li>
								<a>
									{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
								</a>
							</li>
						</ul>
					</aside>
				{/if}
			</div>
			<article>
				<a href="/articles/{post.slug}">
					<h2 class="article-title">
						{post.title}
					</h2>
				</a>
			</article>			
			<p>{post.excerpt}</p>
		</li>
		<hr class="solid">	
	{/each}
</ul>

<style>
	.article-title{
		font-size: 1.8rem;
		margin-top: 0;
	}
</style>