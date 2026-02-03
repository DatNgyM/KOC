'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, ArrowRight } from 'lucide-react'

const journalPosts = [
  {
    id: 1,
    category: 'Mẹo Hay',
    title: 'Cách làm việc tại nhà mà vẫn hiệu quả',
    excerpt: 'Những tips nhỏ giúp bạn tập trung hơn khi work from home nè...',
    link: '/journal/1',
    image: '/assets/illustrations/blush/11.png',
    date: '20 Oct 2024',
    author: 'Minh'
  },
  {
    id: 2,
    category: 'Sống Xanh',
    title: 'Tái chế đồ cũ thành vật dụng xinh xắn',
    excerpt: 'Đừng vội vứt đi, thử biến tấu chúng thành đồ decor cực chất nhé!',
    link: '/journal/2',
    image: '/assets/illustrations/blush/12.png',
    date: '18 Oct 2024',
    author: 'Lan'
  },
  {
    id: 3,
    category: 'Góc Chia Sẻ',
    title: 'Những món quà ý nghĩa tặng hội bạn thân',
    excerpt: 'Gợi ý quà tặng vừa túi tiền mà vẫn cực kỳ tình cảm.',
    link: '/journal/3',
    image: '/assets/illustrations/blush/13.png',
    date: '15 Oct 2024',
    author: 'Vy'
  },
]

export default function Journal() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-friendly-light">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-16 gap-6">
          <div className="text-center sm:text-left">
            <h2 className="text-4xl font-display font-black text-friendly-dark mb-2">Góc Chia Sẻ</h2>
            <p className="text-gray-500 font-medium">Những câu chuyện nhỏ & kinh nghiệm hay ho</p>
          </div>
          <Link 
            href="/journal"
            className="px-8 py-4 bg-white border-2 border-gray-100 rounded-full font-bold text-friendly-dark hover:border-friendly-dark hover:bg-friendly-dark hover:text-white transition-all shadow-sm"
          >
            Xem Tất Cả
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {journalPosts.map((post) => (
            <Link key={post.id} href={post.link} className="group bg-white rounded-[2rem] p-5 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-friendly-primary/20">
              {/* Image */}
              <div className="aspect-video bg-friendly-bg rounded-3xl mb-6 relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="px-2 pb-2">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3 font-bold">
                  <span className="text-friendly-primary uppercase tracking-wider bg-friendly-primary/10 px-2 py-1 rounded-md">{post.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-friendly-dark mb-3 leading-snug group-hover:text-friendly-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2 font-medium">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-600">
                    <div className="w-8 h-8 bg-friendly-secondary/20 rounded-full flex items-center justify-center text-friendly-secondary">
                      <User className="w-4 h-4" />
                    </div>
                    {post.author}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-friendly-primary group-hover:text-white transition-colors">
                     <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}