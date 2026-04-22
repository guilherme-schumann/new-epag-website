import { NextRequest, NextResponse } from 'next/server';
import { requireAuth, isAuthError } from '@/lib/auth';
import { sanitizePostBody } from '@/lib/sanitize';
import { auditLog } from '@/lib/audit';
import { postSchema } from '@/lib/schemas/post';

const STRAPI_URL = process.env.STRAPI_URL ?? 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN ?? '';
const USE_MOCK = process.env.MOCK_DB === 'true';

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const auth = await requireAuth();
  if (isAuthError(auth)) return auth;

  const { id } = await params;
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  const raw = await req.json();

  const parsed = postSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const body = sanitizePostBody(parsed.data as Record<string, unknown>);

  if (USE_MOCK) {
    auditLog('post.update', ip, { id });
    return NextResponse.json({ data: body });
  }

  const res = await fetch(`${STRAPI_URL}/api/posts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${STRAPI_API_TOKEN}` },
    body: JSON.stringify({ data: body }),
  });
  const data = await res.json();
  auditLog('post.update', ip, { id });
  return NextResponse.json(data, { status: res.status });
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const auth = await requireAuth();
  if (isAuthError(auth)) return auth;

  const { id } = await params;
  const ip = _req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

  const res = await fetch(`${STRAPI_URL}/api/posts/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${STRAPI_API_TOKEN}` },
  });

  auditLog('post.delete', ip, { id });
  if (res.status === 204) {
    return new Response(null, { status: 204 });
  }
  return NextResponse.json({ ok: res.ok }, { status: res.status });
}
