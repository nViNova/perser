<script lang="ts">
	import Image from '$lib/components/image.svelte';
	import Markdown from '$lib/components/markdown.svelte';

	import type { Hast, ImageOptions } from '$lib/types';

	interface MarkdownProps {
		hast: Hast | null | undefined;
		imageOptions: ImageOptions;
	}
	let { hast, imageOptions }: MarkdownProps = $props();
</script>


{#if hast && hast.children}
	<!-- <div class="container"> -->
	{#each hast.children as child}
		{#if child.type === 'element'}
			{#if child.tagName === 'img' && child.properties && child.properties.src}
				<!-- <Image
					src={child.properties.src.slice(6)}
					alt={child.properties.alt}
					width={child.properties.width}
					height={child.properties.height}
					options={imageOptions}
				/> -->
				<img src='/{child.properties.src}' alt={child.properties.alt} width={child.properties.width} height={child.properties.height} />
			{:else if child.tagName === 'a' && child.properties}
				<a href={child.properties.href}><Markdown hast={child} {imageOptions} /></a>
			{:else}
				<svelte:element this={child.tagName}
					><Markdown hast={child} {imageOptions} /></svelte:element
				>
			{/if}
		{:else if child.type === 'text'}
		<p class="card-content">{child.value}</p>
		<p class="card-content mb-3"></p>
		{/if}
	{/each}
	<!-- </div> -->
{/if}
