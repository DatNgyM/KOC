/**
 * Một nguồn sự thật cho sản phẩm shop (DRY).
 * Gọi Passio 4 keyword, merge, dùng cho cả listing và trang chi tiết.
 */
import { getPassioProducts, isPassioError } from '@/lib/passio';
import { mapPassioResponseToProducts } from '@/lib/passio-mapper';
import { getKeywordSectionsMulti } from '@/lib/data/shop-keywords';
import type { Product } from '@/lib/data/products';

export type ShopProduct = Product & { keywordSection: string };

const DEFAULT_LIMIT = 12;
const KEYWORDS_PER_SECTION = 6;

/**
 * Lấy toàn bộ sản phẩm shop: mỗi nhóm 3 keyword, merge, bỏ trùng id.
 * Dùng chung cho listing (API) và trang chi tiết (SSR).
 * Lỗi từng request không làm fail cả bộ (Promise.allSettled).
 */
export async function getShopProducts(limitPerKeyword = DEFAULT_LIMIT): Promise<ShopProduct[]> {
  const sections = getKeywordSectionsMulti(KEYWORDS_PER_SECTION);
  const results = await Promise.allSettled(
    sections.map(({ keyword, label }) =>
      getPassioProducts({ keyword, limit: limitPerKeyword }).then((data) => ({ data, label }))
    )
  );

  const seenIds = new Set<string>();
  const merged: ShopProduct[] = [];
  for (const result of results) {
    if (result.status === 'rejected') continue;
    const { data, label } = result.value;
    if (isPassioError(data) || !data) continue;
    const products = mapPassioResponseToProducts(data);
    for (const p of products) {
      if (!p.id || !p.title) continue;
      if (seenIds.has(p.id)) continue;
      seenIds.add(p.id);
      const link = p.link && p.link.startsWith('http') ? p.link : '#';
      merged.push({ ...p, link, keywordSection: label });
    }
  }
  return merged;
}
