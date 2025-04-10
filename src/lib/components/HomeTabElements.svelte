<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let items;
	export let activeItem;
</script>

<div class="home-tab-elements">
	<ul>
		{#each items as item}
			<li on:click={() => dispatch('tabChange', item)}>
				<div class:active={item === activeItem}>{item}</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	@import '../../../static/css/layout.css';
</style>
