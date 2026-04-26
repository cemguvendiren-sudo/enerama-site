import type { MiddlewareHandler } from 'astro';

// Minimal pass-through middleware.
// Astro calls this on every request. Kept intentionally empty — add
// request-level logic here (auth, redirects, logging) when needed.
export const onRequest: MiddlewareHandler = async (_context, next) => {
  return next();
};
