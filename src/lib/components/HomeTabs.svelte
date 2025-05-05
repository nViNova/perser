<script>
	import FeaturedArticles from './FeaturedArticles.svelte';
	import HomeTabElements from './HomeTabElements.svelte';
	import DCSArticles from './DCSArticles.svelte';
	import LatestArticles from './LatestArticles.svelte';
	import { fly, slide, fade } from 'svelte/transition';

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
		<div in:fade out:slide class="tab-elements">
			<!-- 5 most previous articles -->
			<LatestArticles posts={data.posts} />
		</div>
	{:else if activeItem === 'Featured'}
		<div in:fade out:slide class="tab-elements">
			<!-- dunno yet -->
			<FeaturedArticles posts={data.posts} />
		</div>
	{:else if activeItem === 'DCS'}
		<div in:fade out:slide class="tab-elements">
			<!-- Articles with DCS tag -->
			<DCSArticles posts={data.posts} />
		</div>
	{/if}
</div>

<style>
	@import '../../../static/css/layout.css';
</style>
