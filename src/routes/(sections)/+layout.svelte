<script>
    /** @type {import('./$types').LayoutData} */
    let { data, children } = $props();
</script>

<svelte:head>

</svelte:head>

<div class="center">
    {@render children?.()}
</div>