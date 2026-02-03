'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FloatingElement } from './FloatingElement';
import Image from 'next/image';

export const FloatingHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20">
      {/* Background Elements */}
      <FloatingElement delay={0} duration={8} className="absolute top-1/4 left-10 w-24 h-24 md:w-32 md:h-32 opacity-80">
        <Image src="/assets/illustrations/blush/404.png" alt="Cloud" width={128} height={128} className="w-full h-full object-contain" />
      </FloatingElement>
      <FloatingElement delay={2} duration={10} className="absolute bottom-1/4 right-10 w-20 h-20 md:w-28 md:h-28 opacity-80">
        <Image src="/assets/illustrations/blush/luv.png" alt="Love" width={112} height={112} className="w-full h-full object-contain" />
      </FloatingElement>

      {/* Main Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-hand text-5xl md:text-8xl lg:text-9xl text-friendly-dark mb-6 drop-shadow-sm">
          Đi Săn Cùng Tớ
        </h1>
        <p className="font-display text-xl md:text-2xl text-friendly-dark mb-8 max-w-2xl mx-auto leading-relaxed bg-white/40 backdrop-blur-sm p-4 rounded-2xl border border-white/40 shadow-sm">
          Nơi mua sắm không chỉ là click chuột, mà là một hành trình khám phá đầy màu sắc và niềm vui.
        </p>
        
        <div className="flex justify-center gap-4">
           <button className="px-8 py-3 bg-friendly-primary text-white rounded-full font-bold text-lg hover:bg-red-400 transition transform hover:scale-105 shadow-soft">
             Khám Phá Ngay
           </button>
        </div>
      </motion.div>

      {/* Central Floating Character */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '20%']) }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] z-0"
      >
        <FloatingElement duration={4} yOffset={10}>
           <Image 
             src="/assets/illustrations/blush/imagtion.png" 
             alt="Hero Character" 
             width={500} 
             height={500}
             className="w-full h-auto drop-shadow-2xl"
             priority
           />
        </FloatingElement>
      </motion.div>
    </div>
  );
};

