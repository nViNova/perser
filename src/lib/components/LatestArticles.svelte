<script lang="ts">
	import ListItems from './ListItems.svelte';
	let MAX_ARTICLES = $state(4);
	let { posts = [] } = $props();
	const viewMore = () => {
		MAX_ARTICLES += 3;
	};
</script>

<div class="latest-articles">
	<ul class="home-posts-list">
		{#each posts as post, outer_index}
			{#if outer_index < 2}
				{#if outer_index == 0}
					<li class="initial-post">
						<div class="post-image">
							<article>
								<a href="/articles/{post.slug}">
									<img
										src={post.coverImage}
										alt=""
										width={post.coverWidth}
										height={post.coverHeight}
										style="ratio: {post.coverWidth} / {post.coverHeight}"
									/>
								</a>
							</article>
						</div>
						<div class="post-information">
							<a href="/articles/{post.slug}">
								<h2>
									{post.title}
									<!-- {(new Date(post.date)).toDateString()} -->
								</h2>
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
						</div>
					</li>
				{:else}
					<div class="article-container">
						{#each posts as post, inner_index}
							{#if outer_index == 1 && inner_index > 0 && inner_index < MAX_ARTICLES}
								<li class="grid-articles">
									<div class="post-image">
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
													<!-- {(new Date(post.date)).toDateString()} -->
												</h2>
											</a>
										</article>
									</div>
									<div class="post-information">
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
									</div>
								</li>
							{/if}
						{/each}
					</div>
				{/if}
			{/if}
		{/each}
	</ul>
	<button class="view-more" onclick={viewMore}>View More</button>
</div>

<style>
	@import '../../../static/css/layout.css';
</style>
