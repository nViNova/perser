import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import fs from 'fs';
import fm from 'front-matter';

import { fromMarkdown } from 'mdast-util-from-markdown';
import { toHast } from 'mdast-util-to-hast';
import { getImageProperties, addImagePropertiesToHast, reduceHast } from '$lib/markdown';

interface article {
	type: string;
	title: string;
	author: string;
	editor: string;
	date: string;
	thumbnail: string;
	attribution: string;
	description: string;
	tags: string;
	references: string;
}

export const load: PageServerLoad = async ({ params }) => {
	try {
		const post = fm<article>(fs.readFileSync(`_posts/articles/${params.slug}.md`, 'utf-8'));

		// console.log(`processing markdown _posts/articles/${params.slug}.md`);
        
		if (post) {
			const hast = toHast(fromMarkdown(post.body));

			return {
				type: post.attributes.type,
				title: post.attributes.title,
				author: post.attributes.author,
				editor: post.attributes.editor,
				date: post.attributes.date,
				thumbnail: await getImageProperties(post.attributes.thumbnail),
				attribution: post.attributes.attribution,
				description: post.attributes.description,
				tags: post.attributes.tags,
				references: toHast(fromMarkdown(post.attributes.references)),
				body: hast && (await addImagePropertiesToHast(reduceHast(hast)))
			};
		}
		error(500, 'something wrong with the markdown file');
	} catch (err){
		console.error(err)
		error(404, 'not found');
	}
};