<script>
    /** @type {import('./$types').LayoutData} */
    let { data, children } = $props();
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/center.css" />
</svelte:head>

{@render children?.()}