import { NextRequest, NextResponse } from 'next/server';

const STRAPI_URL = process.env.STRAPI_URL ?? 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN ?? '';

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const res = await fetch(`${STRAPI_URL}/api/upload`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${STRAPI_API_TOKEN}` },
    body: formData,
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Upload failed' }, { status: res.status });
  }

  const data = await res.json();
  const file = data[0];
  const url = file.url.startsWith('http') ? file.url : `${STRAPI_URL}${file.url}`;
  return NextResponse.json({ id: file.id, url });
}
