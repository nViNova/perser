

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.60PeP3Sm.js","_app/immutable/chunks/scheduler.u44qVECu.js","_app/immutable/chunks/index.fT9pQYMY.js","_app/immutable/chunks/singletons.k00UwdgG.js"];
export const stylesheets = [];
export const fonts = [];
