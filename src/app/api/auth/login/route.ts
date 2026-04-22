import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';
import { auditLog } from '@/lib/audit';

const STRAPI_URL = process.env.STRAPI_URL ?? 'http://localhost:1337';
const USE_MOCK = process.env.MOCK_DB === 'true';

// 10 attempts per 15 minutes per IP
const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 15 * 60 * 1000;

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    ?? req.headers.get('x-real-ip')
    ?? 'unknown';

  const { allowed, retryAfter } = rateLimit(`login:${ip}`, RATE_LIMIT, RATE_WINDOW_MS);

  if (!allowed) {
    return NextResponse.json(
      { error: `Too many login attempts. Try again in ${retryAfter} seconds.` },
      { status: 429, headers: { 'Retry-After': String(retryAfter) } }
    );
  }

  const { email, password } = await req.json();

  if (USE_MOCK) {
    if (!email || !password) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
    const response = NextResponse.json({ ok: true });
    response.cookies.set('session', 'mock-session-token', {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
    });
    return response;
  }

  const strapiRes = await fetch(`${STRAPI_URL}/api/auth/local`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ identifier: email, password }),
  });

  if (!strapiRes.ok) {
    auditLog('auth.failed', ip, { email });
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const { jwt } = await strapiRes.json();
  auditLog('auth.login', ip, { email });

  const response = NextResponse.json({ ok: true });
  response.cookies.set('session', jwt, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });

  return response;
}
