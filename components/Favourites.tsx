'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star } from 'lucide-react'

const favourites = [
  {
    title: 'Góc Làm Việc',
    description: 'Decor góc làm việc xinh xắn giúp bạn có thêm cảm hứng.',
    link: '/shop/work',
    linkText: 'Xem gợi ý',
    image: '/assets/illustrations/blush/8.png',
    bg: 'bg-friendly-primary/10',
    rotate: 'rotate-1',
    note: 'Must Have!',
  },
  {
    title: 'Quà Tặng',
    description: 'Những món quà nhỏ xinh, ý nghĩa dành tặng người thương.',
    link: '/shop/gifts',
    linkText: 'Chọn quà',
    image: '/assets/illustrations/blush/9.png',
    bg: 'bg-friendly-secondary/10',
    rotate: '-rotate-2',
    note: 'Cute!',
  },
  {
    title: 'Đồ Decor',
    description: 'Săn lùng những món đồ trang trí độc đáo, không đụng hàng.',
    link: '/shop/decor',
    linkText: 'Săn đồ',
    image: '/assets/illustrations/blush/10.png',
    bg: 'bg-friendly-accent/10',
    rotate: 'rotate-3',
    note: 'New!',
  },
]

export default function Favourites() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Paper texture overlay */}
       <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block border-b-4 border-friendly-primary mb-4 transform -rotate-2">
             <h2 className="text-4xl md:text-5xl font-display font-black text-friendly-dark">
               Mục Yêu Thích
             </h2>
          </div>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-mono">
            Trang sách này dành riêng cho những items hot nhất tuần qua.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {favourites.map((item, index) => (
            <Link 
              key={index}
              href={item.link}
              className={`group flex flex-col h-full bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] border-2 border-black rounded-xl transition-transform hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)] ${item.rotate}`}
            >
              {/* Sticky Note Badge */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-200 shadow-md flex items-center justify-center transform rotate-12 rounded-sm z-20">
                 <span className="font-handwriting font-bold text-red-500 transform -rotate-12">{item.note}</span>
              </div>

              {/* Image Card */}
              <div className={`aspect-square ${item.bg} border-2 border-dashed border-gray-300 rounded-lg mb-6 relative overflow-hidden group-hover:border-friendly-dark transition-colors`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-friendly-dark mb-2 font-display">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 flex-grow font-medium border-l-4 border-friendly-primary pl-4">
                {item.description}
              </p>
              
              <span className="inline-flex items-center gap-2 text-friendly-dark font-bold group-hover:gap-3 transition-all uppercase tracking-wider text-sm border-b-2 border-transparent group-hover:border-friendly-dark w-fit">
                {item.linkText}
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}