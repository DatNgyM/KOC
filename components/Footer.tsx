'use client'

import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribe:', email)
    setEmail('')
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-green-600 rounded-3xl mb-6 animate-pulse shadow-xl">
              <span className="text-5xl">📧</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Đăng ký nhận tin khuyến mãi
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              Nhận ngay mã giảm giá 10% cho đơn hàng đầu tiên và cập nhật deal hot mỗi ngày
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập email của bạn..."
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="group bg-gradient-to-r from-primary-500 to-green-600 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Đăng ký</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-green-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🛒</span>
              </div>
              <div>
                <h4 className="text-xl font-display font-bold">KOC Shop</h4>
                <p className="text-xs text-gray-400">Shopping Platform</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Nền tảng mua sắm trực tuyến uy tín với hàng ngàn sản phẩm chất lượng và hoa hồng hấp dẫn.
            </p>
            <div className="flex gap-3">
              <a href="#" className="group w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="group w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-pink-500 transition-colors">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="group w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="group w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-red-500 transition-colors">
                <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Liên kết nhanh</h4>
            <ul className="space-y-3">
              {['Giới thiệu', 'Sản phẩm', 'Khuyến mãi', 'Blog', 'Liên hệ'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-primary-400 group-hover:w-4 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Hỗ trợ</h4>
            <ul className="space-y-3">
              {['Chính sách đổi trả', 'Hướng dẫn mua hàng', 'Phương thức thanh toán', 'Câu hỏi thường gặp', 'Chính sách bảo mật'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-primary-400 group-hover:w-4 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Liên hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <span>123 Đường ABC, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:0123456789" className="hover:text-primary-400 transition-colors">
                  0123 456 789
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:support@kocshop.com" className="hover:text-primary-400 transition-colors">
                  support@kocshop.com
                </a>
              </li>
            </ul>
            
            {/* Payment Methods */}
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-3">Phương thức thanh toán</p>
              <div className="flex gap-2 flex-wrap">
                {['💳', '🏦', '📱', '💰'].map((icon, i) => (
                  <div key={i} className="w-12 h-8 bg-white/10 rounded border border-gray-700 flex items-center justify-center text-xl hover:bg-white/20 transition-colors">
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 <span className="font-semibold text-primary-400">KOC Shop</span>. All rights reserved. Made with ❤️ in Vietnam
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Điều khoản sử dụng
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Chính sách riêng tư
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
