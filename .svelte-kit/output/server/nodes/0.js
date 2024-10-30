

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.D9b33izB.js","_app/immutable/chunks/disclose-version.C4KaHoDh.js","_app/immutable/chunks/runtime.DCzt9q0_.js"];
export const stylesheets = [];
export const fonts = [];
