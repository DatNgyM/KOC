'use client'

import { ArrowRight, ShoppingBag, TrendingUp, Sparkles, Star, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-white via-green-50/30 to-white">
      {/* Animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating animated shapes */}
        <div className="absolute top-20 right-20 w-64 h-64 border-2 border-primary-100 rounded-lg rotate-12 opacity-30 animate-float"></div>
        <div className="absolute bottom-32 left-16 w-48 h-48 bg-primary-50 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 border border-primary-200 rounded-lg rotate-45 opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 left-1/4 w-20 h-20 bg-yellow-100 rounded-full opacity-30 animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge với animation */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-50 to-green-100 border border-primary-200 rounded-full px-5 py-2 mb-12 hover:scale-105 transition-transform animate-fade-in shadow-sm">
            <Sparkles className="w-4 h-4 text-primary-600 animate-pulse" />
            <span className="text-sm font-medium text-primary-700">🎉 Mua sắm thông minh - Giá tốt nhất</span>
            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
          </div>

          {/* Main Heading với gradient */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight tracking-tight text-minimal-text animate-fade-in">
            KOC Shop
            <br />
            <span className="bg-gradient-to-r from-primary-600 via-green-500 to-primary-600 bg-clip-text text-transparent animate-pulse">Mua sắm thông minh</span>
          </h1>

          {/* Subheading với better spacing */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-minimal-text-muted mb-8 max-w-3xl mx-auto leading-relaxed font-normal animate-fade-in" style={{animationDelay: '0.2s'}}>
            Khám phá hàng ngàn sản phẩm với giá tốt nhất. 
            <span className="text-primary-600 font-semibold"> Nhận hoa hồng hấp dẫn </span>
            khi mua sắm cùng chúng tôi.
          </p>
          
          {/* Social proof badges */}
          <div className="flex items-center justify-center gap-4 mb-12 text-sm text-minimal-text-muted animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">4.9/5</span>
              <span>(2,500+ reviews)</span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-1">
              <Zap className="w-4 h-4 text-primary-500" />
              <span><strong>500+</strong> đơn hôm nay</span>
            </div>
          </div>

          {/* CTA Buttons - Modern Interactive */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <button className="group bg-gradient-to-r from-primary-500 to-green-600 text-white px-10 py-4 rounded-xl font-semibold text-lg tracking-wide hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-lg">
              <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Bắt đầu mua sắm</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="group bg-white border-2 border-gray-200 text-minimal-text px-10 py-4 rounded-xl font-semibold text-lg tracking-wide hover:border-primary-400 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              <span>Khám phá deal hot</span>
            </button>
          </div>

          {/* Stats - Modern Cards với emoji icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-primary-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl mb-4 mx-auto group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-4xl">📦</span>
              </div>
              <div className="text-4xl font-display font-bold text-minimal-text mb-2 bg-gradient-to-r from-primary-600 to-green-500 bg-clip-text text-transparent">1000+</div>
              <div className="text-base text-minimal-text-muted font-medium">Sản phẩm đa dạng</div>
            </div>
            <div className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-primary-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl mb-4 mx-auto group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-4xl">👥</span>
              </div>
              <div className="text-4xl font-display font-bold text-minimal-text mb-2 bg-gradient-to-r from-green-600 to-primary-500 bg-clip-text text-transparent">5000+</div>
              <div className="text-base text-minimal-text-muted font-medium">Khách hàng tin dùng</div>
            </div>
            <div className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-primary-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.7s'}}>
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl mb-4 mx-auto group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-4xl">⭐</span>
              </div>
              <div className="text-4xl font-display font-bold text-minimal-text mb-2 bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent">99%</div>
              <div className="text-base text-minimal-text-muted font-medium">Hài lòng</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

