import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const STRAPI_URL = process.env.STRAPI_URL ?? 'http://localhost:1337';
const USE_MOCK = process.env.MOCK_DB === 'true';

/**
 * Verifies the session cookie and returns the token if valid.
 * Returns a 401 NextResponse if not authenticated.
 */
export async function requireAuth(): Promise<{ token: string } | NextResponse> {
  const store = await cookies();
  const token = store.get('session')?.value;

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // In mock mode, accept any non-empty token
  if (USE_MOCK) {
    return { token };
  }

  // Validate token against Strapi
  const res = await fetch(`${STRAPI_URL}/api/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: 'no-store',
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return { token };
}

export function isAuthError(result: unknown): result is NextResponse {
  return result instanceof NextResponse;
}
