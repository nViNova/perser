export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["_posts/articles/parsearch-2024-10-29-dost-broaches-‘isip-program-’-‘project-marayum’-for-natural-language-research.md","_posts/articles/parsearch-2024-10-29-ph-unveils-national-cybersecurity-plan-2023–2028.md","_posts/features/feature-2024-10-29-bootcamp-11-0-dcs-welcomes-batch-2024.md","admin/config.yml","admin/index.html","favicon.png","favicon.svg","media/uploads/0_2nfmdxgxyv9bki9i.webp","media/uploads/0_6yhbsofotbh6j-9m.webp","media/uploads/0_cx6hr485df-pxj-n.webp","media/uploads/0_hkjdzbnrulo6habz.webp","media/uploads/0_jmtdbnctb4z-qsot.webp","media/uploads/0_kl4_m02mdayirghq.webp","media/uploads/0_si-xsz3tts9pl7um.webp","media/uploads/0_z6uthzo_zqnouma7.webp","media/uploads/1_bs4bd25l7fwkgvt6vaanbg.webp","media/uploads/1_sz2iwh885h_4b4olhsv_qq-1-.webp","media/uploads/94_big.jpg","titlelogo.png","web-app-manifest-512x512.png"]),
	mimeTypes: {".md":"text/markdown",".yml":"text/yaml",".html":"text/html",".png":"image/png",".svg":"image/svg+xml",".webp":"image/webp",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.CHojnxe1.js","app":"_app/immutable/entry/app.CPzbIYaO.js","imports":["_app/immutable/entry/start.CHojnxe1.js","_app/immutable/chunks/entry.DUKb0CbI.js","_app/immutable/chunks/runtime.gHdeEHvP.js","_app/immutable/entry/app.CPzbIYaO.js","_app/immutable/chunks/runtime.gHdeEHvP.js","_app/immutable/chunks/store.zs98xcQ2.js","_app/immutable/chunks/disclose-version.1ZQn-Tz8.js","_app/immutable/chunks/props.BeJbyegS.js","_app/immutable/chunks/proxy.Dby5AB2i.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
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
				id: "/article/[slug]",
				pattern: /^\/article\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
