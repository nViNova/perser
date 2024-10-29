

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Bhgy_HxS.js","_app/immutable/chunks/disclose-version.1ZQn-Tz8.js","_app/immutable/chunks/runtime.gHdeEHvP.js"];
export const stylesheets = [];
export const fonts = [];
