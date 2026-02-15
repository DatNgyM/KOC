import { NextResponse } from 'next/server';
import { getShopProducts } from '@/lib/shop-products';

/**
 * GET /api/shop/products
 * Một request trả về toàn bộ sản phẩm shop (đã merge 4 keyword).
 * Cache 3 phút để lần sau load nhanh; limit 15/keyword giảm tải Passio.
 */
export async function GET() {
  const products = await getShopProducts(15);
  return NextResponse.json(products, {
    headers: {
      'Cache-Control': 'public, s-maxage=180, stale-while-revalidate=360',
    },
  });
}
