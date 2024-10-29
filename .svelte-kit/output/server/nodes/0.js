

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DIq8iEPk.js","_app/immutable/chunks/disclose-version.LdpTF4bn.js","_app/immutable/chunks/runtime.C3sxxL-a.js"];
export const stylesheets = [];
export const fonts = [];
