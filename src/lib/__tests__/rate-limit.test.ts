import { describe, it, expect, beforeEach, vi } from 'vitest';
import { rateLimit } from '../rate-limit';

// Reset the module between tests to clear the in-memory store
beforeEach(() => {
  vi.resetModules();
});

describe('rateLimit', () => {
  it('allows requests within the limit', () => {
    const { allowed } = rateLimit('test-key-1', 5, 60_000);
    expect(allowed).toBe(true);
  });

  it('blocks after exceeding the limit', () => {
    const key = 'test-key-2';
    for (let i = 0; i < 3; i++) rateLimit(key, 3, 60_000);
    const { allowed, retryAfter } = rateLimit(key, 3, 60_000);
    expect(allowed).toBe(false);
    expect(retryAfter).toBeGreaterThan(0);
  });

  it('resets after the window expires', () => {
    const key = 'test-key-3';
    // Use a very short window
    rateLimit(key, 1, 1);
    // Wait for window to expire
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const { allowed } = rateLimit(key, 1, 1);
        expect(allowed).toBe(true);
        resolve();
      }, 10);
    });
  });

  it('tracks different keys independently', () => {
    rateLimit('key-a', 1, 60_000);
    const { allowed } = rateLimit('key-b', 1, 60_000);
    expect(allowed).toBe(true);
  });

  it('returns retryAfter 0 when allowed', () => {
    const { retryAfter } = rateLimit('test-key-4', 10, 60_000);
    expect(retryAfter).toBe(0);
  });
});
