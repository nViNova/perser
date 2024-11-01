import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.IXZollBm.js","_app/immutable/chunks/index.oiCz_B55.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.w-57vXuY.js","_app/immutable/chunks/index.S0wrn46i.js","_app/immutable/chunks/singletons.c0YO7tHg.js","_app/immutable/chunks/each.-oqiv04n.js","_app/immutable/chunks/config.A8Ao66NG.js"];
export const stylesheets = [];
export const fonts = [];
