'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Calendar, User, Image as ImageIcon } from 'lucide-react';

const reviews = [
  {
    id: 1,
    title: "Review chi tiết máy ảnh Film Kodak M35: Có đáng tiền?",
    excerpt: "Mình đã chụp thử 3 cuộn film với chiếc máy này và đây là kết quả bất ngờ...",
    image: "/assets/illustrations/blush/add-photo.png",
    date: "28/12/2025",
    author: "KOC Chan",
    tag: "Công Nghệ",
    color: "bg-blue-50"
  },
  {
    id: 2,
    title: "Top 5 thỏi son dưỡng 'cứu cánh' cho mùa đông hanh khô",
    excerpt: "Không chỉ Dior, còn rất nhiều lựa chọn ngon-bổ-rẻ khác mà mình đã tìm ra.",
    image: "/assets/illustrations/blush/1.png",
    date: "26/12/2025",
    author: "KOC Chan",
    tag: "Làm Đẹp",
    color: "bg-pink-50"
  },
  {
    id: 3,
    title: "Setup góc làm việc chill tại nhà chỉ với 500k",
    excerpt: "Biến góc phòng bừa bộn thành studio xịn xò để quay TikTok.",
    image: "/assets/illustrations/blush/3.png",
    date: "20/12/2025",
    author: "KOC Chan",
    tag: "Lifestyle",
    color: "bg-yellow-50"
  }
];

export const ReviewSection = () => {
  return (
    <section className="py-24 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-friendly-primary font-bold tracking-wider uppercase text-sm mb-2 block">KOC&apos;s Journal</span>
          <h2 className="font-hand text-5xl md:text-6xl text-friendly-dark mb-4">Góc Review & Chia Sẻ</h2>
          <p className="font-display text-xl text-friendly-dark/70">Những câu chuyện đằng sau các sản phẩm.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative mb-6">
                {/* Washi Tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-friendly-primary/30 rotate-2 z-20 backdrop-blur-sm" />
                
                {/* Image Placeholder Frame */}
                <div className={`aspect-[4/3] ${post.color} rounded-2xl overflow-hidden relative shadow-japandi group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 flex items-center justify-center`}>
                  <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center text-friendly-dark/20">
                    <ImageIcon className="w-8 h-8" />
                  </div>
                  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-friendly-dark">
                    {post.tag}
                  </div>
                </div>
              </div>

              <div className="px-2">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-medium">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl text-friendly-dark mb-3 leading-tight group-hover:text-friendly-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 text-sm line-clamp-2 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-friendly-primary font-bold text-sm group/btn">
                  Đọc tiếp 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

