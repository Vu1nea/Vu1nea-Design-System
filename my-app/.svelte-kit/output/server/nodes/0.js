

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.D94VX7YF.js","_app/immutable/chunks/DqO4OLV0.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/B1npe1F4.js"];
export const stylesheets = ["_app/immutable/assets/0.Dt0N8kLz.css"];
export const fonts = ["_app/immutable/assets/instrument-sans-latin-ext-wght-normal.B5bTHO_g.woff2","_app/immutable/assets/instrument-sans-latin-wght-normal.BbzFLZTg.woff2"];
