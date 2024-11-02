/** @type {import('./$types').PageServerLoad} */
import { redirect } from '@sveltejs/kit';
export function load() {
    redirect(301, '/home')
};