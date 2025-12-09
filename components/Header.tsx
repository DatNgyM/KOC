'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, User, Heart } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(3)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-minimal-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo với emoji */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-green-600 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-6 shadow-lg">
              <span className="text-2xl group-hover:scale-110 transition-transform">🛒</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold text-minimal-text leading-tight">
                KOC Shop
              </span>
              <span className="text-[10px] text-primary-600 font-semibold tracking-wide uppercase">Shopping Smart</span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-all"
              />
            </div>
          </div>

          {/* Desktop Menu với icons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-minimal-text hover:text-primary-600 transition-colors font-normal text-[15px] tracking-wide relative group">
              Trang chủ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/products" className="text-minimal-text hover:text-primary-600 transition-colors font-normal text-[15px] tracking-wide relative group">
              Sản phẩm
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-minimal-text hover:text-primary-600 transition-colors font-normal text-[15px] tracking-wide relative group">
              Về chúng tôi
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="text-minimal-text hover:text-primary-600 transition-colors font-normal text-[15px] tracking-wide relative group">
              Liên hệ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            {/* Action Icons */}
            <button className="relative p-2 text-minimal-text hover:text-primary-600 transition-colors">
              <Heart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">2</span>
            </button>
            
            <button className="relative p-2 text-minimal-text hover:text-primary-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">{cartCount}</span>
              )}
            </button>
            
            <button className="flex items-center gap-2 bg-gradient-to-r from-primary-500 to-green-600 text-white px-6 py-2.5 rounded-xl font-semibold text-[15px] tracking-wide hover:shadow-lg hover:scale-105 transition-all">
              <User className="w-4 h-4" />
              <span>Đăng nhập</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-minimal-text hover:bg-minimal-bg-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-minimal-border bg-white">
            <Link href="/" className="block text-minimal-text hover:text-primary-600 transition-colors font-normal text-[15px] tracking-wide">
              Trang chủ
            </Link>
            <Link href="/products" className="block text-minimal-text hover:text-primary-600 transition-colors font-normal text-[15px] tracking-wide">
              Sản phẩm
            </Link>
            <Link href="/about" className="block text-minimal-text hover:text-primary-600 transition-colors font-normal text-[15px] tracking-wide">
              Về chúng tôi
            </Link>
            <Link href="/contact" className="block text-minimal-text hover:text-primary-600 transition-colors font-normal text-[15px] tracking-wide">
              Liên hệ
            </Link>
            <button className="w-full bg-primary-500 text-white px-6 py-3 rounded-lg font-medium text-[15px] tracking-wide hover:bg-primary-600 transition-colors">
              Đăng nhập
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

