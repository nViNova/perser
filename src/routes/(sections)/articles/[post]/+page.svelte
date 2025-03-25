<!-- This file renders each individual articles post for reading. Be sure to update the svelte:head below -->
<script>
	let { data } = $props();
	

	const { title, author, editor, excerpt, date, updated, coverImage, attribution, coverWidth, coverHeight, categories, references } =
		data.meta;
	const { PostContent } = data;
</script>

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<meta property="og:image" content="https://theupparser.pages.dev/{coverImage}" />
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<meta name="twitter:image" content="https://theupparser.pages.dev/{coverImage}" />
</svelte:head>

<article class="post">
	<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
	<h1>{title}</h1>

	<p class="author">Written by: <em>{author}</em></p>
	<p class="author">Edited by: <em>{editor}</em></p>

	<br />

	<img
		class="cover-image"
		src={coverImage}
		alt={attribution}
		style="aspect-ratio: {coverWidth} / {coverHeight};"
		width={coverWidth}
		height={coverHeight}
	/>

	<p class="attribution">{attribution}</p>

	<br />

	<div class="meta">
		<b>Published:</b>
		{new Date((new Date(date)).toLocaleDateString())}
		<br />
		<b>Updated:</b>
		{new Date((new Date(updated)).toLocaleDateString())}
	</div>

	<PostContent />
	<h2>References:</h2>
	{references}


	{#if categories}
		<aside class="post-footer">
			<h2>Tags:</h2>
			<ul class="post-footer__categories">
				{#each categories as category}
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
