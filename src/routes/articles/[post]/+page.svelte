<!-- This file renders each individual article post for reading. Be sure to update the svelte:head below -->
<script>
	import RecentPosts from "$lib/components/RecentPosts.svelte";
	import ListItems from "$lib/components/ListItems.svelte";

	import AuthorBlock from "$lib/components/AuthorBlock.svelte";
	let { data } = $props();

	const { title, author, editor, excerpt, date, updated, coverImage, attribution, coverWidth, coverHeight, categories, references, isAuthorBlock } =
		data.meta;
	const { PostContent } = data;
	const { posts } = data;

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


<div class="post-page">

	<article class="post">
	
	
		<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
		<h1>{title}</h1>
	
		<!-- tags below the title -->
		{#if categories}
			<aside class="post-footer">
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
	
		<!-- Authors -->
	
		<p class="author">Written by: <em><ListItems items={author}></ListItems></em></p>
		<p class="author">Edited by: <em><ListItems items={editor}></ListItems></em></p>
	
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

		<!-- {#if isAuthorBlock}
			<h2>About the Author</h2>

				{#each author as authr}
					{authr}
				{/each}
		{/if} -->

		<script src="https://giscus.app/client.js"
        data-repo="nViNova/perser"
        data-repo-id="R_kgDONG26Yg"
        data-category="Site"
        data-category-id="DIC_kwDONG26Ys4Coeet"
        data-mapping="title"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="light"
        data-lang="en"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
		</script>

	</article>

	<div class="post-sidebar">
		<h3>Related Posts</h3>

		<hr class="solid">
		<RecentPosts posts={ posts }/>
	</div>

</div>