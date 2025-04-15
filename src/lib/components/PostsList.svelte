<script>
	import ListItems from "./ListItems.svelte";
	let { posts = [] } = $props();
</script>


<ul class="posts-list">
	{#each posts as post}
		<li>
			<article>
				<a href="/articles/{post.slug}">
					<img
					src={post.coverImage}
					alt=""
					width={post.coverWidth}
					height={post.coverHeight}
					style="ratio: {post.coverWidth} / {post.coverHeight}"
					/>
					<h2>
						{post.title}
						<br />
						{(new Date(post.date)).toDateString()}
					</h2>
				</a>
			</article>
			<p class="author">
				by <ListItems items={post.author}></ListItems>
			</p>
			<p>{post.excerpt}</p>
			{#if post.categories}
				<aside class="post-footer">
					<ul class="post-footer__categories">
						{#each post.categories as category}
							<li>
								<a href="/articles/category/{category}/">
									{category}
								</a>
							</li>
						{/each}
					</ul>
				</aside>
			{/if}
		</li>
		<hr class="solid">
	{/each}
</ul>