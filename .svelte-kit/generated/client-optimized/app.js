export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/about": [3],
		"/contact": [4],
		"/news": [~5],
		"/news/category": [~7],
		"/news/category/page/[page]": [~11],
		"/news/category/[category]": [~8],
		"/news/category/[category]/page": [~9],
		"/news/category/[category]/page/[page]": [~10],
		"/news/page": [~12],
		"/news/page/[page]": [~13],
		"/news/[post]": [6]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';