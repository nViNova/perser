<script>
    import ListItems from "./ListItems.svelte";
	let { posts = [] } = $props();
</script>


<div class="home-posts-grid">
    <!-- use the post_i to access the index, will be useful -->
	{#each posts as post, post_i}
    <div class="home-grid-item">
        <a href="/articles/{post.slug}">
            <img
            src={post.coverImage}
            alt={post.attribution}
            width={post.coverWidth}
            height={post.coverHeight}
            style="ratio: {post.coverWidth} / {post.coverHeight}"
            />
        </a>

        <article>
            <a href="/articles/{post.slug}">
                <h6>
                    {post.title}
                </h6>
            </a>

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
        </article>

    </div>

	{/each}
</div>