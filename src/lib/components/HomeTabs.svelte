<script>
	import HomeNews from "./HomeNews.svelte";
    import HomeTabElements from "./HomeTabElements.svelte";


	let activeItem = $state('Featured');
	let items = ['Featured', 'Top', 'New']
	let { data } = $props();

	const tabChange = (e) => {
		activeItem = e.detail
	}

</script>


<div class="home-body">
	
	<HomeTabElements {activeItem} {items} on:tabChange={tabChange}/>
	{#if activeItem === 'Featured'}
		<div class="tab-elements">
			<!-- <HomeNews posts={data.posts}/> -->
			<p>wo</p>
		</div>
	{:else if activeItem === 'Top'}
		<div class="tab-elements">
			<p>ai</p>
		</div>
	{:else if activeItem === 'New'}
		<div class="tab-elements">
			<p>ni</p>
		</div>
	{/if}
</div>


<style>
.tab-elements{

	display: flex;
	justify-content: center;
}
</style>