

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.fvBYQ9GT.js","_app/immutable/chunks/DqO4OLV0.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/B1npe1F4.js"];
export const stylesheets = ["_app/immutable/assets/2.CYS6TEEv.css"];
export const fonts = [];
