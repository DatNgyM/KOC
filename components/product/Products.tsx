'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles, Paperclip } from 'lucide-react'

const collections = [
  {
    id: 1,
    title: 'Góc Thời Trang',
    count: '25 Items',
    image: '/assets/illustrations/blush/1.png',
    rotate: 'rotate-2',
    color: 'bg-red-50',
    tapeColor: 'bg-red-200',
  },
  {
    id: 2,
    title: 'Phụ Kiện',
    count: '18 Items',
    image: '/assets/illustrations/blush/2.png',
    rotate: '-rotate-1',
    color: 'bg-blue-50',
    tapeColor: 'bg-blue-200',
  },
  {
    id: 3,
    title: 'Góc Học Tập',
    count: '30 Items',
    image: '/assets/illustrations/blush/3.png',
    rotate: 'rotate-3',
    color: 'bg-yellow-50',
    tapeColor: 'bg-yellow-200',
  },
  {
    id: 4,
    title: 'Đời Sống',
    count: '42 Items',
    image: '/assets/illustrations/blush/4.png',
    rotate: '-rotate-2',
    color: 'bg-green-50',
    tapeColor: 'bg-green-200',
  },
]

export default function Products() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FDF6EC] relative overflow-hidden">
      
      {/* Background Doodles */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
         <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M10,10 Q20,20 10,30" stroke="black" fill="none" />
            <circle cx="80" cy="80" r="5" stroke="black" fill="none" />
            <path d="M90,10 L80,20 M80,10 L90,20" stroke="black" />
         </svg>
      </div>

      <div className="container mx-auto">
        
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-black text-friendly-dark mb-4">
             Bộ Sưu Tập
          </h2>
          <div className="w-24 h-2 bg-friendly-primary mx-auto rounded-full transform -rotate-1"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {collections.map((item) => (
            <Link 
              href={`/shop/category/${item.id}`}
              key={item.id}
              className={`group relative flex flex-col bg-white p-4 pb-12 shadow-xl transition-all duration-300 hover:scale-105 hover:z-10 ${item.rotate}`}
            >
               {/* Washi Tape Effect */}
               <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 ${item.tapeColor} opacity-80 transform -rotate-1 shadow-sm`}></div>

               {/* Polaroid Image Area */}
               <div className={`aspect-square ${item.color} mb-4 flex items-center justify-center border-2 border-gray-100 overflow-hidden`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="object-contain group-hover:scale-110 transition-transform duration-500 filter sepia-[0.2]"
                  />
               </div>

               {/* Handwritten Caption */}
               <div className="text-center">
                  <h3 className="text-2xl font-display font-bold text-friendly-dark mb-1 font-mono">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 font-mono text-xs tracking-widest uppercase">{item.count}</p>
               </div>

               {/* Sketchy Arrow */}
               <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-6 h-6 text-friendly-dark transform -rotate-12" />
               </div>

            </Link>
          ))}
        </div>

        <div className="mt-20 text-center">
           <Link href="/shop/all" className="inline-block px-8 py-3 border-2 border-dashed border-friendly-dark rounded-full font-bold text-friendly-dark hover:bg-friendly-dark hover:text-white transition-colors uppercase tracking-widest">
              Xem tất cả
           </Link>
        </div>

      </div>
    </section>
  )
}