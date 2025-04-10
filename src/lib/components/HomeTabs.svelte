<script>
    import HomeTabElements from "./HomeTabElements.svelte";


	let activeItem = $state('Featured');
	let items = ['Featured', 'Top', 'New']

	const tabChange = (e) => {
		activeItem = e.detail
	}

	let { posts = [] } = $props();


</script>


<div class="home-tab-component">
	
	<HomeTabElements {activeItem} {items} on:tabChange={tabChange}/>
	{#if activeItem === 'Featured'}
		<div class="tab-elements">
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
	@import "../../../static/css/layout.css";
</style>
