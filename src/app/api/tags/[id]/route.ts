import { NextRequest, NextResponse } from 'next/server';
import { requireAuth, isAuthError } from '@/lib/auth';
import { sanitizeTaxonomyBody } from '@/lib/sanitize';
import { auditLog } from '@/lib/audit';

const STRAPI_URL = process.env.STRAPI_URL ?? 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN ?? '';
const USE_MOCK = process.env.MOCK_DB === 'true';

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const auth = await requireAuth();
  if (isAuthError(auth)) return auth;

  const { id } = await params;
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  const raw = await req.json();
  const body = sanitizeTaxonomyBody(raw);

  if (USE_MOCK) {
    auditLog('tag.update', ip, { id });
    return NextResponse.json({ data: body });
  }

  const res = await fetch(`${STRAPI_URL}/api/tags/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${STRAPI_API_TOKEN}` },
    body: JSON.stringify({ data: body }),
  });
  const data = await res.json();
  auditLog('tag.update', ip, { id });
  return NextResponse.json(data, { status: res.status });
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const auth = await requireAuth();
  if (isAuthError(auth)) return auth;

  const { id } = await params;
  const ip = _req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

  if (USE_MOCK) {
    auditLog('tag.delete', ip, { id });
    return NextResponse.json({ ok: true });
  }

  const res = await fetch(`${STRAPI_URL}/api/tags/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${STRAPI_API_TOKEN}` },
  });
  auditLog('tag.delete', ip, { id });
  if (res.status === 204) {
    return new Response(null, { status: 204 });
  }
  return NextResponse.json({ ok: res.ok }, { status: res.status });
}
