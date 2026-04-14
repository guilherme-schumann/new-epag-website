import { NextRequest, NextResponse } from 'next/server';
import { MOCK_CATEGORIES } from '@/lib/strapi';

const STRAPI_URL = process.env.STRAPI_URL ?? 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN ?? '';
const USE_MOCK = process.env.MOCK_DB === 'true';

export async function GET() {
  if (USE_MOCK) {
    return NextResponse.json({ data: MOCK_CATEGORIES });
  }
  const res = await fetch(`${STRAPI_URL}/api/categories?sort=label:asc`, {
    headers: { Authorization: `Bearer ${STRAPI_API_TOKEN}` },
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
  const body = await req.json();
  const res = await fetch(`${STRAPI_URL}/api/categories`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${STRAPI_API_TOKEN}` },
    body: JSON.stringify({ data: body }),
  });
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
