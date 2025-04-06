<script>
	let { items = [] } = $props();
</script>




{#if items.length == 1}
    {items[0]}
{:else}
    {#each items as item, i}
        {#if i == items.length - 1}
            and {item}
        {:else}
            {item},&nbsp;
        {/if}
    {/each}
{/if}