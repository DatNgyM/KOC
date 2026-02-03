'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, Check, X, ArrowLeft, Star, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock Data cho bài viết
const PRODUCTS = [
  {
    id: 1,
    name: 'Dior Addict Lip Glow',
    price: '850.000đ',
    rating: 4.8,
    image: '/assets/illustrations/product/Son Dưỡng Dior Addict Lip Glow-1.png', // Sử dụng ảnh có sẵn hoặc placeholder
    description: 'Biểu tượng của dòng son dưỡng cao cấp. Không chỉ dưỡng ẩm tốt mà còn lên màu tự nhiên tùy theo độ pH môi của mỗi người.',
    pros: ['Thiết kế sang trọng, tiểu thư', 'Màu sắc tự nhiên, tươi tắn', 'Dưỡng ẩm tốt, không gây bết dính'],
    cons: ['Giá thành khá cao', 'Dùng khá hao nếu thoa nhiều'],
    link: '#'
  },
  {
    id: 2,
    name: 'Mặt Nạ Ngủ Môi Laneige Berry',
    price: '350.000đ',
    rating: 4.9,
    image: '/assets/illustrations/blush/luv.png', // Placeholder
    description: 'Chân ái cho những đôi môi khô nứt nẻ nghiêm trọng. Sáng dậy môi mềm mịn như em bé, mùi hương quả mọng cực thư giãn.',
    pros: ['Khả năng cấp ẩm "thần thánh"', 'Hương thơm dễ chịu', 'Hũ lớn dùng được rất lâu'],
    cons: ['Hơi dính, chỉ thích hợp dùng ban đêm', 'Cần có thìa để lấy son vệ sinh hơn'],
    link: '#'
  },
  {
    id: 3,
    name: 'Son Dưỡng Dầu Dừa Bến Tre Cocoon',
    price: '35.000đ',
    rating: 4.7,
    image: '/assets/illustrations/blush/buyingonline2.png', // Placeholder
    description: 'Tự hào hàng Việt Nam chất lượng cao. Thành phần thuần chay từ dầu dừa Bến Tre, bơ hạt mỡ giúp môi mềm mượt tức thì.',
    pros: ['Giá siêu "hạt dẻ"', 'Thành phần thiên nhiên, an toàn', 'Không quá bóng, làm lót son màu tốt'],
    cons: ['Thiết kế đơn giản, dễ bị trầy xước', 'Cần thoa lại sau vài giờ'],
    link: '#'
  },
  {
    id: 4,
    name: 'Vaseline Lip Therapy Rosy Lips',
    price: '60.000đ',
    rating: 4.6,
    image: '/assets/illustrations/blush/buyingonline.png', // Placeholder
    description: 'Hũ son dưỡng quốc dân mà ai cũng nên có. Phiên bản Rosy Lips giúp môi ửng hồng nhẹ nhàng, trị nứt nẻ cực đỉnh.',
    pros: ['Rẻ, dễ mua ở mọi nơi', 'Dưỡng ẩm sâu, trị nẻ tốt', 'Lên màu hồng nhẹ xinh xắn'],
    cons: ['Dạng hũ phải dùng tay lấy', 'Hơi bóng mỡ'],
    link: '#'
  },
  {
    id: 5,
    name: 'Mediheal Labocare Pantenolips',
    price: '80.000đ',
    rating: 4.5,
    image: '/assets/illustrations/blush/add-photo.png', // Placeholder
    description: 'Dược mỹ phẩm Hàn Quốc chuyên trị thâm môi. Có 3 dòng: xanh (trị thâm), đỏ (dưỡng ẩm sâu), cam (có màu).',
    pros: ['Hỗ trợ trị thâm môi hiệu quả', 'Tuýp nhỏ gọn, vệ sinh', 'Giá thành hợp lý'],
    cons: ['Chất son hơi lỏng', 'Mùi hóa học nhẹ'],
    link: '#'
  }
];

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Header />
      
      {/* Article Header */}
      <header className="pt-32 pb-10 px-4 bg-friendly-primary/5">
        <div className="container mx-auto max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-friendly-primary transition-colors mb-6 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Quay lại Blog
            </Link>

            <div className="flex flex-col md:flex-row gap-4 items-center mb-6 text-sm text-gray-500">
                <span className="bg-friendly-primary/10 text-friendly-primary px-3 py-1 rounded-full font-bold">Review</span>
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> 03/01/2026
                </div>
                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" /> 3 phút đọc
                </div>
                <div className="flex items-center gap-2">
                    <User className="w-4 h-4" /> KOC Chan
                </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-display font-bold text-friendly-dark leading-tight mb-6">
                Top 5 thỏi son dưỡng &quot;cứu cánh&quot; cho đôi môi nứt nẻ mùa đông
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
                Mùa đông đến cũng là lúc đôi môi bắt đầu &quot;biểu tình&quot; với những dấu hiệu khô ráp, nứt nẻ. Đừng lo, mình đã tổng hợp 5 &quot;chiến thần&quot; dưỡng môi từ bình dân đến cao cấp để các bạn lựa chọn đây! 💄❄️
            </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="container mx-auto max-w-5xl px-4 -mt-8 mb-16 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="aspect-[21/9] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 border-dashed border-gray-300 flex items-center justify-center"
        >
            <div className="text-center p-4">
                <span className="text-gray-400 font-medium text-lg">Ảnh Cover<br/>(Tỉ lệ 21:9)</span>
            </div>
        </motion.div>
      </div>

      {/* Content */}
      <article className="container mx-auto max-w-3xl px-4 pb-20">
        <div className="prose prose-lg prose-headings:font-display prose-headings:text-friendly-dark prose-p:text-gray-600 prose-a:text-friendly-primary hover:prose-a:text-friendly-dark max-w-none">
            <p>
                Có ai như mình không, cứ đến mùa đông là môi lại khô nứt, bong tróc thậm chí là chảy máu luôn ấy. 😭 Đánh son màu lên thì... ôi thôi, lộ vân môi, da chết tùm lum, nhìn chán hẳn.
            </p>
            <p>
                Sau khi &quot;kinh qua&quot; 7749 loại son dưỡng khác nhau, mình đã chốt hạ được Top 5 em son dưỡng &quot;đỉnh của chóp&quot; này. Cùng mình check xem loại nào phù hợp với túi tiền và nhu cầu của bạn nhé!
            </p>

            <div className="my-12 space-y-16">
                {PRODUCTS.map((product, index) => (
                    <motion.div 
                        key={product.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex items-center justify-center w-12 h-12 bg-friendly-dark text-white text-2xl font-bold rounded-full font-display">
                                #{index + 1}
                            </span>
                            <div>
                                <h3 className="text-2xl font-bold m-0">{product.name}</h3>
                                <div className="flex items-center gap-2 text-yellow-400 mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'opacity-30'}`} />
                                    ))}
                                    <span className="text-gray-400 text-sm ml-1">({product.rating}/5)</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-6">
                            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 border-2 border-dashed border-gray-300 flex items-center justify-center group">
                                <div className="text-center p-4">
                                    <span className="text-gray-400 font-medium">Ảnh sản phẩm<br/>(Tỉ lệ 1:1)</span>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-gray-600 italic mb-6">
                                    &quot;{product.description}&quot;
                                </p>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-bold text-green-600 flex items-center gap-2 text-sm uppercase tracking-wider mb-2">
                                            <Check className="w-4 h-4" /> Điểm cộng
                                        </h4>
                                        <ul className="list-none p-0 space-y-2 m-0">
                                            {product.pros.map((pro, i) => (
                                                <li key={i} className="text-sm text-gray-600 pl-6 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-green-200 before:rounded-full">
                                                    {pro}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-red-500 flex items-center gap-2 text-sm uppercase tracking-wider mb-2">
                                            <X className="w-4 h-4" /> Điểm trừ
                                        </h4>
                                        <ul className="list-none p-0 space-y-2 m-0">
                                            {product.cons.map((con, i) => (
                                                <li key={i} className="text-sm text-gray-600 pl-6 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-red-200 before:rounded-full">
                                                    {con}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                            <div>
                                <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Giá tham khảo</span>
                                <div className="text-2xl font-bold text-friendly-primary">{product.price}</div>
                            </div>
                            <a 
                                href={product.link}
                                className="inline-flex items-center gap-2 bg-friendly-dark text-white px-6 py-3 rounded-full font-bold hover:bg-friendly-primary transition-colors shadow-lg hover:shadow-friendly-primary/30"
                            >
                                <Heart className="w-4 h-4" /> Mua ngay
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-friendly-primary/10 rounded-3xl p-8 text-center">
                <h3 className="text-2xl font-display font-bold text-friendly-dark mb-4">
                    Lời nhắn nhủ
                </h3>
                <p className="mb-6">
                    Mỗi loại son dưỡng đều có ưu nhược điểm riêng. Quan trọng nhất là bạn phải <strong>uống đủ nước</strong> và <strong>tẩy da chết môi</strong> thường xuyên thì dưỡng mới hiệu quả nha! Chúc các nàng luôn có đôi môi căng mọng bất chấp mùa đông! 😘
                </p>
                <div className="flex justify-center gap-4">
                    <button className="bg-white text-friendly-dark px-6 py-2 rounded-full font-bold border border-gray-200 hover:border-friendly-dark transition-all">
                        Chia sẻ bài viết
                    </button>
                    <Link href="/blog" className="bg-friendly-dark text-white px-6 py-2 rounded-full font-bold hover:bg-friendly-primary transition-all">
                        Xem thêm review khác
                    </Link>
                </div>
            </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
