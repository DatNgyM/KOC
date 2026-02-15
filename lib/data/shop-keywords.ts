/**
 * Từ khóa tìm kiếm theo 4 nhóm danh mục — dùng cho API Passio (Shopee/Lazada).
 * Khớp mô tả: Góc Chill (loa, đèn decor, mô hình) | Chạy Deadline (phím cơ, chuột, ghế) | Đi Học (balo, sạc, túi, bình) | Quà Tặng (keycap, lót chuột, quà).
 * Mỗi nhóm: keyword đầu = gọi API; còn lại = gợi ý mở rộng.
 */
export const SHOP_KEYWORDS = [
  {
    label: 'Góc Chill',
    description: 'Decor & Chill — sản phẩm thẩm mỹ, decor: đèn trang trí, đồ trang trí, loa, mô hình.',
    keywords: [
      'den trang tri',
      'decor phong',
      'loa bluetooth',
      'do trang tri',
      'den led trang tri',
      'mo hinh decor',
      'den ngu',
      'loa bluetooth mini',
    ],
  },
  {
    label: 'Chạy Deadline',
    description: 'Productivity — hiệu năng, công thái học, đồ bền cho dân tech/code. Sản phẩm: Phím cơ, chuột ergonomic, ghế, setup gear.',
    keywords: [
      'phim co gaming',
      'ban phim co',
      'chuot gaming',
      'chuot ergonomic',
      'ghe gaming',
      'ghe van phong',
      'man hinh may tinh',
      'webcam',
      'logitech',
    ],
  },
  {
    label: 'Đi Học',
    description: 'Student Essentials — di động, giá sinh viên, tiện lợi. Sản phẩm: Balo, sạc dự phòng, túi chống sốc, bình giữ nhiệt.',
    keywords: [
      'balo laptop',
      'sac du phong',
      'tui chong soc laptop',
      'binh giu nhiet',
      'balo sinh vien',
      'sac pin du phong',
      'binh nuoc',
      'anker',
      'xiaomi sac',
    ],
  },
  {
    label: 'Quà Tặng',
    description: 'Accessories — nhỏ gọn, dễ thương, giá rẻ. Sản phẩm: Keycap, lót chuột, quà lưu niệm.',
    keywords: [
      'keycap',
      'lot chuot gaming',
      'qua luu niem',
      'keycap custom',
      'lot chuot',
      'phu kien may tinh',
      'usb hub',
      'gia de dien thoai',
    ],
  },
] as const;

export type ShopCategoryLabel = (typeof SHOP_KEYWORDS)[number]['label'];

/**
 * Trả về cặp (label, keyword) để gọi API: mỗi nhóm dùng keyword đầu tiên.
 * Có thể đổi sang flatMap để gọi nhiều keyword per nhóm nếu cần.
 */
export function getKeywordSections(): { label: string; keyword: string }[] {
  return SHOP_KEYWORDS.map((cat) => ({
    label: cat.label,
    keyword: cat.keywords[0],
  }));
}
