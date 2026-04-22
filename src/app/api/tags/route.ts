import { NextRequest, NextResponse } from 'next/server';
import { MOCK_TAGS } from '@/lib/strapi';
import { requireAuth, isAuthError } from '@/lib/auth';
import { sanitizeTaxonomyBody } from '@/lib/sanitize';
import { auditLog } from '@/lib/audit';

const STRAPI_URL = process.env.STRAPI_URL ?? 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN ?? '';
const USE_MOCK = process.env.MOCK_DB === 'true';

export async function GET() {
  if (USE_MOCK) {
    return NextResponse.json({ data: MOCK_TAGS });
  }
  const res = await fetch(`${STRAPI_URL}/api/tags?sort=label:asc`, {
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
  const body = sanitizeTaxonomyBody(raw);

  if (USE_MOCK) {
    auditLog('tag.create', ip, { slug: body.slug });
    return NextResponse.json({ data: { ...body, id: Date.now(), documentId: String(Date.now()) } }, { status: 201 });
  }

  const res = await fetch(`${STRAPI_URL}/api/tags`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${STRAPI_API_TOKEN}` },
    body: JSON.stringify({ data: body }),
  });
  const data = await res.json();
  auditLog('tag.create', ip, { slug: body.slug });
  return NextResponse.json(data, { status: res.status });
}
