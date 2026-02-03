'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShoppingBag, Star, Image as ImageIcon, ArrowRight, Sparkles } from 'lucide-react';
import { FloatingElement } from './FloatingElement';

// Chỉ lấy 4 sản phẩm tiêu biểu nhất để show trang chủ
const TOP_PRODUCTS = [
  {
    id: 1,
    title: 'Son Dưỡng Dior Addict Lip Glow',
    price: '750.000đ',
    originalPrice: '850.000đ',
    platform: 'Shopee',
    rating: 4.9,
    sold: '1.2k',
    link: 'https://shopee.vn',
    tags: ['Best Seller'],
  },
  {
    id: 2,
    title: 'Máy Ảnh Film Kodak M35',
    price: '450.000đ',
    originalPrice: '550.000đ',
    platform: 'Lazada',
    rating: 4.8,
    sold: '850',
    link: 'https://lazada.vn',
    tags: ['Vintage'],
  },
  {
    id: 3,
    title: 'Đèn Ngủ Mặt Trăng 3D',
    price: '150.000đ',
    originalPrice: '250.000đ',
    platform: 'TikTok',
    rating: 4.6,
    sold: '1.1k',
    link: 'https://tiktok.com',
    tags: ['Decor'],
  },
  {
    id: 4,
    title: 'Túi Tote Vải Canvas',
    price: '85.000đ',
    originalPrice: '120.000đ',
    platform: 'Shopee',
    rating: 5.0,
    sold: '5k+',
    link: 'https://shopee.vn',
    tags: ['Must Have'],
  },
];

const ProductCard = ({ product }: { product: typeof TOP_PRODUCTS[0] }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl border border-gray-100 flex flex-col h-full transition-all duration-300"
    >
      {/* Discount Badge */}
      <div className="absolute top-4 left-4 z-10 bg-red-100 text-red-500 font-bold text-xs px-2 py-1 rounded-full shadow-sm">
        -20%
      </div>

      {/* Platform Badge */}
      <div className="absolute top-4 right-4 z-10 bg-white/90 text-xs font-bold px-2 py-1 rounded-full shadow-sm border border-gray-100 text-gray-500 uppercase">
        {product.platform}
      </div>

      {/* Image Placeholder */}
      <div className="relative aspect-square mb-4 rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center group-hover:bg-friendly-primary/5 transition-colors border border-gray-100">
         <div className="flex flex-col items-center opacity-30">
            <ImageIcon className="w-10 h-10 mb-2" />
            <span className="text-[10px] font-mono uppercase">Image Placeholder</span>
         </div>
         {/* Tag */}
         <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold shadow-sm flex items-center gap-1 whitespace-nowrap">
            <Sparkles className="w-3 h-3 text-yellow-500" />
            {product.tags[0]}
         </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="font-display font-bold text-friendly-dark text-lg mb-1 line-clamp-2 leading-tight group-hover:text-friendly-primary transition-colors">
          {product.title}
        </h3>
        
        <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center text-yellow-400 text-xs">
                <Star className="w-3 h-3 fill-current" />
                <span className="ml-1 text-gray-500 font-medium">{product.rating}</span>
            </div>
            <span className="text-gray-300 text-xs">|</span>
            <span className="text-gray-400 text-xs">Đã bán {product.sold}</span>
        </div>

        <div className="mt-auto flex items-end justify-between border-t border-dashed border-gray-100 pt-3">
          <div>
            <span className="block text-gray-400 text-xs line-through">{product.originalPrice}</span>
            <span className="block text-friendly-primary font-bold text-xl">{product.price}</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-friendly-dark text-white p-3 rounded-full shadow-lg hover:bg-friendly-primary transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export const AffiliateGrid = () => {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-white"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block bg-friendly-primary/10 rounded-full px-6 py-2 mb-4"
          >
            <span className="text-friendly-primary font-bold tracking-wider uppercase text-sm">Top Deal Hôm Nay</span>
          </motion.div>
          <h2 className="font-hand text-4xl md:text-6xl text-friendly-dark mb-4">
            Top Deal Mình Chọn
          </h2>
          <p className="font-display text-xl text-friendly-dark/70 max-w-2xl mx-auto">
            Những sản phẩm &quot;must-have&quot; giá hời nhất hôm nay.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {TOP_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-16">
            <Link href="/shop" className="group inline-flex items-center gap-2 px-8 py-4 bg-friendly-dark text-white rounded-full font-bold text-lg hover:bg-friendly-primary transition-all shadow-lg hover:shadow-friendly-primary/30">
                Xem Tất Cả Sản Phẩm
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
      </div>
    </section>
  );
};