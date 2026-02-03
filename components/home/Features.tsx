'use client'

import { Zap, Gift, Star, Link as LinkIcon, Shield, MessageCircle } from 'lucide-react'
import Image from 'next/image'

const journeySteps = [
  {
    step: '01',
    title: 'Khám Phá',
    description: 'Dạo quanh một vòng và tìm món đồ bạn ưng ý.',
    icon: Zap,
    illustration: '/assets/illustrations/blush/buyingonline2.png',
    color: 'text-friendly-primary',
    rotate: 'rotate-2'
  },
  {
    step: '02',
    title: 'Săn Deal',
    description: 'Lấy mã giảm giá độc quyền từ KOC Shop.',
    icon: Gift,
    illustration: '/assets/illustrations/blush/luv.png',
    color: 'text-green-600',
    rotate: '-rotate-2'
  },
  {
    step: '03',
    title: 'Kiểm Tra',
    description: 'Đọc review chân thực để chắc chắn về chất lượng.',
    icon: Star,
    illustration: '/assets/illustrations/blush/2.png',
    color: 'text-yellow-600',
    rotate: 'rotate-1'
  },
  {
    step: '04',
    title: 'Chốt Đơn',
    description: 'Click link chính hãng và tận hưởng niềm vui!',
    icon: LinkIcon,
    illustration: '/assets/illustrations/blush/mailsuccess.png',
    color: 'text-blue-500',
    rotate: '-rotate-3'
  }
]

export default function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-display font-black text-friendly-dark mb-4">
            Hành Trình <span className="underline decoration-wavy decoration-friendly-primary underline-offset-8">Vui Vẻ</span>
          </h2>
          <p className="text-xl text-gray-500 font-medium">
            4 bước đơn giản để trở thành người mua sắm thông thái
          </p>
        </div>

        <div className="relative">
          {/* Dashed Path Line (Visible on Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-1 border-t-4 border-dashed border-gray-200 -translate-y-1/2 hidden lg:block z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {journeySteps.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className={`relative z-10 flex flex-col items-center text-center group ${index % 2 === 0 ? 'lg:-translate-y-8' : 'lg:translate-y-8'}`}>
                  
                  {/* Step Number Badge */}
                  <div className="w-12 h-12 rounded-full bg-friendly-dark text-white font-mono font-bold flex items-center justify-center text-lg shadow-[4px_4px_0px_0px_rgba(200,200,200,1)] mb-6 z-20">
                    {item.step}
                  </div>

                  {/* Card */}
                  <div className={`w-full bg-white border-2 border-friendly-dark rounded-3xl p-6 shadow-[8px_8px_0px_0px_rgba(45,52,54,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(45,52,54,0.2)] ${item.rotate}`}>
                     
                     {/* Icon Stamp */}
                     <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center mb-4 group-hover:bg-friendly-bg group-hover:border-friendly-primary transition-colors">
                        <Icon className={`w-8 h-8 ${item.color}`} />
                     </div>

                     <h3 className="text-xl font-bold text-friendly-dark mb-2">{item.title}</h3>
                     <p className="text-gray-600 text-sm font-medium">{item.description}</p>
                     
                     {/* Tiny Illustration Sticker */}
                     <div className="absolute -top-6 -right-4 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform rotate-12">
                        <Image src={item.illustration} alt="" width={64} height={64} className="object-contain" />
                     </div>
                  </div>

                  {/* Mobile Connector Line */}
                  {index < journeySteps.length - 1 && (
                    <div className="h-12 w-0 border-l-4 border-dashed border-gray-200 lg:hidden my-4"></div>
                  )}

                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}