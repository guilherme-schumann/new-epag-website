import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { MOCK_POSTS } from '@/lib/strapi';

const STRAPI_URL = process.env.STRAPI_URL ?? 'http://localhost:1337';
const USE_MOCK = process.env.MOCK_DB === 'true';

async function getToken() {
  const store = await cookies();
  return store.get('session')?.value ?? '';
}

export async function GET() {
  if (USE_MOCK) {
    return NextResponse.json({ data: MOCK_POSTS });
  }
  const token = await getToken();
  const res = await fetch(`${STRAPI_URL}/api/posts?populate=*&sort=createdAt:desc`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: 'no-store',
  });
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  if (USE_MOCK) {
    const body = await req.json();
    return NextResponse.json({ data: { ...body, id: Date.now(), documentId: String(Date.now()) } }, { status: 201 });
  }
  const token = await getToken();
  const body = await req.json();
  const res = await fetch(`${STRAPI_URL}/api/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ data: body }),
  });
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
