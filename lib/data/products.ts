export interface Product {
  id: string;
  slug: string;
  title: string;
  price: string;
  originalPrice: string;
  platform: string;
  rating: number;
  category: string;
  tags: string[];
  reviewShort: string;
  description?: string; // Mô tả chi tiết
  badgeColor: string;
  link: string;
  image: string | null;
  sold?: string;
  gallery?: string[]; // Ảnh thêm nếu có
  videoReviews?: {
    type: 'tiktok' | 'youtube';
    url: string;
    thumbnail?: string;
  }[];
}

// Hàm helper để tạo slug từ title
export const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

/** Sản phẩm chỉ lấy từ affiliate Passio (GET /api/passio/products). Không dùng dữ liệu mẫu. */
export const PRODUCTS: Product[] = [];
