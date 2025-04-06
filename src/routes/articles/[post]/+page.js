import { error } from '@sveltejs/kit';
import fetchPosts from '$lib/assets/js/fetchPosts.js';

export const load = async ({ params }) => {
	try {
		const post = await import(`../../../lib/posts/${params.post}.md`);
		const { posts } = await fetchPosts({ categories: post.metadata.categories });

		return {
			posts,
			PostContent: post.default,
			meta: { ...post.metadata, slug: params.post }
		};
	} catch (err) {
		error(404, err);
	}
};
