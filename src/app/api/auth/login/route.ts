import { NextRequest, NextResponse } from 'next/server';

const STRAPI_URL = process.env.STRAPI_URL ?? 'http://localhost:1337';
const USE_MOCK = process.env.MOCK_DB === 'true';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (USE_MOCK) {
    // In mock mode, accept any non-empty credentials
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
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const { jwt } = await strapiRes.json();

  const response = NextResponse.json({ ok: true });
  response.cookies.set('session', jwt, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  });

  return response;
}
