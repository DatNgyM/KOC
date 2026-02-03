'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const StoryLine = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={ref} className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-full pointer-events-none z-50 hidden md:block max-w-[1440px]">
      <svg
        className="w-full h-full opacity-60"
        viewBox="0 0 400 2000" // Adjusted viewBox for a long page, this is tricky to get perfect without known height
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 200 0 C 300 300, 100 600, 200 900 S 300 1500, 200 2000" // A simple S-curve path down the center
          stroke="#FF9F9F"
          strokeWidth="2"
          strokeDasharray="10 10"
          style={{
            pathLength: pathLength,
          }}
        />
      </svg>
    </div>
  );
};

