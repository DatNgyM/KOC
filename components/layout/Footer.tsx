'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Twitter, Mail, Heart, Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white pt-32 pb-24 border-t-0 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
       {/* Curved Top Divider */}
       <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-friendly-light"></path>
        </svg>
       </div>
       
       <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-friendly-primary/5 rounded-full blur-3xl pointer-events-none" />
       <div className="absolute top-[20%] right-[-5%] w-96 h-96 bg-friendly-secondary/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 group mb-6">
                <div className="w-12 h-12 bg-friendly-dark rounded-2xl flex items-center justify-center text-white transform rotate-3 group-hover:rotate-12 transition-transform shadow-lg">
                   <Sparkles className="w-6 h-6 text-friendly-accent fill-friendly-accent" />
                </div>
                <span className="text-3xl font-display font-black text-friendly-dark tracking-tight">Đi Săn Cùng Tớ</span>
            </Link>

            <p className="text-gray-500 mb-8 max-w-sm leading-relaxed font-medium">
              Nơi tụi mình chia sẻ niềm vui mua sắm, săn deal xịn và những câu chuyện thú vị về phong cách sống.
            </p>
            
            <div className="flex items-center gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full bg-gray-50 border-2 border-gray-100 flex items-center justify-center text-gray-400 hover:bg-friendly-primary hover:border-friendly-primary hover:text-white transition-all hover:scale-110">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 sm:col-span-6">
            <h4 className="font-bold text-friendly-dark mb-6 text-lg">Khám Phá</h4>
            <ul className="space-y-4">
              <li>
                  <Link href="/blog" className="text-gray-500 hover:text-friendly-primary font-medium transition-colors hover:pl-2 inline-block">
                    Blog Review
                  </Link>
              </li>
               <li>
                  <Link href="/shop" className="text-gray-500 hover:text-friendly-primary font-medium transition-colors hover:pl-2 inline-block">
                    Săn Deal Hot
                  </Link>
              </li>
              <li>
                  <Link href="/about" className="text-gray-500 hover:text-friendly-primary font-medium transition-colors hover:pl-2 inline-block">
                    Về Tụi Mình
                  </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 sm:col-span-6">
            <h4 className="font-bold text-friendly-dark mb-6 text-lg">Hỗ Trợ</h4>
            <ul className="space-y-4">
              <li>
                  <Link href="/contact" className="text-gray-500 hover:text-friendly-primary font-medium transition-colors hover:pl-2 inline-block">
                    Liên hệ
                  </Link>
              </li>
              <li>
                  <Link href="/privacy" className="text-gray-500 hover:text-friendly-primary font-medium transition-colors hover:pl-2 inline-block">
                    Chính sách
                  </Link>
              </li>
              <li>
                  <Link href="/disclaimer" className="text-gray-500 hover:text-friendly-primary font-medium transition-colors hover:pl-2 inline-block">
                    Miễn trừ trách nhiệm
                  </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 relative">
             {/* Decor Illustration */}
            <div className="absolute -top-32 -right-10 w-48 h-48 pointer-events-none hidden lg:block animate-float">
              <Image
                src="/assets/illustrations/blush/mailnotificate.png"
                alt="Mail"
                width={192}
                height={192}
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>

            <h4 className="font-bold text-friendly-dark mb-4 text-lg">Đừng bỏ lỡ tin hay!</h4>
            <p className="text-gray-500 mb-6 font-medium">
              Nhận thông báo khi có bài review mới hoặc mã giảm giá cực hot.
            </p>
            
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email của bạn nè..." 
                className="flex-1 px-5 py-4 rounded-2xl border-2 border-gray-100 focus:outline-none focus:border-friendly-primary bg-gray-50"
              />
              <button className="px-6 py-4 bg-friendly-dark text-white rounded-2xl font-bold hover:bg-friendly-primary transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
                <Mail className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400 font-medium">
          <p className="flex items-center gap-1">
            © 2025 Đi Săn Cùng Tớ. Made with <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" /> for you.
          </p>
          <div className="flex gap-6">
            <Link href="/disclaimer" className="hover:text-friendly-dark">Điều khoản</Link>
            <Link href="/privacy" className="hover:text-friendly-dark">Bảo mật</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}