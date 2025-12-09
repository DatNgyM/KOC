'use client'

import { ArrowRight, Sparkles, Zap, Gift } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-primary-600 via-green-600 to-primary-700">
      {/* Animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 border-2 border-white/10 rounded-lg rotate-12 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/5 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon với emoji */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center animate-bounce shadow-xl">
              <span className="text-5xl">🎉</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight leading-tight animate-fade-in">
            Sẵn sàng bắt đầu
            <br />
            <span className="text-yellow-300">mua sắm thông minh?</span>
          </h2>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed font-normal animate-fade-in" style={{animationDelay: '0.2s'}}>
            Tham gia cùng hàng ngàn khách hàng đang tiết kiệm và nhận hoa hồng mỗi ngày
          </p>
          
          {/* Special offer */}
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-6 py-3 rounded-full mb-10 font-bold animate-bounce">
            <Gift className="w-5 h-5" />
            <span>🎉 Giảm 20% cho đơn hàng đầu tiên!</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <button className="group bg-white text-primary-600 px-10 py-4 rounded-xl font-bold text-lg tracking-wide hover:bg-yellow-50 hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center space-x-2">
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Khám phá ngay</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="group bg-white/10 border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg tracking-wide hover:bg-white/20 hover:border-white hover:scale-105 transition-all duration-300">
              <span>Tìm hiểu thêm</span>
            </button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 border-t border-white/20 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <p className="text-white/80 text-sm mb-6 tracking-wide uppercase font-semibold">✨ Được tin dùng bởi</p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-base">
              <div className="text-white font-bold flex items-center gap-2">
                <span className="text-2xl">👥</span>
                <span>5000+ Khách hàng</span>
              </div>
              <div className="w-1 h-1 bg-white/60 rounded-full"></div>
              <div className="text-white font-bold flex items-center gap-2">
                <span className="text-2xl">📦</span>
                <span>1000+ Sản phẩm</span>
              </div>
              <div className="w-1 h-1 bg-white/60 rounded-full"></div>
              <div className="text-white font-bold flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span>99% Hài lòng</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

