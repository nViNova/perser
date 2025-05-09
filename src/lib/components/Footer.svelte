<script>
	import { siteAuthor } from '$lib/config';
	import NavItems from './NavItems.svelte';
</script>

<footer>
	<nav>
		<ul>
			<li>
				<a href="https://www.facebook.com/upparser/">Facebook</a>
			</li>
			<!-- <li>
				<a href="/">X (Twitter)</a>
			</li>
			<li>
				<a href="/">YouTube</a>
			</li> -->
			<li>
				<a href="https://medium.com/the-up-parser">Medium</a>
			</li>
		</ul>
	</nav>
	<nav>
		<NavItems />
	</nav>
		<ul>
			<li>
				<a href="/api/rss.xml" data-sveltekit-reload>RSS</a>
			</li>
			<li>
				<p>&copy;{new Date().getFullYear()} {siteAuthor}</p>
			</li>
		</ul>
</footer>
