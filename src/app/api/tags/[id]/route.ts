import { NextRequest, NextResponse } from 'next/server';

const STRAPI_URL = process.env.STRAPI_URL ?? 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN ?? '';
const USE_MOCK = process.env.MOCK_DB === 'true';

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (USE_MOCK) {
    const body = await req.json();
    return NextResponse.json({ data: body });
  }
  const { id } = await params;
  const body = await req.json();
  const res = await fetch(`${STRAPI_URL}/api/tags/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${STRAPI_API_TOKEN}` },
    body: JSON.stringify({ data: body }),
  });
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (USE_MOCK) return NextResponse.json({ ok: true });
  const { id } = await params;
  const res = await fetch(`${STRAPI_URL}/api/tags/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${STRAPI_API_TOKEN}` },
  });
  return NextResponse.json({ ok: res.ok }, { status: res.status });
}
