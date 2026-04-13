import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const STRAPI_URL = process.env.STRAPI_URL ?? 'http://localhost:1337';

async function getToken() {
  const store = await cookies();
  return store.get('session')?.value ?? '';
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const token = await getToken();
  const { id } = await params;
  const body = await req.json();

  const res = await fetch(`${STRAPI_URL}/api/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ data: body }),
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const token = await getToken();
  const { id } = await params;

  const res = await fetch(`${STRAPI_URL}/api/posts/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });

  return NextResponse.json({ ok: res.ok }, { status: res.status });
}
