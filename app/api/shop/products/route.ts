import { NextResponse } from 'next/server';
import { getShopProducts } from '@/lib/shop-products';

/**
 * GET /api/shop/products
 * Một request trả về toàn bộ sản phẩm shop (mỗi nhóm 3 keyword: Góc Chill, Chạy Deadline, ...).
 * Cache 3 phút; limit/keyword tùy gọi.
 */
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  const products = await getShopProducts(15);
  return NextResponse.json(products, {
    headers: {
      'Cache-Control': 'public, s-maxage=180, stale-while-revalidate=360',
    },
  });
}
