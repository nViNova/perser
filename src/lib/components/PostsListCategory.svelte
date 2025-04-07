<script>
	import ListItems from "./ListItems.svelte";
	let { posts = [] } = $props();
</script>


<ul class="posts-list">
	{#each posts as post}
		<li>
			<article>
				<a href="/articles/{post.slug}">
					<h2>
						{post.title}
					</h2>
				</a>
			</article>			
			<p>{post.excerpt}</p>
			{#if post.categories}
				<aside class="post-footer">
					<ul class="post-footer__categories">
						<li>
							<a href="/articles/category/{post.categories[0]}/">
                                {post.categories[0]}
							</a>
						</li>
					</ul>
				</aside>
                <hr class="solid">
			{/if}
		</li>
	{/each}
</ul>