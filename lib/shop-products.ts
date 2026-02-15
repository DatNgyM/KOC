/**
 * Một nguồn sự thật cho sản phẩm shop (DRY).
 * Gọi Passio 4 keyword, merge, dùng cho cả listing và trang chi tiết.
 */
import { getPassioProducts, isPassioError } from '@/lib/passio';
import { mapPassioResponseToProducts } from '@/lib/passio-mapper';
import { getKeywordSections } from '@/lib/data/shop-keywords';
import type { Product } from '@/lib/data/products';

export type ShopProduct = Product & { keywordSection: string };

const DEFAULT_LIMIT = 15;

/**
 * Lấy toàn bộ sản phẩm shop: 4 keyword song song, merge, gán keywordSection.
 * Dùng chung cho listing (API) và trang chi tiết (SSR).
 * Lỗi từng nhóm không làm fail cả bộ (Promise.allSettled).
 */
export async function getShopProducts(limitPerKeyword = DEFAULT_LIMIT): Promise<ShopProduct[]> {
  const sections = getKeywordSections();
  const results = await Promise.allSettled(
    sections.map(({ keyword, label }) =>
      getPassioProducts({ keyword, limit: limitPerKeyword }).then((data) => ({ data, label }))
    )
  );

  const merged: ShopProduct[] = [];
  for (const result of results) {
    if (result.status === 'rejected') continue;
    const { data, label } = result.value;
    if (isPassioError(data) || !data) continue;
    const products = mapPassioResponseToProducts(data);
    for (const p of products) {
      if (!p.link || p.link === '#' || !p.link.startsWith('http')) continue;
      merged.push({ ...p, keywordSection: label });
    }
  }
  return merged;
}
