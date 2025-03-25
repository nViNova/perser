<script>
	let { posts = [] } = $props();
</script>


<ul class="posts-recent">
	{#each posts as post}
		<li>
			<article>
				<a href="/articles/{post.slug}">
					<p>
						{post.title}
                    </p>
				</a>
			</article>
			<p class="author">
				by {post.author}
			</p>
            <hr class="solid">
		</li>
	{/each}
</ul>