import { postsPerPage } from '$lib/config';

const fetchPosts = async ({ offset = 0, limit = postsPerPage, category = '', type = '' } = {}) => {
	const posts = await Promise.all(
		Object.entries(import.meta.glob('/src/lib/posts/*.md')).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = path.split('/').pop().slice(0, -3);
			return { ...metadata, slug };
		})
	);

	let sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

	if (type) {
		sortedPosts = sortedPosts.filter((post) => post.type.includes(type));
	}

	if (category) {
		sortedPosts = sortedPosts.filter((post) => post.categories.includes(category));
	}

	if (offset) {
		sortedPosts = sortedPosts.slice(offset);
	}

	if (limit && limit < sortedPosts.length && limit != -1) {
		sortedPosts = sortedPosts.slice(0, limit);
	}

	sortedPosts = sortedPosts.map((post) => ({
		title: post.title,
		author: post.author,
		slug: post.slug,
		excerpt: post.excerpt,
		coverImage: post.coverImage,
		coverWidth: post.coverWidth,
		coverHeight: post.coverHeight,
		date: post.date,
		categories: post.categories,
		type: post.type
	}));

	return {
		posts: sortedPosts
	};
};

export default fetchPosts;
