'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { RefreshCcw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#FDF6EC]">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 border-4 border-[#FF9F9F] rounded-full opacity-20 animate-spin-slow" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#FFD166] rounded-full opacity-20 animate-bounce-slow" />
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-8xl mb-6 animate-wiggle inline-block">
            (×_×)
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D3436] mb-4">
            Có chút sự cố nhỏ xíu!
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Hệ thống đang bị &quot;cảm cúm&quot; nhẹ. Chúng mình đang cố gắng chữa trị. 
            Bạn thử tải lại trang xem sao nhé!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={reset}
              className="group flex items-center gap-2 px-8 py-3 bg-[#FF9F9F] text-white rounded-full font-semibold hover:bg-[#FF8F8F] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <RefreshCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              Thử lại ngay
            </button>
            
            <Link 
              href="/"
              className="group flex items-center gap-2 px-8 py-3 bg-white text-[#2D3436] border-2 border-[#FFD166] rounded-full font-semibold hover:bg-gray-50 transition-all transform hover:scale-105"
            >
              <Home className="w-5 h-5" />
              Về trang chủ
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

