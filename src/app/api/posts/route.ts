import { NextRequest, NextResponse } from 'next/server';
import { MOCK_POSTS } from '@/lib/strapi';
import { requireAuth, isAuthError } from '@/lib/auth';
import { sanitizePostBody } from '@/lib/sanitize';
import { auditLog } from '@/lib/audit';

const STRAPI_URL = process.env.STRAPI_URL ?? 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN ?? '';
const USE_MOCK = process.env.MOCK_DB === 'true';

export async function GET() {
  if (USE_MOCK) {
    return NextResponse.json({ data: MOCK_POSTS });
  }
  const res = await fetch(`${STRAPI_URL}/api/posts?populate=*&sort=createdAt:desc`, {
    headers: { Authorization: `Bearer ${STRAPI_API_TOKEN}` },
    cache: 'no-store',
  });
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const auth = await requireAuth();
  if (isAuthError(auth)) return auth;

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  const raw = await req.json();
  const body = sanitizePostBody(raw);

  if (USE_MOCK) {
    auditLog('post.create', ip, { slug: body.slug });
    return NextResponse.json({ data: { ...body, id: Date.now(), documentId: String(Date.now()) } }, { status: 201 });
  }

  const res = await fetch(`${STRAPI_URL}/api/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${STRAPI_API_TOKEN}` },
    body: JSON.stringify({ data: body }),
  });
  const data = await res.json();
  auditLog('post.create', ip, { slug: body.slug });
  return NextResponse.json(data, { status: res.status });
}
