'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Story() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side */}
          <div className="flex-1 w-full relative">
            <div className="relative aspect-square max-w-[550px] mx-auto">
              {/* Decorative blobs */}
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-friendly-secondary/20 rounded-full blur-3xl -translate-y-10 translate-x-10 animate-pulse" />
              <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-friendly-primary/20 rounded-full blur-3xl translate-y-10 -translate-x-10 animate-pulse delay-700" />
              
              <div className="relative z-10 bg-white rounded-[3rem] p-8 shadow-2xl border-4 border-gray-50 transform -rotate-2 hover:rotate-0 transition-transform duration-700">
                <Image
                  src="/assets/illustrations/blush/7.png"
                  alt="Our story"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 hidden lg:block animate-bounce-slow">
                <Image
                  src="/assets/illustrations/blush/pointer.png"
                  alt=""
                  width={128}
                  height={128}
                  className="w-full h-full object-contain transform -rotate-45"
                />
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-friendly-light rounded-full text-friendly-primary font-bold mb-6">
              Câu Chuyện Nhỏ
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-friendly-dark mb-6 leading-tight">
              Tại Sao Lại Có <br/>
              <span className="text-friendly-primary">KOC Shop?</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-500 leading-relaxed font-medium">
              <p>
                Tụi mình cũng giống như bạn, từng lạc lối giữa &quot;ma trận&quot; hàng hóa online. Mua phải hàng dỏm, xem review seeding, hay đơn giản là không biết nên chọn gì cho phù hợp.
              </p>
              <p>
                Và thế là <span className="font-bold text-friendly-dark">KOC Shop</span> ra đời! 
                Một nơi mà tụi mình chia sẻ những trải nghiệm &quot;người thật việc thật&quot;, những món đồ hay ho mà tụi mình thực sự yêu thích và tin dùng.
              </p>
            </div>

            <div className="mt-10">
              <Link 
                href="/about"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-friendly-secondary/10 text-friendly-secondary rounded-full font-bold text-lg hover:bg-friendly-secondary hover:text-white transition-all hover:-translate-y-1"
              >
                Đọc Thêm Về Tụi Mình
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}