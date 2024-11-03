/**
 * All of these values are used throughout the site – for example, 
 * in the <meta> tags, in the footer, and in the RSS feed.
 * 
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/ 

export const siteTitle = 'The UP Parser'
export const siteDescription = 'take apart, take a part.'
export const siteURL = 'theupparser.pages.dev'
export const siteLink = 'https://github.com/nViNova/perser'
export const siteAuthor = 'The UP Parser Team'

// Controls how many posts are shown per page on the main articles index pages
export const postsPerPage = 10

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Home',
		route: '/'
	}, {
		title: 'Articles',
		route: '/articles'
	}, {
		title: 'About',
		route: '/about'
	}, {
		title: 'Contact',
		route: '/contact' 
	}
]