import type { Product } from '@/lib/data/products';
import { generateSlug } from '@/lib/data/products';

/**
 * Map response từ Passio API (ga.passio.eco) sang Product[] của shop.
 * Hỗ trợ nhiều format: { data: [] }, { products: [] }, { items: [] }, hoặc mảng trực tiếp.
 */
function getArrayFromResponse(res: unknown): unknown[] {
  if (Array.isArray(res)) return res;
  if (res && typeof res === 'object') {
    const obj = res as Record<string, unknown>;
    if (Array.isArray(obj.data)) return obj.data;
    if (Array.isArray(obj.products)) return obj.products;
    if (Array.isArray(obj.items)) return obj.items;
    if (Array.isArray(obj.result)) return obj.result;
  }
  return [];
}

function safeStr(v: unknown): string {
  if (v == null) return '';
  return String(v);
}

function safeNum(v: unknown, fallback: number): number {
  if (typeof v === 'number' && !Number.isNaN(v)) return v;
  const n = Number(v);
  return Number.isNaN(n) ? fallback : n;
}

/** Format số tiền VND từ ga.passio.eco (product_discounted, product_price). */
function formatVnd(value: unknown): string {
  const n = typeof value === 'number' && !Number.isNaN(value) ? value : Number(value);
  if (Number.isNaN(n)) return '0đ';
  return `${Math.round(n).toLocaleString('vi-VN')}đ`;
}

/**
 * Map một item từ Passio (ga.passio.eco) sang Product.
 * API trả về: product_name, product_id, product_discounted, product_price, tracking_link, product_picture, category_name, advertiser_id...
 */
function mapPassioItemToProduct(item: unknown, index: number): Product {
  const o = item && typeof item === 'object' ? (item as Record<string, unknown>) : {};
  const title = safeStr(o.product_name ?? o.name ?? o.title ?? o.productName ?? '').trim() || `Sản phẩm ${index + 1}`;
  const id = safeStr(o.product_id ?? o.id ?? o.productId ?? '').trim() || `passio-${index + 1}`;
  const baseSlug = safeStr(o.slug).trim() || generateSlug(title);
  const slug = id ? `${baseSlug}-${id}` : baseSlug;

  const discountedNum = o.product_discounted ?? o.sale_price ?? o.selling_price;
  const priceNum = o.product_price ?? o.original_price ?? o.regular_price ?? o.list_price;
  const price = typeof discountedNum !== 'undefined' ? formatVnd(discountedNum) : safeStr(o.price).trim() || '0đ';
  const originalPrice = typeof priceNum !== 'undefined' && Number(priceNum) > 0 ? formatVnd(priceNum) : price;

  const tracking = safeStr(o.tracking_link ?? o.link ?? o.url ?? o.affiliate_url ?? '').trim();
  const direct = safeStr(o.product_link ?? o.product_url ?? '').trim();
  const link =
    (tracking.startsWith('http') ? tracking : direct.startsWith('http') ? direct : tracking || direct) || '#';
  const image = safeStr(o.product_picture ?? o.image ?? o.image_url ?? o.thumbnail ?? o.picture ?? '').trim() || null;
  const catFirst = Array.isArray(o.categories) ? o.categories[0] : undefined;
  const category = safeStr(o.category_name ?? o.category ?? catFirst ?? '').trim() || 'Quà Tặng';
  const platform = safeStr(o.advertiser_id ?? o.platform ?? o.source ?? o.store ?? '').trim() || 'Shopee';
  const rating = safeNum(o.rating ?? o.star ?? o.avg_rating, 4.5);
  const tags = Array.isArray(o.tags) ? o.tags.map((t: unknown) => String(t)) : (o.tags ? [String(o.tags)] : [category || 'Must Have']);
  const reviewShort = safeStr(o.reviewShort ?? o.review_short ?? o.description ?? o.short_description ?? '').trim() || 'Sản phẩm chất lượng, đáng thử!';
  const description = safeStr(o.description ?? o.long_description ?? '').trim() || undefined;
  const sold = safeStr(o.sold ?? o.sales_count ?? o.total_sold ?? '').trim() || undefined;

  return {
    id,
    slug,
    title,
    price,
    originalPrice,
    platform,
    rating,
    category,
    tags,
    reviewShort,
    description: description || undefined,
    badgeColor: 'bg-amber-100 text-amber-800',
    link,
    image: image || null,
    sold: sold || undefined,
  };
}

/**
 * Chuyển response Passio API thành Product[] để dùng trên shop.
 * Trả về [] nếu không parse được.
 */
export function mapPassioResponseToProducts(response: unknown): Product[] {
  const arr = getArrayFromResponse(response);
  return arr.map((item, i) => mapPassioItemToProduct(item, i));
}
