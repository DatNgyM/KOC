'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Tag, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// --- MOCK DATA ---
const CATEGORIES = ['Tất cả', 'Review', 'Tips & Tricks', 'Lifestyle', 'Góc Chill'];

const INTRO_QUOTES = [
  "Gửi cậu, người đang tìm kiếm một chút bình yên. Hãy để những câu chuyện nhỏ và những món đồ xinh ở đây vỗ về tâm hồn cậu. Mua sắm không chỉ là sở hữu, mà là cách tụi mình yêu thương chính bản thân mình. 🌿",
  "Học cách yêu đời từ những điều giản dị. Tại đây, tụi mình chia sẻ những mẹo vặt hay ho, từ cách decor phòng ốc đến bí kíp chụp ảnh 'thần sầu'. Cùng nhau nâng cấp cuộc sống nhé! 📸",
  "Đừng để cuộc sống trôi qua tẻ nhạt. Thử F5 bản thân bằng một thói quen mới, một món đồ mới hay một góc nhìn mới xem sao? Tụi mình ở đây để đồng hành cùng cậu nè! 🌱",
  "Ở đây có bán 'vitamin vui vẻ' dưới dạng bài viết! Nếu hôm nay cậu thấy hơi 'xám xịt', hãy ghé vào đây đọc vài dòng review dễ thương để thấy đời vẫn còn nhiều màu hồng nha! 🌸",
  "Chuyện của tụi mình, chuyện của những người trẻ yêu cái đẹp. Cùng ngồi lại, chia sẻ đam mê và lan tỏa những năng lượng tích cực cùng tụi mình nhé! 🚀"
];

// CẬP NHẬT LIST BÀI VIẾT KHỚP VỚI NỘI DUNG MỚI
const BLOG_POSTS = [
  {
    id: 1,
    slug: 'review-tay-da-chet-cocoon-ca-phe', // Đã sửa slug
    title: 'Review Tẩy Da Chết Cà Phê Đắk Lắk Cocoon: "Chân Ái" Của Làn Da Việt',
    excerpt: 'Mùi cà phê thơm nức mũi, tắm xong da mướt rượt như da em bé. Vì sao hũ tẩy da chết "quốc dân" này lại hot đến thế? Cùng mình tìm hiểu nha.',
    image: '/assets/product/cocoon.jpg', // Ảnh thật
    date: '05/01/2026',
    author: 'KOC Chan',
    category: 'Review',
    tags: ['Cocoon', 'Local Brand', 'Skincare'],
    readTime: '4 phút đọc'
  },
  {
    id: 2,
    slug: 'phuc-hoi-toc-hu-ton-voi-tsubaki', // Đã sửa slug
    title: 'Phục hồi tóc hư tổn tại nhà chuẩn Salon với Tsubaki Vàng Premium',
    excerpt: 'Tóc tẩy, tóc khô xơ như rơm cũng phải chào thua trước bộ đôi gội xả thần thánh này. Bí quyết cho mái tóc "mây" là đây chứ đâu.',
    image: '/assets/product/tsubaki.jpg',
    date: '03/01/2026',
    author: 'KOC Chan',
    category: 'Tips & Tricks',
    tags: ['Haircare', 'Tsubaki', 'Premium'],
    readTime: '5 phút đọc'
  },
  {
    id: 3,
    slug: 'review-kem-chong-nang-anessa', // Đã sửa slug
    title: 'Tại sao Anessa luôn là "Nữ hoàng" trong làng kem chống nắng?',
    excerpt: 'Đắt nhưng xắt ra miếng! Khả năng kiềm dầu đỉnh cao, chống trôi siêu tốt. Liệu Anessa Gold Milk có đáng để bạn đầu tư?',
    image: '/assets/product/anessa.jpg',
    date: '28/12/2025',
    author: 'KOC Chan',
    category: 'Review',
    tags: ['Sunscreen', 'Anessa', 'Skincare'],
    readTime: '6 phút đọc'
  },
  {
    id: 4,
    slug: 'review-nuoc-hoa-hong-3w-clinic', // Đã sửa slug
    title: 'Review Nước hoa hồng 3W Clinic Collagen: Ngon - Bổ - Rẻ cho HSSV',
    excerpt: 'Chai to vật vã 150ml mà giá chỉ hơn 100k. Cấp ẩm tốt, làm sáng da nhẹ nhàng. Kèo thơm cho team học sinh sinh viên là đây.',
    image: '/assets/product/3w-clinic.jpg',
    date: '25/12/2025',
    author: 'KOC Chan',
    category: 'Tips & Tricks',
    tags: ['Skincare', 'Budget', '3W Clinic'],
    readTime: '4 phút đọc'
  },
  {
    id: 5,
    slug: 'review-sua-tam-ramzer', // Đã sửa slug
    title: 'Sữa tắm Ramzer 1 Lít: Tắm cả năm không hết, thơm như nước hoa',
    excerpt: 'Dung tích khủng, mùi hương sang trọng mà giá lại hạt dẻ. Món quà thiết thực và kinh tế cho cả gia đình.',
    image: '/assets/product/ramzer.jpg',
    date: '20/12/2025',
    author: 'KOC Chan',
    category: 'Lifestyle',
    tags: ['Bodycare', 'Ramzer', 'Review'],
    readTime: '3 phút đọc'
  }
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');
  const [introText, setIntroText] = useState(INTRO_QUOTES[0]);

  useEffect(() => {
    // Logic xoay vòng intro quote
    if (typeof window !== 'undefined') {
      const STORAGE_KEY = 'koc_blog_intro_index';
      const storedIndex = localStorage.getItem(STORAGE_KEY);
      let nextIndex = 0;

      if (storedIndex !== null) {
        nextIndex = (parseInt(storedIndex) + 1) % INTRO_QUOTES.length;
      }

      setIntroText(INTRO_QUOTES[nextIndex]);
      localStorage.setItem(STORAGE_KEY, nextIndex.toString());
    }
  }, []);

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchCategory = activeCategory === 'Tất cả' || post.category === activeCategory;
    const matchSearch = searchQuery === '' || 
                        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-friendly-primary/5">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-friendly-primary font-bold tracking-widest uppercase text-sm mb-2 block">
              Góc Nhỏ Của Gen Z
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-friendly-dark mb-6">
              Chuyện Của <br/> <span className="text-friendly-primary font-hand italic">Tụi Mình</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed min-h-[84px]">
              {introText}
            </p>

            {/* Search Bar */}
            <div className="relative max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Bạn muốn tìm bài viết về..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-100 focus:border-friendly-primary focus:outline-none focus:ring-4 focus:ring-friendly-primary/10 transition-all shadow-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter & Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-friendly-dark text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-500 border border-gray-100 hover:border-friendly-dark hover:text-friendly-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Image */}
                <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-gray-100">
                  {/* Placeholder Image Logic - Thay thế bằng ảnh thật nếu có */}
                   <div className="w-full h-full relative">
                      {/* Tạm thời dùng div placeholder, khi có ảnh thật sẽ dùng next/image */}
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 font-mono text-xs p-4 text-center">
                         Ảnh: {post.image} <br/> (Chưa có file)
                      </div>
                      {/* <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" /> */}
                   </div>
                  
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-friendly-dark shadow-sm">
                    {post.category}
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                    <span className="ml-auto text-friendly-primary font-bold">{post.readTime}</span>
                  </div>

                  <Link href={`/blog/${post.slug}`} className="block mb-3">
                    <h2 className="text-xl font-display font-bold text-gray-800 leading-snug group-hover:text-friendly-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex gap-2">
                      {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <Link href={`/blog/${post.slug}`} className="text-friendly-dark font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                      Đọc tiếp <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
             <div className="text-center py-20">
                <p className="text-gray-400 text-lg">Huhu, hổng tìm thấy bài viết nào hết trơn! 🥺</p>
                <button onClick={() => {setSearchQuery(''); setActiveCategory('Tất cả')}} className="mt-4 text-friendly-primary font-bold hover:underline">
                   Xem tất cả bài viết
                </button>
             </div>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}
