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

export const PRODUCTS: Product[] = [
  {
    id: '1',
    slug: 'tay-te-bao-chet-body-cocoon-ca-phe-dak-lak',
    title: 'Tẩy Tế Bào Chết Body Cocoon Cà Phê Đắk Lắk',
    price: '100.000đ',
    originalPrice: '145.000đ',
    platform: 'Shopee',
    rating: 4.9,
    category: 'Quà Tặng',
    tags: ['Must Have', 'Local Brand', 'Thơm Xỉu'],
    reviewShort: 'Mùi cà phê thơm nức mũi, tắm xong da mướt rượt như da em bé luôn á! Chân ái cuộc đời.',
    description: 'Sản phẩm tẩy da chết cơ thể từ hạt cà phê Đắk Lắk nguyên chất kết hợp với bơ cacao Tiền Giang giúp làm sạch da chết hiệu quả, làm đều màu da, mang lại làn da mềm mại và rạng rỡ. Đặc biệt mùi thơm cà phê cực kỳ thư giãn.',
    badgeColor: 'bg-amber-100 text-amber-800',
    link: 'https://shopee.vn/T%E1%BA%A9y-T%E1%BA%BF-B%C3%A0o-Ch%E1%BA%BFt-Body-Cocoon-C%C3%A0-Ph%C3%AA-%C4%90%E1%BA%AFk-L%E1%BA%AFk-M%E1%BB%8Bn-Da-Cocoon-Dak-Lak-Coffee-Body-Polish-200ml-i.863612767.20746872642',
    image: '/assets/product/cocoon.jpg',
    sold: '10k+',
    videoReviews: [
      {
        type: 'youtube',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Demo link
      }
    ]
  },
  {
    id: '2',
    slug: 'bo-dau-goi-xa-tsubaki-den-phuc-hoi-toc-hu-ton',
    title: 'Bộ Dầu Gội Xả Tsubaki Đen Phục Hồi Tóc Hư Tổn',
    price: '416.000đ',
    originalPrice: '499.000đ',
    platform: 'Shopee',
    rating: 5.0,
    category: 'Quà Tặng',
    tags: ['Premium', 'Tóc Mây'],
    reviewShort: 'Cứu tinh cho tóc tẩy nhuộm đây rồi. Gội xong tóc bóng mượt, thơm sang chảnh như đi salon về.',
    description: 'Dòng sản phẩm cao cấp Tsubaki Premium EX Repair chuyên phục hồi tóc hư tổn nặng do uốn, duỗi, nhuộm. Công nghệ thẩm thấu ion giúp dưỡng chất thấm sâu vào lõi tóc, trả lại mái tóc suôn mượt, óng ả.',
    badgeColor: 'bg-gray-800 text-white',
    link: 'https://shopee.vn/B%E1%BB%99-D%E1%BA%A7u-G%E1%BB%99i-X%E1%BA%A3-Tsubaki-%C4%90en-Ph%E1%BB%A5c-H%E1%BB%93i-T%C3%B3c-H%C6%B0-T%E1%BB%95n-N%E1%BA%B7ng-Premium-EX-Intensive-Repair-Treatment-450ml-Chai-i.863612767.20064820249',
    image: '/assets/product/tsubaki.jpg',
    sold: '5k+'
  },
  {
    id: '3',
    slug: 'kem-chong-nang-anessa-mat-troi-kiem-dau',
    title: 'Kem Chống Nắng Anessa Mặt Trời Kiềm Dầu (60ml)',
    price: '529.000đ',
    originalPrice: '715.000đ',
    platform: 'Shopee',
    rating: 4.8,
    category: 'Đi Học',
    tags: ['Best Seller', 'Kiềm Dầu Đỉnh'],
    reviewShort: 'Huyền thoại chống nắng rồi, kiềm dầu siêu đỉnh, nâng tone nhẹ nhàng đi học bao xinh.',
    description: 'Sữa chống nắng Anessa Perfect UV Skincare Milk N SPF50+ PA++++ với công nghệ Auto Booster giúp lớp màng chống UV trở nên bền vững hơn khi gặp NHIỆT ĐỘ CAO - ĐỘ ẨM - MỒ HÔI - NƯỚC - MA SÁT. Kiềm dầu cực tốt.',
    badgeColor: 'bg-yellow-100 text-yellow-600',
    link: 'https://shopee.vn/Kem-Ch%E1%BB%91ng-N%E1%BA%AFng-Anessa-M%E1%BA%B7t-Tr%E1%BB%9Di-Ki%E1%BB%81m-D%E1%BA%A7u-M%E1%BB%8Bn-Da-Anessa-Perfect-UV-Sunscreen-Skincare-Milk-20ml-60ml-i.863612767.21169595793',
    image: '/assets/product/anessa.jpg',
    sold: '20k+'
  },
  {
    id: '4',
    slug: 'nuoc-hoa-hong-3w-clinic-collagen-white',
    title: 'Nước hoa hồng 3w Clinic Collagen White',
    price: '116.000đ',
    originalPrice: '150.000đ',
    platform: 'Shopee',
    rating: 4.7,
    category: 'Góc Chill',
    tags: ['Dưỡng Trắng', 'Giá HSSV'],
    reviewShort: 'Chai to oạch dùng cả năm mới hết. Cấp ẩm tốt, da sáng lên từ từ, giá quá hời cho học sinh sinh viên.',
    description: 'Nước hoa hồng làm trắng da 3W Clinic Collagen White Clear Softener giúp làm sạch sâu, cân bằng độ pH, se khít lỗ chân lông và dưỡng trắng da nhờ thành phần Collagen.',
    badgeColor: 'bg-pink-50 text-pink-500',
    link: 'https://shopee.vn/N%C6%B0%E1%BB%9Bc-hoa-h%E1%BB%93ng-3w-Clinic-Collagen-White-Clear-Softener-d%C6%B0%E1%BB%A1ng-%E1%BA%A9m-l%C3%A0m-tr%E1%BA%AFng-da-H%C3%A0n-Qu%E1%BB%91c-i.123018694.6539910991',
    image: '/assets/product/3w-clinic.jpg',
    sold: '8k+'
  },
  {
    id: '5',
    slug: 'combo-2-chai-sua-tam-truyen-trang-ramzer',
    title: 'Combo 2 Chai Sữa Tắm Truyền Trắng RAMZER (1L)',
    price: '156.000đ',
    originalPrice: '200.000đ',
    platform: 'Shopee',
    rating: 4.6,
    category: 'Góc Chill',
    tags: ['Thơm Lâu', 'Dung Tích Khủng'],
    reviewShort: 'Chai to vật vã tắm mệt nghỉ. Mùi thơm thanh mát dễ chịu lắm, tắm xong da mềm mịn thích mê.',
    description: 'Sữa tắm Ramzer hương nước hoa với dung tích "khổng lồ" 1 lít/chai. Công thức chứa Amino Acid giúp làm sạch dịu nhẹ, dưỡng ẩm và lưu hương thơm mát cả ngày dài.',
    badgeColor: 'bg-purple-100 text-purple-600',
    link: 'https://shopee.vn/COMBO-2-Chai-S%E1%BB%AFa-T%E1%BA%AFm-Truy%E1%BB%81n-Tr%E1%BA%AFng-RAMZER-Amino-Acid-1L-H%C6%B0%C6%A1ng-N%C6%B0%E1%BB%9Bc-Hoa-Thanh-M%C3%A1t-i.439314619.24985586480',
    image: '/assets/product/ramzer.jpg',
    sold: '15k+'
  },
  {
    id: '6',
    slug: 'son-duong-dior-addict-lip-glow',
    title: 'Son Dưỡng Dior Addict Lip Glow (Màu 001)',
    price: '790.000đ',
    originalPrice: '850.000đ',
    platform: 'Lazada',
    rating: 5.0,
    category: 'Quà Tặng',
    tags: ['High-end', 'Dưỡng Môi'],
    reviewShort: 'Đắt nhưng xắt ra miếng, môi mềm cả ngày, màu lên tự nhiên xinh xỉu.',
    description: 'Thỏi son dưỡng "công chúa" của mọi cô gái. Dior Addict Lip Glow không chỉ dưỡng ẩm tuyệt vời mà còn có khả năng điều chỉnh màu sắc theo độ pH của môi, tạo nên sắc hồng tự nhiên riêng biệt.',
    badgeColor: 'bg-pink-100 text-pink-600',
    link: '#',
    image: null,
    sold: '2k+',
    videoReviews: [
       {
         type: 'youtube',
         url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Demo link
       }
     ]
  },
  {
    id: '7',
    slug: 'may-chieu-mini-beecube-x2-max',
    title: 'Máy Chiếu Mini Beecube X2 Max',
    price: '3.490.000đ',
    originalPrice: '4.000.000đ',
    platform: 'Shopee',
    rating: 4.8,
    category: 'Góc Chill',
    tags: ['Home Cinema', 'Full HD'],
    reviewShort: 'Biến phòng ngủ thành rạp phim tại gia. Hình ảnh nét, loa to, xem Netflix cực cuốn.',
    description: 'Máy chiếu mini Beecube X2 Max Gen 3 Full HD 1080p, hệ điều hành Android, tích hợp sẵn Netflix, Youtube. Thiết kế nhỏ gọn, decor phòng cực xinh.',
    badgeColor: 'bg-indigo-100 text-indigo-600',
    link: '#',
    image: null,
    sold: '500+'
  },
  {
    id: '8',
    slug: 'nen-thom-yankee-candle-size-s',
    title: 'Nến Thơm Yankee Candle (Size S)',
    price: '350.000đ',
    originalPrice: '420.000đ',
    platform: 'Shopee',
    rating: 4.9,
    category: 'Góc Chill',
    tags: ['Thư Giãn', 'Thơm Phòng'],
    reviewShort: 'Mùi hương dễ chịu, giúp ngủ ngon. Đốt lên là thấy chill liền.',
    description: 'Nến thơm Yankee Candle nổi tiếng của Mỹ. Size S đốt được khoảng 20-30 giờ. Mùi hương đa dạng từ hoa cỏ, trái cây đến gỗ ấm áp, giúp thư giãn tinh thần hiệu quả.',
    badgeColor: 'bg-orange-100 text-orange-600',
    link: '#',
    image: null,
    sold: '1k+'
  },
  {
    id: '9',
    slug: 'tai-nghe-bluetooth-baseus-bowie-e3',
    title: 'Tai Nghe Bluetooth Baseus Bowie E3',
    price: '350.000đ',
    originalPrice: '600.000đ',
    platform: 'Lazada',
    rating: 4.7,
    category: 'Chạy Deadline',
    tags: ['Giá Rẻ', 'Pin Trâu'],
    reviewShort: 'Âm thanh ổn áp trong tầm giá, pin dùng được lâu, đeo êm tai.',
    description: 'Tai nghe True Wireless Baseus Bowie E3 với thiết kế earbuds đeo thoải mái, độ trễ thấp phù hợp chơi game, pin trâu lên đến 5h liên tục và 25h với kộp sạc.',
    badgeColor: 'bg-blue-100 text-blue-600',
    link: '#',
    image: null,
    sold: '5k+'
  },
  {
    id: '10',
    slug: 'balo-local-brand-chong-nuoc',
    title: 'Balo Local Brand (Chống nước)',
    price: '450.000đ',
    originalPrice: '550.000đ',
    platform: 'Shopee',
    rating: 4.8,
    category: 'Đi Học',
    tags: ['Local Brand', 'Bền Bỉ'],
    reviewShort: 'Form đẹp, đựng vừa laptop 15.6 inch. Chống nước đi mưa nhẹ vô tư.',
    description: 'Balo đi học phong cách Hàn Quốc, chất liệu vải Oxford chống thấm nước. Nhiều ngăn tiện lợi, có ngăn chống sốc cho laptop, phù hợp cho học sinh, sinh viên.',
    badgeColor: 'bg-gray-100 text-gray-800',
    link: '#',
    image: null,
    sold: '3k+'
  },
  {
    id: '11',
    slug: 'may-anh-film-kodak-m35',
    title: 'Máy Ảnh Film Kodak M35',
    price: '450.000đ',
    originalPrice: '550.000đ',
    platform: 'Lazada',
    rating: 4.8,
    category: 'Góc Chill',
    tags: ['Vintage'],
    reviewShort: 'Chụp flash buổi tối bao ảo, vibes HongKong cực.',
    description: 'Máy ảnh film point-and-shoot huyền thoại Kodak M35. Dễ sử dụng, có flash tích hợp, dùng film 35mm phổ biến. Món đồ chơi không thể thiếu cho các tín đồ mê màu ảnh retro.',
    badgeColor: 'bg-yellow-100 text-yellow-700',
    link: '#',
    image: null,
    sold: '1.5k+'
  },
  {
    id: '12',
    slug: 'den-ngu-mat-trang-3d',
    title: 'Đèn Ngủ Mặt Trăng 3D',
    price: '150.000đ',
    originalPrice: '250.000đ',
    platform: 'TikTok',
    rating: 4.6,
    category: 'Góc Chill',
    tags: ['Best Seller'],
    reviewShort: 'Ánh sáng vàng ấm, chụp hình sống ảo siêu đẹp. Có điều khiển từ xa tiện lắm.',
    description: 'Đèn ngủ in 3D mô phỏng bề mặt mặt trăng siêu thực. Có 16 màu sắc thay đổi, điều chỉnh độ sáng và chế độ nháy bằng remote. Vừa là đèn ngủ, vừa là đồ decor phòng cực xinh.',
    badgeColor: 'bg-purple-100 text-purple-600',
    link: '#',
    image: null,
    sold: '10k+'
  },
  {
    id: '13',
    slug: 'ban-phim-co-ikbc',
    title: 'Bàn Phím Cơ IKBC',
    price: '1.850.000đ',
    originalPrice: '2.200.000đ',
    platform: 'Shopee',
    rating: 5.0,
    category: 'Chạy Deadline',
    tags: ['Productivity'],
    reviewShort: 'Gõ êm, switch brown tactile sướng tay mà không ồn. Màu retro xinh xỉu.',
    description: 'Bàn phím cơ IKBC nổi tiếng với độ bền "nồi đồng cối đá" và cảm giác gõ tuyệt vời. Keycap PBT double-shot không bị bóng dầu, switch Cherry MX xịn xò.',
    badgeColor: 'bg-blue-100 text-blue-600',
    link: '#',
    image: null,
    sold: '800+'
  },
  {
    id: '14',
    slug: 'tui-tote-vai-canvas',
    title: 'Túi Tote Vải Canvas',
    price: '85.000đ',
    originalPrice: '120.000đ',
    platform: 'Shopee',
    rating: 5.0,
    category: 'Đi Học',
    tags: ['Basic'],
    reviewShort: 'Vải dày dặn, đựng vừa laptop 14inch. Đi học bao tiện.',
    description: 'Túi tote vải Canvas phong cách Ulzzang Hàn Quốc. Vải dày dặn, đường may chắc chắn, có khóa miệng túi an toàn. Đựng vừa tài liệu A4 và laptop nhỏ.',
    badgeColor: 'bg-gray-100 text-gray-600',
    link: '#',
    image: null,
    sold: '20k+'
  }
];
