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
		"/articles": [~4],
		"/articles/category": [~6],
		"/articles/category/page/[page]": [~10],
		"/articles/category/[category]": [~7],
		"/articles/category/[category]/page": [~8],
		"/articles/category/[category]/page/[page]": [~9],
		"/articles/page": [~11],
		"/articles/page/[page]": [~12],
		"/articles/[post]": [5],
		"/contact": [13]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';