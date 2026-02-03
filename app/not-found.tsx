'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#FDF6EC]">
      {/* Background blobs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-[#FFD166] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-[#FF9F9F] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-48 h-48 bg-[#90E0EF] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-9xl font-bold text-[#FF9F9F] mb-4 animate-bounce-slow">
            404
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D3436] mb-6">
            Oops! Trang này đi lạc rồi
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Có vẻ như trang bạn đang tìm kiếm đã đi chơi xa hoặc không tồn tại. 
            Đừng lo, hãy quay về nhà nhé! (｡•́︿•̀｡)
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/"
              className="group flex items-center gap-2 px-8 py-3 bg-[#FF9F9F] text-white rounded-full font-semibold hover:bg-[#FF8F8F] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Home className="w-5 h-5 group-hover:animate-bounce" />
              Về trang chủ
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="group flex items-center gap-2 px-8 py-3 bg-white text-[#2D3436] border-2 border-[#FF9F9F] rounded-full font-semibold hover:bg-gray-50 transition-all transform hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Quay lại
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

