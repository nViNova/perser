<script>
	import ListItems from "./listItems.svelte";

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
				by <ListItems items={post.author}></ListItems>
			</p>
            <hr class="solid">
		</li>
	{/each}
</ul>