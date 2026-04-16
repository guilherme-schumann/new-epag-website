/**
 * Simple in-memory rate limiter.
 * For production with multiple instances, replace with Redis-based solution.
 */

type Entry = { count: number; resetAt: number };

const store = new Map<string, Entry>();

export function rateLimit(key: string, limit: number, windowMs: number): { allowed: boolean; retryAfter: number } {
  const now = Date.now();
  const entry = store.get(key);

  if (!entry || now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfter: 0 };
  }

  if (entry.count >= limit) {
    const retryAfter = Math.ceil((entry.resetAt - now) / 1000);
    return { allowed: false, retryAfter };
  }

  entry.count++;
  return { allowed: true, retryAfter: 0 };
}
