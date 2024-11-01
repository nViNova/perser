export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/animation.css","css/code.css","css/components.css","css/fonts.css","css/forms.css","css/header-and-footer.css","css/layout.css","css/prism.css","css/root.css","css/typography.css","css/utilities.css","css/vars.css","favicon.svg","fonts/FiraCode-Regular.woff2","fonts/LeagueSpartan-Black.ttf","fonts/LeagueSpartan-Bold.ttf","fonts/LeagueSpartan-ExtraBold.ttf","fonts/LeagueSpartan-ExtraLight.ttf","fonts/LeagueSpartan-Light.ttf","fonts/LeagueSpartan-Medium.ttf","fonts/LeagueSpartan-Regular.ttf","fonts/LeagueSpartan-SemiBold.ttf","fonts/LeagueSpartan-Thin.ttf","link.svg","media/jefferson-santos-fCEJGBzAkrU-unsplash.jpg","media/jerry-zhang-ePpaQC2c1xA-unsplash.jpg","media/linus-nylund-Q5QspluNZmM-unsplash.jpg","media/uploads/0_2nfmdxgxyv9bki9i.webp","media/uploads/0_6yhbsofotbh6j-9m.webp","media/uploads/0_cx6hr485df-pxj-n.webp","media/uploads/0_hkjdzbnrulo6habz.webp","media/uploads/0_jmtdbnctb4z-qsot.webp","media/uploads/0_kl4_m02mdayirghq.webp","media/uploads/0_si-xsz3tts9pl7um.webp","media/uploads/0_z6uthzo_zqnouma7.webp","media/uploads/1_bs4bd25l7fwkgvt6vaanbg.webp","media/uploads/1_sz2iwh885h_4b4olhsv_qq-1-.webp","media/uploads/94_big.jpg"]),
	mimeTypes: {".css":"text/css",".svg":"image/svg+xml",".woff2":"font/woff2",".ttf":"font/ttf",".jpg":"image/jpeg",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.qr6HO-xk.js","app":"_app/immutable/entry/app.liu4K8i_.js","imports":["_app/immutable/entry/start.qr6HO-xk.js","_app/immutable/chunks/scheduler.w-57vXuY.js","_app/immutable/chunks/singletons.c0YO7tHg.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/entry/app.liu4K8i_.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.w-57vXuY.js","_app/immutable/chunks/index.S0wrn46i.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/posts.json",
				pattern: /^\/api\/posts\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/posts.json/_server.js'))
			},
			{
				id: "/api/posts/count",
				pattern: /^\/api\/posts\/count\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/posts/count/_server.js'))
			},
			{
				id: "/api/posts/page/[page]",
				pattern: /^\/api\/posts\/page\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/posts/page/_page_/_server.js'))
			},
			{
				id: "/api/rss.xml",
				pattern: /^\/api\/rss\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/rss.xml/_server.js'))
			},
			{
				id: "/articles",
				pattern: /^\/articles\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/articles/category",
				pattern: /^\/articles\/category\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/articles/category/page/[page]",
				pattern: /^\/articles\/category\/page\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/articles/category/[category]",
				pattern: /^\/articles\/category\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/articles/category/[category]/page",
				pattern: /^\/articles\/category\/([^/]+?)\/page\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/articles/category/[category]/page/[page]",
				pattern: /^\/articles\/category\/([^/]+?)\/page\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false},{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/articles/page",
				pattern: /^\/articles\/page\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/articles/page/[page]",
				pattern: /^\/articles\/page\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/articles/[post]",
				pattern: /^\/articles\/([^/]+?)\/?$/,
				params: [{"name":"post","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
