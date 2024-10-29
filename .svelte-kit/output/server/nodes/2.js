

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.b10rP58A.js","_app/immutable/chunks/disclose-version.1ZQn-Tz8.js","_app/immutable/chunks/runtime.gHdeEHvP.js","_app/immutable/chunks/each.V9ReGj07.js","_app/immutable/chunks/proxy.Dby5AB2i.js"];
export const stylesheets = ["_app/immutable/assets/2.DqSMxWOh.css"];
export const fonts = [];
