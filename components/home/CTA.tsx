'use client'

import { ArrowRight, Sparkles, Zap, Gift, PartyPopper, Users, Flame } from 'lucide-react'
import Image from 'next/image'

export default function CTA() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-friendly-primary via-friendly-primary/90 to-friendly-primary">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Blush Illustration - Love/Heart */}
        <div className="absolute top-10 right-10 w-64 h-64 opacity-30 animate-float hidden lg:block rotate-12">
          <Image
            src="/assets/illustrations/blush/luv.png"
            alt="Love illustration"
            width={256}
            height={256}
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Blush Illustration - Mail Success */}
        <div className="absolute bottom-10 left-10 w-56 h-56 opacity-30 animate-float hidden lg:block -rotate-12" style={{animationDelay: '1s'}}>
          <Image
            src="/assets/illustrations/blush/mailsuccess.png"
            alt="Mail success illustration"
            width={224}
            height={224}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center animate-bounce shadow-xl border border-white/30 rotate-3">
              <PartyPopper className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-white mb-8 tracking-tight leading-tight animate-fade-in drop-shadow-sm">
            Săn Deal Hot
            <br />
            <span className="text-friendly-accent inline-block mt-2">Cực Đã Tay!</span>
          </h2>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-white/95 mb-12 max-w-2xl mx-auto leading-relaxed font-medium animate-fade-in" style={{animationDelay: '0.2s'}}>
            Tham gia hội &quot;nghiện&quot; mua sắm thông minh ngay hôm nay để không bỏ lỡ những deal xịn xò nhất!
          </p>
          
          {/* Special offer */}
          <div className="inline-flex items-center gap-3 bg-white text-friendly-primary px-8 py-4 rounded-full mb-12 font-black text-lg shadow-xl animate-bounce backdrop-blur-md">
            <Gift className="w-6 h-6" />
            <span>Tặng mã giảm giá 50k cho mem mới!</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <button className="group relative bg-friendly-dark text-white px-10 py-5 rounded-full font-black text-lg tracking-wide hover:bg-black hover:scale-110 hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 overflow-hidden">
              <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform relative z-10 text-friendly-accent" />
              <span className="relative z-10">Gia Nhập Ngay</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
            </button>
            <button className="group backdrop-blur-xl bg-white/20 border-2 border-white/50 text-white px-10 py-5 rounded-full font-bold text-lg tracking-wide hover:bg-white hover:text-friendly-primary hover:border-white hover:scale-110 hover:shadow-xl transition-all duration-300">
              <span>Tham Quan Group</span>
            </button>
          </div>

          {/* Trust indicators */}
          <div className="pt-10 border-t border-white/20 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center justify-center gap-2 mb-8 text-white/90 text-sm tracking-wide uppercase font-bold">
              <Sparkles className="w-4 h-4" />
              <p>Đã có hàng ngàn bạn tham gia</p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-lg">
              <div className="text-white font-black flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
                <Users className="w-6 h-6" />
                <span>10k+ Thành viên</span>
              </div>
              <div className="text-white font-black flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
                <Flame className="w-6 h-6 text-friendly-accent" />
                <span>500+ Deal/ngày</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}