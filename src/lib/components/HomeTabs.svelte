<script>
	import FeaturedArticles from './FeaturedArticles.svelte';
	import HomeTabElements from './HomeTabElements.svelte';
	import DCSArticles from './DCSArticles.svelte';
	import LatestArticles from './LatestArticles.svelte';

	let activeItem = $state('Latest News');
	let items = ['Latest News', 'Featured', 'DCS'];

	let { data } = $props();

	const tabChange = (e) => {
		activeItem = e.detail;
	};
</script>

<div class="home-tab-component">
	<HomeTabElements {activeItem} {items} on:tabChange={tabChange} />
	{#if activeItem === 'Latest News'}
		<div class="tab-elements">
			<!-- 5 most previous articles -->
			<LatestArticles posts={data.posts} />
		</div>
	{:else if activeItem === 'Featured'}
		<div class="tab-elements">
			<!-- dunno yet -->
			<FeaturedArticles posts={data.posts} />
		</div>
	{:else if activeItem === 'DCS'}
		<div class="tab-elements">
			<!-- Articles with DCS tag -->
			<DCSArticles posts={data.posts} />
		</div>
	{/if}
</div>

<style>
	@import '../../../static/css/layout.css';
</style>
