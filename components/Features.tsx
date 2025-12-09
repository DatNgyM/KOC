'use client'

import { ArrowRight, Zap } from 'lucide-react'

const features = [
  {
    emoji: '⚡',
    title: 'Giá tốt nhất',
    description: 'Luôn cập nhật giá tốt nhất thị trường, tiết kiệm tối đa cho bạn',
    bgGradient: 'from-yellow-400 to-orange-500',
  },
  {
    emoji: '🎁',
    title: 'Hoa hồng hấp dẫn',
    description: 'Nhận hoa hồng khi mua sắm, tích điểm đổi quà giá trị',
    bgGradient: 'from-green-400 to-emerald-500',
  },
  {
    emoji: '🛡️',
    title: 'Bảo đảm chất lượng',
    description: 'Sản phẩm chính hãng, đảm bảo chất lượng 100%',
    bgGradient: 'from-blue-400 to-cyan-500',
  },
  {
    emoji: '🚚',
    title: 'Giao hàng nhanh',
    description: 'Giao hàng toàn quốc, nhận hàng trong 24-48h',
    bgGradient: 'from-purple-400 to-pink-500',
  },
  {
    emoji: '💳',
    title: 'Thanh toán an toàn',
    description: 'Nhiều phương thức thanh toán, bảo mật tuyệt đối',
    bgGradient: 'from-pink-400 to-rose-500',
  },
  {
    emoji: '🎧',
    title: 'Hỗ trợ 24/7',
    description: 'Đội ngũ CSKH luôn sẵn sàng hỗ trợ bạn mọi lúc',
    bgGradient: 'from-indigo-400 to-purple-500',
  },
]

export default function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-minimal-bg-secondary">
      <div className="container mx-auto">
        {/* Section Header với gradient */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-primary-50 to-green-50 border border-primary-200 rounded-full px-5 py-2">
            <Zap className="w-4 h-4 text-primary-600 animate-pulse" />
            <span className="text-sm font-semibold text-primary-700 tracking-wide uppercase">Tính năng nổi bật</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-minimal-text mb-6 tracking-tight">
            Tại sao chọn <span className="bg-gradient-to-r from-primary-600 via-green-500 to-primary-600 bg-clip-text text-transparent">KOC Shop?</span>
          </h2>
          <p className="text-xl lg:text-2xl text-minimal-text-muted max-w-3xl mx-auto font-normal leading-relaxed">
            Chúng tôi cam kết mang đến trải nghiệm mua sắm tốt nhất cho bạn với các tính năng vượt trội
          </p>
        </div>

        {/* Features Grid với emoji icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-primary-400 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Emoji icon với gradient background */}
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.bgGradient} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl`}>
                  <span className="text-4xl group-hover:scale-110 transition-transform">{feature.emoji}</span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-display font-bold text-minimal-text mb-4 tracking-tight group-hover:text-primary-600 transition-colors">{feature.title}</h3>
                  <p className="text-minimal-text-muted leading-relaxed text-base font-normal">{feature.description}</p>
                </div>
                
                {/* Hover indicator */}
                <div className="mt-6 flex items-center gap-2 text-primary-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Tìm hiểu thêm</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

