'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Search, Menu, X, ChevronDown, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const HOME_TOOLTIPS = [
  "Về nhà thui nào! 🏠",
  "Bấm phát bay về tổ ấm liền 🚀",
  "Quay đầu là bờ, ai ngờ là... trang chủ 🤣",
  "Nhớ nhà chưa? Về thôi! 🥰",
  "Back home, sweet home 🍬",
  "Đi đâu loanh quanh cho đời mỏi mệt? Về nhà thui 🎶",
  "Trang chủ vẫy gọi 🌊"
];

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  
  // State cho search
  const [searchQuery, setSearchQuery] = useState('');

  // State cho tooltip
  const [showHomeTooltip, setShowHomeTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState(HOME_TOOLTIPS[0]);

  const handleHomeHover = () => {
    // Random câu nói mới mỗi khi hover
    const randomText = HOME_TOOLTIPS[Math.floor(Math.random() * HOME_TOOLTIPS.length)];
    setTooltipText(randomText);
    setShowHomeTooltip(true);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50">
      <div className="bg-white/90 backdrop-blur-md shadow-sm relative z-20">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-friendly-primary rounded-xl flex items-center justify-center text-white transform rotate-3 group-hover:rotate-12 transition-transform">
               <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-black text-friendly-dark tracking-tight">Đi Săn Cùng Tớ</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            
            <div 
              className="relative"
              onMouseEnter={handleHomeHover}
              onMouseLeave={() => setShowHomeTooltip(false)}
            >
              <Link href="/" className="px-3 py-2 text-base font-bold text-gray-600 hover:text-friendly-primary transition-colors block">
                Trang Chủ
              </Link>
              
              <AnimatePresence>
                {showHomeTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.9 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-friendly-dark text-white text-xs font-bold rounded-xl whitespace-nowrap shadow-xl z-50 pointer-events-none"
                  >
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-friendly-dark transform rotate-45"></div>
                    {tooltipText}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Nav Item: Shop */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('shop')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-base font-bold text-gray-600 hover:text-friendly-primary transition-colors px-3 py-4">
                Cửa Hàng
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {openDropdown === 'shop' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 z-50"
                  >
                     <div className="bg-white border-2 border-gray-100 shadow-xl rounded-2xl py-2 overflow-hidden">
                        <Link href="/shop" className="block px-6 py-3 text-sm font-medium text-gray-600 hover:bg-friendly-light hover:text-friendly-primary">Tất cả sản phẩm</Link>
                        <Link href="/shop?category=Góc Chill" className="block px-6 py-3 text-sm font-medium text-gray-600 hover:bg-friendly-light hover:text-friendly-primary">Góc Chill</Link>
                        <Link href="/shop?category=Chạy Deadline" className="block px-6 py-3 text-sm font-medium text-gray-600 hover:bg-friendly-light hover:text-friendly-primary">Chạy Deadline</Link>
                        <Link href="/shop?category=Đi Học" className="block px-6 py-3 text-sm font-medium text-gray-600 hover:bg-friendly-light hover:text-friendly-primary">Đi Học</Link>
                        <Link href="/shop?category=Quà Tặng" className="block px-6 py-3 text-sm font-medium text-gray-600 hover:bg-friendly-light hover:text-friendly-primary">Quà Tặng</Link>
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Nav Item: Collections */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('collections')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-base font-bold text-gray-600 hover:text-friendly-primary transition-colors px-3 py-4">
                Blog Review
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {openDropdown === 'collections' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 z-50"
                  >
                     <div className="bg-white border-2 border-gray-100 shadow-xl rounded-2xl py-2 overflow-hidden">
                        <Link href="/blog" className="block px-6 py-3 text-sm font-medium text-gray-600 hover:bg-friendly-light hover:text-friendly-primary">Tất cả bài viết</Link>
                        <Link href="/blog?category=Lifestyle" className="block px-6 py-3 text-sm font-medium text-gray-600 hover:bg-friendly-light hover:text-friendly-primary">Góc Lifestyle</Link>
                        <Link href="/blog?category=Review" className="block px-6 py-3 text-sm font-medium text-gray-600 hover:bg-friendly-light hover:text-friendly-primary">Review Sản Phẩm</Link>
                        <Link href="/blog?category=Tips" className="block px-6 py-3 text-sm font-medium text-gray-600 hover:bg-friendly-light hover:text-friendly-primary">Tips & Tricks</Link>
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

             {/* Nav Item: Brands */}
             <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('brands')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-base font-bold text-gray-600 hover:text-friendly-primary transition-colors px-3 py-4">
                Top Deal
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {openDropdown === 'brands' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 z-50"
                  >
                     <div className="bg-white border-2 border-gray-100 shadow-xl rounded-2xl py-2 overflow-hidden">
                        <Link href="/deals/shopee" className="block px-6 py-3 text-sm font-medium text-gray-600 hover:bg-friendly-light hover:text-friendly-primary">Mã Shopee</Link>
                        <Link href="/deals/lazada" className="block px-6 py-3 text-sm font-medium text-gray-600 hover:bg-friendly-light hover:text-friendly-primary">Mã Lazada</Link>
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className="px-4 py-2 text-base font-bold text-gray-600 hover:text-friendly-primary transition-colors">
              Về Tụi Mình
            </Link>
            
            <Link href="/contact" className="px-4 py-2 ml-4 bg-friendly-dark text-white rounded-full font-bold hover:bg-friendly-primary transition-colors shadow-md hover:shadow-lg">
              Kết Nối
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-3 text-gray-600 hover:text-friendly-primary hover:bg-friendly-light rounded-full transition-all"
            >
              <Search className="w-6 h-6" />
            </button>

            <button
              className="lg:hidden p-3 text-gray-600 hover:text-friendly-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

          {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 space-y-2 animate-fade-in">
            <Link href="/" className="block px-4 py-3 rounded-2xl text-base font-bold text-gray-700 hover:bg-friendly-light hover:text-friendly-primary">Trang Chủ</Link>
            <Link href="/shop" className="block px-4 py-3 rounded-2xl text-base font-bold text-gray-700 hover:bg-friendly-light hover:text-friendly-primary">Cửa Hàng</Link>
            <Link href="/blog" className="block px-4 py-3 rounded-2xl text-base font-bold text-gray-700 hover:bg-friendly-light hover:text-friendly-primary">Blog Review</Link>
            <Link href="/about" className="block px-4 py-3 rounded-2xl text-base font-bold text-gray-700 hover:bg-friendly-light hover:text-friendly-primary">Về Tụi Mình</Link>
            <Link href="/contact" className="block px-4 py-3 rounded-2xl text-base font-bold text-gray-700 hover:bg-friendly-light hover:text-friendly-primary">Kết Nối</Link>
          </div>
        )}
      </nav>
      </div>

      {/* Decorative Wave */}
      <div className="absolute top-[99%] left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg className="relative block w-[calc(100%+1.3px)] h-[20px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="fill-white/90"></path>
        </svg>
      </div>

      {/* Search Bar Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg py-6 animate-fade-in z-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSearchSubmit} className="relative max-w-2xl mx-auto">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm món đồ chân ái..."
                className="w-full pl-14 pr-6 py-4 rounded-full border-2 border-gray-100 focus:outline-none focus:border-friendly-primary focus:ring-4 focus:ring-friendly-primary/10 bg-gray-50 font-medium"
                autoFocus
              />
            </form>
          </div>
        </div>
      )}
    </header>
  )
}
