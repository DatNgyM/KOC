import { NextResponse } from 'next/server';
import { getShopProducts } from '@/lib/shop-products';

/**
 * GET /api/cron/warm-shop
 * Pre-warm cache for shop products (effectpassio #1).
 * Call periodically via Vercel Cron; protected by CRON_SECRET.
 * Vercel sends: Authorization: Bearer <CRON_SECRET>
 */
export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  const expected = process.env.CRON_SECRET ? `Bearer ${process.env.CRON_SECRET}` : null;

  if (!expected || authHeader !== expected) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await getShopProducts(15);
    return NextResponse.json({ ok: true, message: 'Shop cache warmed' });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
