'use client'

import { ShoppingCart, Heart, Eye, Star, TrendingUp, Zap } from 'lucide-react'
import { useState } from 'react'

const categories = [
  { id: 'all', name: 'Tất cả', icon: '🛍️' },
  { id: 'electronics', name: 'Điện tử', icon: '📱' },
  { id: 'fashion', name: 'Thời trang', icon: '👕' },
  { id: 'home', name: 'Gia dụng', icon: '🏠' },
  { id: 'beauty', name: 'Làm đẹp', icon: '💄' },
  { id: 'sports', name: 'Thể thao', icon: '⚽' },
]

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    category: 'electronics',
    price: 29990000,
    originalPrice: 34990000,
    discount: 14,
    rating: 4.9,
    reviews: 256,
    image: '📱',
    badge: 'Hot',
    commission: '5%',
    sold: 1250,
  },
  {
    id: 2,
    name: 'MacBook Air M3',
    category: 'electronics',
    price: 28990000,
    originalPrice: 32990000,
    discount: 12,
    rating: 4.8,
    reviews: 189,
    image: '💻',
    badge: 'Mới',
    commission: '4%',
    sold: 890,
  },
  {
    id: 3,
    name: 'Áo khoác nam cao cấp',
    category: 'fashion',
    price: 599000,
    originalPrice: 899000,
    discount: 33,
    rating: 4.7,
    reviews: 423,
    image: '🧥',
    badge: 'Sale',
    commission: '8%',
    sold: 2340,
  },
  {
    id: 4,
    name: 'Giày thể thao Nike',
    category: 'sports',
    price: 2290000,
    originalPrice: 2990000,
    discount: 23,
    rating: 4.8,
    reviews: 567,
    image: '👟',
    badge: 'Hot',
    commission: '6%',
    sold: 1890,
  },
  {
    id: 5,
    name: 'Nồi chiên không dầu',
    category: 'home',
    price: 1490000,
    originalPrice: 2490000,
    discount: 40,
    rating: 4.9,
    reviews: 678,
    image: '🍳',
    badge: 'Best Seller',
    commission: '10%',
    sold: 3450,
  },
  {
    id: 6,
    name: 'Serum Vitamin C',
    category: 'beauty',
    price: 349000,
    originalPrice: 599000,
    discount: 42,
    rating: 4.6,
    reviews: 890,
    image: '💧',
    badge: 'Sale',
    commission: '12%',
    sold: 4560,
  },
]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 bg-primary-50 border border-primary-200 rounded-full px-5 py-2">
            <TrendingUp className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">Sản phẩm nổi bật</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-display font-bold text-minimal-text mb-4 tracking-tight">
            Khám phá <span className="bg-gradient-to-r from-primary-600 to-green-500 bg-clip-text text-transparent">sản phẩm hot</span>
          </h2>
          <p className="text-xl text-minimal-text-muted max-w-2xl mx-auto leading-relaxed">
            Giá tốt nhất thị trường, nhận hoa hồng ngay khi mua sắm
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 animate-fade-in" style={{animationDelay: '0.2s'}}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-green-600 text-white shadow-lg scale-105'
                  : 'bg-white border-2 border-gray-200 text-minimal-text hover:border-primary-300 hover:shadow-md hover:scale-105'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
              {activeCategory === category.id && (
                <Zap className="w-4 h-4 animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="group bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-primary-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{animationDelay: `${0.1 * index}s`}}
            >
              {/* Product Image */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-12 flex items-center justify-center h-64">
                <span className="text-8xl transform group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </span>
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
                  product.badge === 'Hot' ? 'bg-gradient-to-r from-red-500 to-orange-500' :
                  product.badge === 'Sale' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                  product.badge === 'Mới' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                  'bg-gradient-to-r from-green-500 to-emerald-500'
                }`}>
                  {product.badge}
                </div>

                {/* Discount */}
                <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  -{product.discount}%
                </div>

                {/* Quick Actions */}
                <div className={`absolute bottom-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  <button className="bg-white p-3 rounded-full shadow-lg hover:bg-primary-500 hover:text-white transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="bg-white p-3 rounded-full shadow-lg hover:bg-primary-500 hover:text-white transition-colors">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Rating & Sold */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-sm">{product.rating}</span>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>
                  <span className="text-xs text-gray-500">Đã bán: {product.sold}</span>
                </div>

                {/* Product Name */}
                <h3 className="text-lg font-semibold text-minimal-text mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>

                {/* Commission Badge */}
                <div className="inline-flex items-center gap-1 bg-green-50 border border-green-200 rounded-lg px-3 py-1 mb-4">
                  <Zap className="w-3 h-3 text-green-600" />
                  <span className="text-xs font-semibold text-green-700">Hoa hồng: {product.commission}</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary-600">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-gradient-to-r from-primary-500 to-green-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-xl hover:scale-105 transition-all duration-300 group/btn">
                  <ShoppingCart className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                  <span>Thêm vào giỏ</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12 animate-fade-in" style={{animationDelay: '0.8s'}}>
          <button className="group bg-white border-2 border-gray-200 text-minimal-text px-10 py-4 rounded-xl font-semibold text-lg hover:border-primary-400 hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
            <span>Xem thêm sản phẩm</span>
            <TrendingUp className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
