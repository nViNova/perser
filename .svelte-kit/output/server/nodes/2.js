

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CXbIYCAN.js","_app/immutable/chunks/disclose-version.LdpTF4bn.js","_app/immutable/chunks/runtime.C3sxxL-a.js","_app/immutable/chunks/proxy.C39g1Awl.js"];
export const stylesheets = ["_app/immutable/assets/2.DqSMxWOh.css"];
export const fonts = [];
