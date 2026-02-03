'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Quote, ShoppingBag, Star, Image as ImageIcon, Eye, Heart, X, Sparkles, Zap } from 'lucide-react';
import { PRODUCTS } from '@/lib/data/products';

// Load Lottie dynamic để tránh lỗi SSR
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// --- CUTE QUOTES ---
const CUTE_QUOTES = [
  "Lựa từ từ thui nha, coi chừng viêm màng túi á! 💸",
  "Hôm nay trời đẹp, hay là mình chốt đơn? ☀️",
  "Deal ngon thế này, bỏ lỡ là tiếc lắm á! 🥺",
  "Chốt đơn đi, chờ chi nữa! 💖",
  "Mua đi, tiền đi rồi tiền lại về mà! 🍃",
  "Đừng để giỏ hàng trống vắng, tội nghiệp em nó! 🛒",
  "Săn sale không khó, khó là không có tiền! 🤣",
  "Tự thưởng cho bản thân một chút đi nè! ✨"
];

// --- DATA GENERATOR ---
const FILTERS = ['Tất cả', 'Góc Chill', 'Chạy Deadline', 'Đi Học', 'Quà Tặng'];

const CONTENT_TIPS = [
  {
    title: 'Tips chụp ảnh film không bị cháy sáng',
    description: 'Luôn bật flash kể cả ban ngày khi chụp ngược sáng. Giữ khoảng cách 1.5m là đẹp nhất.',
    category: 'Góc Chill',
    bgColor: 'bg-[#FDF6EC]'
  },
  {
    title: 'Góc Setup: Ánh sáng là chìa khóa',
    description: 'Đừng dùng 1 nguồn sáng duy nhất. Hãy mix đèn bàn (vàng) và đèn màn hình (trung tính) để mắt đỡ mỏi khi chạy deadline.',
    category: 'Chạy Deadline',
    bgColor: 'bg-blue-50'
  },
  {
    title: 'Chọn quà sinh nhật cho crush?',
    description: 'Đừng tặng gấu bông nữa! Thử tặng một set nến thơm hoặc máy ảnh film xem, tinh tế hơn nhiều.',
    category: 'Quà Tặng',
    bgColor: 'bg-pink-50'
  },
  {
    title: 'Bí kíp săn sale 0Đ',
    description: 'Lưu mã trước 0h, dùng 2 thiết bị cùng lúc và đảm bảo mạng wifi căng đét nhé!',
    category: 'Đi Học',
    bgColor: 'bg-yellow-50'
  }
];

// Hàm tạo data giả (88 items)
const generateMockData = () => {
  const items: any[] = [];
  const TOTAL_ITEMS = 40; // Giảm số lượng để đỡ lag, ưu tiên sp thật
  
  // Thêm sản phẩm thật vào đầu list
  PRODUCTS.forEach((prod, i) => {
     items.push({
        type: 'product',
        ...prod,
        id: `real-product-${i}` // Override ID để dùng làm key duy nhất trong list
     });
  });
  
  // Fill thêm cho đầy
  for (let i = PRODUCTS.length; i < TOTAL_ITEMS; i++) {
    if (i > 0 && i % 7 === 0) {
      const tipIndex = Math.floor(i / 7) % CONTENT_TIPS.length;
      const tip = CONTENT_TIPS[tipIndex];
      items.push({
        type: 'content',
        id: `content-${i}`,
        ...tip,
        title: i % 2 === 0 ? tip.title : `${tip.title} #${Math.floor(i/7)}` 
      });
    } else {
      const baseProduct = PRODUCTS[i % PRODUCTS.length];
      items.push({
        type: 'product',
        ...baseProduct,
        id: `product-${i}`,
        id_suffix: i // để key không trùng
      });
    }
  }
  return items;
};

const HEADERS = [
  {
    title: "Đi Săn Đồ Xinh",
    description: (
      <>
        &quot;Hôm nay tụi mình mua gì nhỉ? Góc nhỏ này tớ gom toàn những món <span className="text-friendly-primary font-bold">chân ái</span>. 
        Mời cậu lượn một vòng xem có ưng món nào không nha!&quot;
      </>
    )
  },
  {
    title: "Góc Nhỏ Mê Đồ",
    description: (
      <>
        &quot;Tớ tin rằng những món đồ nhỏ bé cũng có tâm hồn. Ở đây lưu giữ những thứ tớ đã <span className="text-friendly-primary font-bold">phải lòng</span>. 
        Mong cậu cũng tìm thấy niềm vui ở đây.&quot;
      </>
    )
  },
  {
    title: "Tạp Hóa Chữa Lành",
    description: (
      <>
        &quot;Không chỉ là mua sắm, đây là nơi tụi mình tìm kiếm những mảnh ghép nhỏ để cuộc sống thêm <span className="text-friendly-primary font-bold">chill và đáng yêu</span>. 
        Relax và lựa đồ nhé!&quot;
      </>
    )
  },
  {
    title: "Trạm Dừng Chân",
    description: (
      <>
        &quot;Một chút xinh xắn cho ngày thêm vui. Đôi khi hạnh phúc chỉ đơn giản là tự thưởng cho mình một món quà <span className="text-friendly-primary font-bold">nhỏ xíu</span> thôi nè!&quot;
      </>
    )
  },
  {
    title: "Tiệm Mộng Mơ",
    description: (
      <>
        &quot;Góc nhỏ này dành riêng cho những <span className="text-friendly-primary font-bold">tâm hồn mộng mơ</span>. Hy vọng cậu sẽ tìm thấy một thứ gì đó khiến tim mình rung rinh nhẹ nhàng.&quot;
      </>
    )
  }
];

// --- COMPONENTS ---

// 1. Schema SEO
const ProductSchema = ({ product }: { product: any }) => {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "description": product.reviewShort,
    "brand": { "@type": "Brand", "name": product.platform },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "VND",
      "price": product.price.replace(/\D/g, ''),
      "availability": "https://schema.org/InStock"
    }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
};

// 2. Placeholder Image Component
const PlaceholderImage = ({ className, customImage, alt }: { className?: string, customImage?: string, alt?: string }) => {
   if (customImage) {
      return (
         <div className={`w-full h-full relative ${className}`}>
            {/* Sử dụng Image thật nếu có - Trong thực tế sẽ dùng Next/Image */}
            <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center relative overflow-hidden">
               <span className="absolute inset-0 flex items-center justify-center text-xs text-gray-400 font-mono p-4 text-center">
                  Ảnh thật: {customImage} <br/> (Chưa có file nên hiện text này)
               </span>
               {/* Khi có ảnh thật, bỏ comment dòng dưới và xóa span trên */}
               {/* <Image src={customImage} alt={alt || "Product"} fill className="object-cover" /> */}
            </div>
         </div>
      )
   }

   return (
      <div className={`w-full h-full bg-gray-100 flex flex-col items-center justify-center text-gray-300 ${className}`}>
         <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
         <span className="text-xs font-mono uppercase tracking-widest opacity-50">Image Placeholder</span>
      </div>
   );
};

// 3. Quick View Modal
const REVIEW_SOURCES = [
  "Reviewer",
  "Góc Review",
  "Lời Khuyên",
  "Trải Nghiệm",
  "Feedback từ người mua",
  "Đánh giá thực tế",
  "Từ hội đã mua",
  "Review 5 sao"
];

const ProductModal = ({ product, isOpen, onClose }: { product: any, isOpen: boolean, onClose: () => void }) => {
  const [reviewSource, setReviewSource] = useState("Reviewer");

  useEffect(() => {
    if (isOpen) {
      setReviewSource(REVIEW_SOURCES[Math.floor(Math.random() * REVIEW_SOURCES.length)]);
    }
  }, [isOpen]);

  if (!isOpen || !product) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
          className="bg-white rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Cột trái: Ảnh */}
          <div className="w-full md:w-1/2 bg-gray-50 relative min-h-[300px] md:min-h-full p-8 flex items-center justify-center">
             {/* NOTE: [API FORMAT] Ảnh trong Modal Popup dùng tỷ lệ 1:1 (Square) */}
             <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-inner border border-gray-200 bg-white">
                <PlaceholderImage customImage={product.image} alt={product.title} />
             </div>
             {/* KOC Badge on Image */}
             <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-yellow-500" />
                {product.tags?.[0] || "Dat's Pick"}
             </div>
          </div>

          {/* Cột phải: Thông tin & Review */}
          <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
               <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-800 leading-tight mb-2">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-2">
                     <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${product.badgeColor || 'bg-gray-100 text-gray-600'}`}>
                        {product.category}
                     </span>
                     <div className="flex items-center text-yellow-400 text-xs">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="ml-1 text-gray-500 font-bold">{product.rating}</span>
                     </div>
                     <span className="text-gray-300 text-xs">|</span>
                     <span className="text-gray-400 text-xs">Đã bán {product.sold || '999+'}</span>
                  </div>
               </div>
               <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <X className="w-5 h-5 text-gray-500" />
               </button>
            </div>

            {/* KOC Review Block */}
            <div className="bg-[#FDF6EC] p-4 rounded-xl border border-orange-100 mb-6">
               <div className="flex gap-2 items-start mb-2">
                  <Quote className="w-5 h-5 text-orange-400 fill-current shrink-0" />
                  <p className="font-hand text-lg text-gray-700 italic">
                    {product.reviewShort}
                  </p>
               </div>
               <p className="text-right text-xs font-bold text-orange-400 uppercase tracking-widest">- {reviewSource}</p>
            </div>

            {/* Price & Action */}
            <div className="mt-auto">
               <div className="flex items-end gap-3 mb-6">
                  <span className="text-3xl font-black text-friendly-primary">{product.price}</span>
                  <span className="text-sm text-gray-400 line-through mb-2">{product.originalPrice}</span>
                  <span className="mb-2 px-2 py-0.5 bg-red-100 text-red-500 text-xs font-bold rounded">-20%</span>
               </div>
               
               <div className="flex gap-3">
                  <a 
                    href={product.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 bg-friendly-dark text-white py-4 rounded-full font-bold text-lg hover:bg-black transition-colors shadow-lg flex items-center justify-center gap-2 group"
                  >
                     Mua ngay trên {product.platform}
                     <Zap className="w-5 h-5 group-hover:fill-current" />
                  </a>
                  <button className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-red-200 hover:bg-red-50 hover:text-red-500 transition-all">
                     <Heart className="w-6 h-6" />
                  </button>
               </div>
               <p className="text-center text-xs text-gray-400 mt-3">
                 *Clicking this button helps support my blog!
               </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Separated Component for Logic
function ShopContent() {
  const [filter, setFilter] = useState('Tất cả');
  // Sử dụng state để lưu data, khởi tạo trong useEffect để tránh hydration mismatch
  const [mixedItems, setMixedItems] = useState<any[]>([]);
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [headerContent, setHeaderContent] = useState<{ title: string; description: React.ReactNode } | null>(null);
  const [animationData, setAnimationData] = useState(null);
  const [randomQuote, setRandomQuote] = useState(CUTE_QUOTES[0]);
  const [visibleCount, setVisibleCount] = useState(12);

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q');
  const categoryParam = searchParams.get('category');

  // Khởi tạo data và header
  useEffect(() => {
    if (categoryParam && FILTERS.includes(categoryParam)) {
      setFilter(categoryParam);
    }
  }, [categoryParam]);

  useEffect(() => {
    const data = generateMockData();
    setMixedItems(data);
    setFilteredItems(data);
    
    // Xử lý việc xoay vòng header content theo thứ tự từ 1 -> 11
    if (typeof window !== 'undefined') {
      const STORAGE_KEY = 'koc_shop_header_index';
      
      // Lấy index cũ từ localStorage, nếu không có thì bắt đầu từ -1 để lần đầu tiên sẽ là 0
      const storedIndex = localStorage.getItem(STORAGE_KEY);
      let nextIndex = 0;

      if (storedIndex !== null) {
        nextIndex = (parseInt(storedIndex) + 1) % HEADERS.length;
      }

      // Cập nhật index mới vào state và localStorage
      setHeaderContent(HEADERS[nextIndex]);
      localStorage.setItem(STORAGE_KEY, nextIndex.toString());
    } else {
      // Fallback cho SSR
      setHeaderContent(HEADERS[0]);
    }

    // Random quote (Vẫn giữ random cho quote nhỏ của mascot)
    setRandomQuote(CUTE_QUOTES[Math.floor(Math.random() * CUTE_QUOTES.length)]);

    // Fetch animation data
    fetch('/assets/mascot/say-hi-cute-baby-girl.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch animation');
        return res.json();
      })
      .then(data => setAnimationData(data))
      .catch(err => console.error("Error loading animation:", err));
  }, []);

  useEffect(() => {
    let items = mixedItems;

    // Filter by category
    if (filter !== 'Tất cả') {
      items = items.filter(item => item.category === filter || item.type === 'content');
    }

    // Filter by search query
    if (searchQuery) {
       const lowerQuery = searchQuery.toLowerCase();
       items = items.filter(item => 
          item.title?.toLowerCase().includes(lowerQuery) || 
          item.tags?.some((t: string) => t.toLowerCase().includes(lowerQuery)) ||
          item.reviewShort?.toLowerCase().includes(lowerQuery)
       );
    }

    setFilteredItems(items);
    // Reset visible count when filter changes
    setVisibleCount(12);
  }, [filter, searchQuery, mixedItems]);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, filteredItems.length));
  };

  return (
    <>
      {/* Header Background Pattern & Mascot */}
      <section className="relative pt-32 pb-24 bg-friendly-primary/10 overflow-hidden no-scrollbar">
         {/* Wavy Divider - Top - Animated "Alive" Effect */}
         <div className="absolute top-0 left-0 w-full leading-none z-10 transform rotate-180">
            {/* Layer 1: Background Wave (Slow Drift) */}
            <div className="absolute top-0 left-0 w-[110%] h-full opacity-40 animate-wave-2 text-white/50 -ml-[5%]">
               <svg className="block w-full h-12 md:h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
               </svg>
            </div>
            
            {/* Layer 2: Mid Wave (Faster Drift) */}
            <div className="absolute top-0 left-0 w-[105%] h-full opacity-60 animate-wave-1 text-white/70">
               <svg className="block w-full h-12 md:h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
               </svg>
            </div>

            {/* Layer 3: Main Wave (Solid) */}
            <svg className="relative block w-full h-12 md:h-16 text-[#FDFBF7]" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
            </svg>
         </div>
         
         {/* Background Pattern: Grid Paper */}
         <div className="absolute inset-0 opacity-30 pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(#E5E7EB 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
         </div>

         {/* Mascot Decoration with Speech Bubble */}
         <div className="absolute right-4 md:right-20 bottom-0 z-20 hidden md:block">
            {/* Speech Bubble */}
            <motion.div
               initial={{ opacity: 0, scale: 0.8, y: 10 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               transition={{ delay: 1.2, type: 'spring' }}
               className="absolute -top-24 -left-24 bg-white p-4 rounded-2xl rounded-br-none shadow-lg border-2 border-friendly-dark/10 transform -rotate-2 max-w-[150px]"
            >
               <p className="font-hand text-friendly-dark text-sm leading-tight text-center">
                  &quot;{randomQuote}&quot;
               </p>
               {/* Tail */}
               <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white transform rotate-45 border-r-2 border-b-2 border-friendly-dark/10"></div>
            </motion.div>

            {/* Mascot Image */}
            <motion.div 
               initial={{ y: 100, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.5, type: 'spring', damping: 12 }}
               className="w-48 h-48 relative"
               style={{ background: 'transparent', overflow: 'hidden' }}
            >
                {animationData && (
                  <Lottie 
                    animationData={animationData} 
                    loop={true} 
                    className="w-full h-full object-contain drop-shadow-xl"
                    style={{ background: 'transparent', pointerEvents: 'none' }}
                  />
                )}
            </motion.div>
         </div>

         <div className="container mx-auto px-4 text-center relative z-20">
            {headerContent && (
               <motion.div
                  key={headerContent.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
               >
                   <h1 className="text-5xl md:text-6xl font-hand text-friendly-dark mb-4 drop-shadow-sm">
                      {headerContent.title}
                   </h1>
                   <p className="text-xl text-gray-600 max-w-2xl mx-auto font-display italic">
                      {headerContent.description}
                   </p>
               </motion.div>
            )}
         </div>

      </section>

      {/* Main Content */}
      <section className="py-4 relative" id="products">
      
        {/* Sticky Filter */}
        <div className="sticky top-0 z-30 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-gray-100 py-4 mb-8">
          <div className="container mx-auto px-4 overflow-x-auto no-scrollbar">
            <div className="flex gap-2 md:justify-center min-w-max">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap border
                    ${filter === f 
                      ? 'bg-friendly-dark text-white border-friendly-dark shadow-lg scale-105' 
                      : 'bg-white text-gray-500 border-gray-200 hover:border-friendly-dark hover:text-friendly-dark'
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          
          {/* Search Result Message */}
          {searchQuery && (
             <div className="mb-8 text-center animate-fade-in">
                <p className="text-lg text-gray-600">
                   Kết quả tìm kiếm cho: <span className="font-bold text-friendly-primary">&quot;{searchQuery}&quot;</span>
                   <span className="text-sm block text-gray-400">({filteredItems.length} kết quả)</span>
                </p>
             </div>
          )}

          {/* Masonry Grid Layout */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredItems.slice(0, visibleCount).map((item, index) => {
              
                  // --- RENDER CARD CONTENT (Storytelling) ---
              if (item.type === 'content') {
                 return (
                   <motion.div
                     key={item.id}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className={`break-inside-avoid rounded-2xl p-6 ${item.bgColor || 'bg-white'} border-2 border-dashed border-gray-200/50 flex flex-col justify-center min-h-[200px]`}
                   >
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Tips & Tricks</span>
                      <h2 className="font-display font-bold text-xl text-gray-800 mb-2 leading-tight">
                        {item.title}
                      </h2>
                      <p className="text-gray-600 text-sm italic">&quot;{item.description}&quot;</p>
                   </motion.div>
                 );
              }

              // --- RENDER CARD PRODUCT ---
              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="break-inside-avoid group relative bg-white rounded-2xl p-3 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300"
                >
                  <ProductSchema product={item} />
                  
                  {/* Image Area with Actions */}
                  {/* NOTE: [API FORMAT] Tỷ lệ ảnh hiển thị trên Grid là 4:5 (Portrait). Khi fetch API cần đảm bảo ảnh cover fit theo tỷ lệ này. */}
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gray-50 mb-3 group/image">
                    {/* SEO: Alt text should be descriptive */}
                    <Link href={`/shop/${item.slug}`} className="block w-full h-full">
                        <PlaceholderImage 
                            className="group-hover:scale-105 transition-transform duration-700" 
                            customImage={item.image}
                            alt={item.title}
                        />
                    </Link>
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1 pointer-events-none">
                       {item.tags?.map((tag: string) => (
                          <span key={tag} className="bg-white/90 backdrop-blur text-[10px] font-bold px-2 py-1 rounded-full shadow-sm text-friendly-dark">
                             {tag}
                          </span>
                       ))}
                    </div>

                    {/* Quick Actions (Hover) */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-[1px] pointer-events-none">
                       <button 
                         onClick={(e) => {
                           e.preventDefault();
                           e.stopPropagation();
                           setSelectedProduct(item);
                         }}
                         className="bg-white text-gray-800 px-4 py-2 rounded-full text-xs font-bold shadow-lg hover:bg-friendly-dark hover:text-white transition-colors flex items-center gap-1 pointer-events-auto cursor-pointer"
                       >
                          <Eye className="w-3 h-3" /> Xem nhanh
                       </button>
                    </div>
                  </div>

                  {/* Info */}
                  <div>
                     <div className="flex justify-between items-start mb-1">
                        <span className="text-[10px] font-bold text-gray-400 uppercase bg-gray-50 px-2 py-0.5 rounded">{item.platform}</span>
                        <div className="flex items-center gap-1 text-yellow-500 text-xs font-bold">
                          <Star className="w-3 h-3 fill-current" /> {item.rating}
                        </div>
                     </div>
                     <Link href={`/shop/${item.slug}`} className="group-hover:text-friendly-primary transition-colors block">
                        <h2 className="font-display font-bold text-gray-800 text-lg leading-snug mb-2 line-clamp-2">
                           {item.title}
                        </h2>
                     </Link>
                     <div className="flex items-center justify-between mt-2">
                        <div>
                           <span className="block text-xs text-gray-400 line-through">{item.originalPrice}</span>
                           <span className="block text-xl font-black text-friendly-primary">{item.price}</span>
                        </div>
                        <button 
                            onClick={() => setSelectedProduct(item)}
                            className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-friendly-dark group-hover:text-white transition-colors"
                        >
                           <ShoppingBag className="w-4 h-4" />
                        </button>
                     </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="text-center mt-16 pb-12">
            {visibleCount < filteredItems.length ? (
              <button 
                onClick={loadMore}
                className="px-8 py-3 bg-white border-2 border-dashed border-gray-300 rounded-full font-bold text-gray-500 hover:border-friendly-dark hover:text-friendly-dark hover:bg-friendly-dark/5 transition-all"
              >
                Xem thêm sản phẩm khác
              </button>
            ) : (
              <p className="text-gray-400 mb-4">Bạn đã xem hết {filteredItems.length} sản phẩm</p>
            )}
          </div>
        </div>

        {/* Modal Popup */}
        <ProductModal 
          product={selectedProduct} 
          isOpen={!!selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />

      </section>
    </>
  );
}

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Header />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
         <ShopContent />
      </Suspense>
      <Footer />
    </main>
  );
}
