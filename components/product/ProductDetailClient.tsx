'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Star, ShoppingBag, Share2, Heart, Package, Truck, Shield, Check, MessageCircle, HelpCircle, FileText, PlayCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import type { Product } from '@/lib/data/products';
import { useState } from 'react';

// --- MOCK DATA FOR TABS ---
const MOCK_SPECS = [
  { label: 'Thương hiệu', value: 'Chính hãng' },
  { label: 'Xuất xứ', value: 'Nội địa / Nhập khẩu' },
  { label: 'Trọng lượng', value: '200g - 500g' },
  { label: 'Hạn sử dụng', value: '24 tháng' },
  { label: 'Loại da phù hợp', value: 'Mọi loại da' },
];

const MOCK_FAQS = [
  { q: 'Sản phẩm này có chính hãng không?', a: 'Cam kết 100% chính hãng nha, phát hiện fake đền gấp 10 luôn!' },
  { q: 'Giao hàng bao lâu thì nhận được?', a: 'Thường thì 2-4 ngày là nhận được rồi nè. Ở nội thành thì nhanh hơn á.' },
  { q: 'Da nhạy cảm có dùng được không?', a: 'Sản phẩm này thành phần lành tính, nhưng nếu da quá nhạy cảm cậu nên test thử ở vùng nhỏ trước nhé.' },
];

const MOCK_REVIEWS = [
  { user: 'Ngọc Hân', rating: 5, date: '2 ngày trước', comment: 'Giao hàng siêu nhanh, đóng gói cẩn thận. Mới dùng thử thấy ưng lắm!' },
  { user: 'Minh Anh', rating: 5, date: '1 tuần trước', comment: 'Săn được deal giá hời, chất lượng khỏi bàn. Sẽ ủng hộ shop dài dài.' },
  { user: 'Thanh Thảo', rating: 4, date: '3 tuần trước', comment: 'Hàng chuẩn, nhưng giao hàng hơi lâu xíu do tắc biên. Vẫn cho 5 sao vì shop tư vấn nhiệt tình.' },
];

// Component để render placeholder image
const PlaceholderImage = ({ customImage, alt, className }: { customImage: string | null, alt: string, className?: string }) => {
  if (customImage) {
    return (
      <Image
        src={customImage}
        alt={alt}
        fill
        className={`object-cover ${className || ''}`}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    );
  }
  
  return (
    <div className={`w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ${className || ''}`}>
      <span className="text-gray-400 text-sm font-bold">Image Placeholder</span>
    </div>
  );
};

type ProductDetailClientProps = {
  slug: string;
  product: Product;
  products?: Product[];
};

export default function ProductDetailClient({ slug, product, products = [] }: ProductDetailClientProps) {
  const [activeImage, setActiveImage] = useState<string | null>(product?.image || null);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'faq' | 'reviews'>('desc');

  if (!product) {
    return (
      <main className="min-h-screen bg-[#FDFBF7] flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
            <h1 className="text-4xl font-hand text-gray-300 mb-4">404</h1>
            <p className="text-gray-500 text-lg mb-8">Huhu, sản phẩm này hổng tìm thấy...</p>
            <Link href="/shop" className="bg-friendly-dark text-white px-6 py-3 rounded-full font-bold hover:bg-friendly-primary transition-colors">
                Quay lại trang Shop
            </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);

  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Header />
      
      {/* Breadcrumb & Back Button */}
      <section className="pt-32 pb-8 px-4 bg-white/50 backdrop-blur-sm sticky top-0 z-10 border-b border-gray-100">
         <div className="container mx-auto max-w-6xl">
            <Link href="/shop" className="inline-flex items-center gap-2 text-gray-400 hover:text-friendly-primary transition-colors font-bold text-sm">
               <ArrowLeft className="w-4 h-4" /> Quay lại Shop
            </Link>
         </div>
      </section>

      {/* Product Detail Section */}
      <section className="py-12 px-4">
         <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
               
               {/* Left Column: Images */}
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
               >
                  {/* Main Image */}
                  {/* NOTE: [API FORMAT] Ảnh chi tiết responsive: Mobile 4:5 - Desktop 1:1 */}
                  <div className="relative aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100 group">
                     <PlaceholderImage 
                        customImage={activeImage || product.image}
                        alt={product.title}
                        className="transition-transform duration-700 group-hover:scale-105"
                     />
                     {/* Badges overlay */}
                     <div className="absolute top-4 left-4 flex flex-wrap gap-2 pointer-events-none">
                        {product.tags?.map((tag: string) => (
                           <span key={tag} className="bg-white/90 backdrop-blur text-xs font-bold px-3 py-1.5 rounded-full shadow-sm text-friendly-dark border border-gray-100">
                              {tag}
                           </span>
                        ))}
                     </div>
                  </div>
                  
                  {/* Gallery Thumbnails */}
                  <div className="grid grid-cols-4 gap-3">
                        {/* Show main image as first thumbnail */}
                        <div 
                            onClick={() => setActiveImage(product.image)}
                            className={`relative aspect-square rounded-xl overflow-hidden bg-white border-2 cursor-pointer transition-all ${activeImage === product.image ? 'border-friendly-primary' : 'border-transparent hover:border-gray-200'}`}
                        >
                            <PlaceholderImage customImage={product.image} alt="Main view" />
                        </div>

                        {/* Additional Gallery Images */}
                        {product.gallery?.map((img, idx) => (
                           <div 
                                key={idx} 
                                onClick={() => setActiveImage(img)}
                                className={`relative aspect-square rounded-xl overflow-hidden bg-white border-2 cursor-pointer transition-all ${activeImage === img ? 'border-friendly-primary' : 'border-transparent hover:border-gray-200'}`}
                           >
                              <Image src={img} alt={`${product.title} - ${idx + 1}`} fill className="object-cover" />
                           </div>
                        ))}
                  </div>
               </motion.div>

               {/* Right Column: Product Info */}
               <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-8"
               >
                  {/* Header Info */}
                  <div className="space-y-4">
                      <div className="flex items-center gap-3 flex-wrap">
                         <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${product.badgeColor || 'bg-gray-100 text-gray-600'}`}>
                            {product.category}
                         </span>
                         <div className="flex items-center gap-1 text-yellow-400 bg-yellow-50 px-2 py-1 rounded-full">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            <span className="text-yellow-700 font-bold text-xs">{product.rating}/5.0</span>
                         </div>
                         <span className="text-gray-300">|</span>
                         <span className="text-gray-500 text-sm font-bold">Đã bán {product.sold || '999+'}</span>
                      </div>

                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-friendly-dark leading-tight">
                         {product.title}
                      </h1>

                      <div className="flex items-end gap-4 pb-6 border-b border-dashed border-gray-200">
                         <span className="text-4xl font-black text-friendly-primary">{product.price}</span>
                         {product.originalPrice && (
                            <>
                                <span className="text-lg text-gray-400 line-through mb-1">{product.originalPrice}</span>
                                <span className="px-2 py-1 bg-red-50 text-red-500 rounded-md text-xs font-bold mb-2">
                                    Tiết kiệm {Math.round((parseInt(product.originalPrice.replace(/\D/g,'')) - parseInt(product.price.replace(/\D/g,''))) / parseInt(product.originalPrice.replace(/\D/g,'')) * 100)}%
                                </span>
                            </>
                         )}
                      </div>
                  </div>

                  {/* KOC Review Block */}
                  <div className="bg-[#FDF6EC] p-6 rounded-2xl border border-orange-100 relative overflow-hidden">
                     <div className="absolute -right-6 -top-6 text-orange-100/50">
                        <Star className="w-32 h-32 fill-current" />
                     </div>
                     <div className="relative z-10 flex gap-4 items-start">
                        <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center shrink-0 text-orange-600 font-bold font-hand text-xl shadow-sm border border-orange-100">
                           &ldquo;
                        </div>
                        <div className="flex-1">
                           <p className="font-hand text-xl text-friendly-dark italic mb-3 leading-relaxed">
                              {product.reviewShort}
                           </p>
                           <p className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2">
                              <span className="w-8 h-[1px] bg-orange-300"></span>
                              Góc Review Honest
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-3 gap-4">
                     {[
                        { icon: Package, text: "Đổi trả 7 ngày", sub: "Nếu lỗi NSX" },
                        { icon: Truck, text: "Freeship", sub: "Đơn từ 200k" },
                        { icon: Shield, text: "Chính hãng", sub: "Cam kết 100%" }
                     ].map((item, i) => (
                         <div key={i} className="text-center p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300">
                            <item.icon className="w-6 h-6 text-friendly-primary mx-auto mb-2" />
                            <p className="text-xs font-bold text-friendly-dark">{item.text}</p>
                            <p className="text-[10px] text-gray-400 mt-0.5">{item.sub}</p>
                         </div>
                     ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4 pt-4 sticky bottom-4 z-20 md:static">
                     {product.link?.startsWith('http') ? (
                        <a
                           href={product.link}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="group w-full bg-friendly-dark text-white text-center py-4 rounded-full font-bold text-lg shadow-xl shadow-friendly-dark/20 hover:bg-friendly-primary hover:shadow-friendly-primary/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
                        >
                           <ShoppingBag className="w-6 h-6 group-hover:animate-bounce" />
                           Mua ngay trên {product.platform}
                        </a>
                     ) : (
                        <span className="block w-full bg-gray-200 text-gray-500 text-center py-4 rounded-full font-bold text-lg cursor-not-allowed flex items-center justify-center gap-3">
                           <ShoppingBag className="w-6 h-6" />
                           Liên kết đang cập nhật
                        </span>
                     )}
                     
                     <div className="flex gap-3">
                        <button className="flex-1 bg-white border-2 border-gray-200 text-gray-600 py-3 rounded-full font-bold hover:border-pink-400 hover:text-pink-500 hover:bg-pink-50 transition-all flex items-center justify-center gap-2">
                           <Heart className="w-5 h-5" />
                           Thêm vào Wishlist
                        </button>
                        <button className="flex-1 bg-white border-2 border-gray-200 text-gray-600 py-3 rounded-full font-bold hover:border-blue-400 hover:text-blue-500 hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                           <Share2 className="w-5 h-5" />
                           Chia sẻ
                        </button>
                     </div>

                     <p className="text-xs text-center text-gray-400 italic mt-4 bg-gray-50/80 backdrop-blur py-2 rounded-lg">
                        *Link mua hàng giúp mình có ly trà sữa đó, cảm ơn cậu! 💖
                     </p>
                     <p className="text-xs text-center text-gray-400 mt-2">
                        Sản phẩm trên sàn có thể đã hết hoặc đổi link; nếu báo lỗi hãy thử tìm tên sản phẩm trên {product.platform}.
                     </p>
                  </div>
               </motion.div>
            </div>
            
            {/* --- VIDEO REVIEW SECTION --- */}
            {product.videoReviews && product.videoReviews.length > 0 && (
                <div className="mt-16 md:mt-24">
                   <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                          <PlayCircle className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-friendly-dark">
                          Góc Review Thực Tế
                      </h2>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {product.videoReviews.map((video, idx) => (
                         <div key={idx} className="aspect-video rounded-2xl overflow-hidden bg-black shadow-lg relative group">
                            {video.type === 'youtube' ? (
                               <iframe 
                                  src={video.url} 
                                  title="YouTube video player" 
                                  className="w-full h-full"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                  allowFullScreen
                               ></iframe>
                            ) : (
                                // Placeholder cho TikTok (hoặc custom player)
                                <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white">
                                   <p>TikTok Embed Placeholder</p>
                                </div>
                            )}
                         </div>
                      ))}
                   </div>
                </div>
            )}

            {/* --- DETAILS TABS SECTION --- */}
            <div className="mt-16 md:mt-24">
                {/* Tabs Header */}
                <div className="flex flex-wrap gap-2 border-b border-gray-200 mb-8">
                    {[
                        { id: 'desc', label: 'Mô tả chi tiết', icon: FileText },
                        { id: 'specs', label: 'Thông số', icon: Check },
                        { id: 'faq', label: 'Hỏi đáp (FAQ)', icon: HelpCircle },
                        { id: 'reviews', label: 'Đánh giá từ bạn bè', icon: MessageCircle },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`px-6 py-3 rounded-t-xl font-bold text-sm sm:text-base flex items-center gap-2 transition-all relative top-[1px]
                                ${activeTab === tab.id 
                                    ? 'bg-white text-friendly-primary border border-gray-200 border-b-white z-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]' 
                                    : 'bg-gray-50 text-gray-500 hover:text-gray-700 hover:bg-gray-100 border-transparent'
                                }`}
                        >
                            <tab.icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tabs Content */}
                <div className="bg-white rounded-2xl p-6 md:p-10 border border-gray-200 shadow-sm min-h-[300px]">
                    
                    {/* 1. DESCRIPTION TAB */}
                    {activeTab === 'desc' && (
                        <div className="prose prose-lg max-w-none text-gray-600 animate-fade-in">
                           {product.description ? (
                               <p>{product.description}</p>
                           ) : (
                               <p className="italic text-gray-400">Đang cập nhật mô tả...</p>
                           )}
                           <div className="mt-8 grid grid-cols-2 gap-4">
                              <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">Ảnh minh họa 1</div>
                              <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">Ảnh minh họa 2</div>
                           </div>
                        </div>
                    )}

                    {/* 2. SPECS TAB */}
                    {activeTab === 'specs' && (
                        <div className="animate-fade-in max-w-2xl">
                            <table className="w-full text-left">
                                <tbody>
                                    {MOCK_SPECS.map((row, i) => (
                                        <tr key={i} className="border-b border-dashed border-gray-100 hover:bg-gray-50 transition-colors">
                                            <th className="py-4 px-4 font-bold text-gray-700 w-1/3">{row.label}</th>
                                            <td className="py-4 px-4 text-gray-600">{row.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* 3. FAQ TAB */}
                    {activeTab === 'faq' && (
                        <div className="space-y-4 animate-fade-in max-w-3xl">
                            {MOCK_FAQS.map((item, i) => (
                                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                    <h3 className="font-bold text-friendly-dark text-lg mb-2 flex gap-3">
                                        <span className="w-6 h-6 bg-friendly-dark text-white rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5">Q</span>
                                        {item.q}
                                    </h3>
                                    <p className="text-gray-600 pl-9 flex gap-3">
                                        <span className="font-bold text-friendly-primary">A:</span>
                                        {item.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* 4. REVIEWS TAB */}
                    {activeTab === 'reviews' && (
                        <div className="animate-fade-in">
                            <div className="flex flex-col md:flex-row gap-8 mb-10">
                                <div className="text-center md:text-left bg-yellow-50 p-8 rounded-2xl">
                                    <div className="text-5xl font-black text-yellow-500 mb-2">{product.rating}/5</div>
                                    <div className="flex justify-center md:justify-start gap-1 text-yellow-400 mb-2">
                                        {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
                                    </div>
                                    <p className="text-gray-500 font-medium">Dựa trên 128 đánh giá</p>
                                </div>
                                <div className="flex-1 space-y-2">
                                    {[5,4,3,2,1].map((star) => (
                                        <div key={star} className="flex items-center gap-3">
                                            <span className="w-3 font-bold text-gray-400 text-sm">{star}</span>
                                            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <div 
                                                    className="h-full bg-yellow-400 rounded-full" 
                                                    style={{ width: star === 5 ? '80%' : star === 4 ? '15%' : '5%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                {MOCK_REVIEWS.map((review, i) => (
                                    <div key={i} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                                                    {review.user.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-gray-800">{review.user}</p>
                                                    <div className="flex gap-0.5 text-yellow-400">
                                                        {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="text-xs text-gray-400">{review.date}</span>
                                        </div>
                                        <p className="text-gray-600 pl-13 ml-13">{review.comment}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Related Products Section */}
            {relatedProducts.length > 0 && (
                <div className="mt-24 pt-16 border-t border-dashed border-gray-200">
                   <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-friendly-dark">
                            Có thể bạn cũng thích ✨
                        </h2>
                        <Link href="/shop" className="text-sm font-bold text-friendly-primary hover:text-friendly-dark transition-colors">
                            Xem tất cả &rarr;
                        </Link>
                   </div>
                   
                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                      {relatedProducts.map((related) => (
                            <Link 
                               key={related.id}
                               href={`/shop/${related.slug}`}
                               className="group bg-white rounded-2xl p-3 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                               {/* NOTE: [API FORMAT] Ảnh sản phẩm liên quan: 4:5 */}
                               <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gray-50 mb-3">
                                  <PlaceholderImage customImage={related.image} alt={related.title} className="group-hover:scale-105 transition-transform duration-500"/>
                                  {related.originalPrice && (
                                     <span className="absolute bottom-2 left-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                                        Sale
                                     </span>
                                  )}
                               </div>
                               <h3 className="font-bold text-gray-800 text-sm mb-1 line-clamp-2 min-h-[2.5em] group-hover:text-friendly-primary transition-colors">
                                  {related.title}
                               </h3>
                               <div className="flex items-end justify-between">
                                  <div>
                                     <p className="text-xs text-gray-400 line-through">{related.originalPrice}</p>
                                     <p className="font-black text-friendly-primary">{related.price}</p>
                                  </div>
                                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-friendly-dark group-hover:text-white transition-colors">
                                     <ShoppingBag className="w-4 h-4" />
                                  </div>
                               </div>
                            </Link>
                         ))}
                   </div>
                </div>
            )}
         </div>
      </section>

      <Footer />
    </main>
  );
}
