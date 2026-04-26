// Base URL utility for internal links.
// For standalone deployment at root: returns empty string.
// For sub-path deployments, set BASE_URL in astro.config.mjs.
export const baseUrl = (import.meta.env.BASE_URL?.replace(/\/$/, '') || '');
