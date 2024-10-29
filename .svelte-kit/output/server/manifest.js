export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["admin/config.yml","admin/index.html","favicon.png","favicon.svg","media/uploads/94_big.jpg","titlelogo.png","web-app-manifest-512x512.png"]),
	mimeTypes: {".yml":"text/yaml",".html":"text/html",".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.CvnrQvkm.js","app":"_app/immutable/entry/app.VTA6hURr.js","imports":["_app/immutable/entry/start.CvnrQvkm.js","_app/immutable/chunks/entry.kBG5NF25.js","_app/immutable/chunks/runtime.C3sxxL-a.js","_app/immutable/entry/app.VTA6hURr.js","_app/immutable/chunks/runtime.C3sxxL-a.js","_app/immutable/chunks/store.L2tZSFGn.js","_app/immutable/chunks/disclose-version.LdpTF4bn.js","_app/immutable/chunks/proxy.C39g1Awl.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
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
