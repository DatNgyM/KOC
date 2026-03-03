import { NextResponse } from 'next/server';

/** GET /api/health — Kiểm tra API routes có hoạt động trên Vercel */
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({ ok: true, timestamp: Date.now() });
}
