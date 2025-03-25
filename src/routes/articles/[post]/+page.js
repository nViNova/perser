import { error } from '@sveltejs/kit';

export const load = async ({ url, fetch, params }) => {
	try {
		const post = await import(`../../../lib/posts/${params.post}.md`);

		const postRes = await fetch(`${url.origin}/api/posts.json`);
		const posts = await postRes.json();

		const totalRes = await fetch(`${url.origin}/api/posts/count`);
		const total = await totalRes.json();

		return {
			PostContent: post.default,
			meta: { ...post.metadata, slug: params.post },
			posts
		};
	} catch (err) {
		error(404, err);
	}
};
