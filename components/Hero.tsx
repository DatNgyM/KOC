'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles, BookOpen, PenTool } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-24 pb-32 lg:pt-40 lg:pb-48 overflow-hidden bg-[#FDF6EC]">
      {/* Paper Texture Overlay (Optional, simplified as noise or just color) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%221%22/%3E%3C/svg%3E")' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Chapter Label */}
        <div className="flex justify-center mb-8 animate-fade-in">
           <div className="inline-flex items-center gap-2 px-6 py-2 bg-white border-2 border-dashed border-friendly-dark rounded-full text-friendly-dark font-bold font-mono transform -rotate-2">
              <BookOpen className="w-5 h-5" />
              <span className="tracking-widest uppercase">Chương 1: Sự Khởi Đầu</span>
           </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Content - The Narrative */}
          <div className="flex-1 text-center lg:text-left relative">
            
            {/* Hand-drawn decorative arrow */}
            <div className="absolute -top-10 -left-10 lg:-left-20 w-32 h-32 hidden lg:block opacity-60">
               <Image src="/assets/illustrations/blush/doodlearrow.png" alt="Arrow" width={100} height={100} className="transform rotate-45" />
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-black text-friendly-dark mb-8 leading-[0.9] tracking-tighter animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Câu Chuyện <br/>
              <span className="text-friendly-primary relative inline-block transform -rotate-1">
                 Mua Sắm
                 {/* Underline Sketch */}
                 <svg className="absolute w-full h-4 -bottom-2 left-0 text-friendly-dark" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 30 10 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                 </svg>
              </span>
            </h1>
            
            <div className="relative inline-block mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
               <p className="text-xl text-gray-700 leading-relaxed font-medium bg-white p-6 rounded-[2rem_0.5rem_2rem_0.5rem] border-2 border-friendly-dark shadow-[4px_4px_0px_0px_rgba(45,52,54,1)] transform rotate-1">
                 &quot;Ngày xửa ngày xưa, có một nơi mà bạn có thể tìm thấy mọi thứ hay ho mà không cần lo về giá...&quot;
               </p>
               {/* Pin/Tape Decoration */}
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-friendly-secondary/50 transform -rotate-2"></div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link 
                href="/shop/all" 
                className="px-10 py-4 bg-friendly-dark text-white rounded-xl font-bold text-lg border-2 border-transparent hover:bg-white hover:text-friendly-dark hover:border-friendly-dark transition-all hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
              >
                Đọc Tiếp...
              </Link>
              <Link 
                href="/about" 
                className="flex items-center gap-2 px-6 py-4 text-friendly-dark font-bold hover:underline decoration-wavy decoration-2 underline-offset-4"
              >
                <PenTool className="w-5 h-5" />
                Viết Bởi KOC Shop
              </Link>
            </div>
          </div>

          {/* Right Illustration - Polaroids/Scrapbook */}
          <div className="flex-1 w-full relative perspective-1000 mt-10 lg:mt-0">
             
             {/* Main Sketchy Blob Background */}
             <div className="absolute inset-0 bg-friendly-accent/20 transform scale-110 rotate-3" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}></div>
             
             {/* Main Image Container - Wobbly Border */}
             <div className="relative z-10 w-full aspect-square max-w-[500px] mx-auto bg-white border-4 border-friendly-dark p-4 animate-float" style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}>
                <Image
                  src="/assets/illustrations/blush/user.png"
                  alt="Main Character"
                  fill
                  className="object-contain p-6"
                  priority
                />
                
                {/* Comic Bubble */}
                <div className="absolute -top-10 -right-4 bg-white border-2 border-friendly-dark px-6 py-4 rounded-[2rem] rounded-bl-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-bounce-slow">
                   <p className="font-display font-bold text-lg">Chào bạn!</p>
                </div>
             </div>

             {/* Decorative Elements */}
             <div className="absolute bottom-0 -left-10 w-24 h-24 hidden sm:block animate-wiggle">
                <Image src="/assets/illustrations/blush/luv.png" alt="Love" width={96} height={96} />
             </div>
             
             {/* Hand drawn loop */}
             <svg className="absolute -bottom-10 -right-10 w-40 h-40 text-friendly-primary opacity-50 hidden lg:block" viewBox="0 0 100 100">
                <path d="M10,50 Q25,25 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M85,45 L90,50 L85,55" fill="none" stroke="currentColor" strokeWidth="2" />
             </svg>
          </div>

        </div>
      </div>
      
      {/* Zig-Zag Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
         <svg className="relative block w-full h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
             <path d="M0,120 L1200,120 L1200,0 L0,0 Z" fill="transparent"></path>
             {/* Zig Zag Line */}
             <path d="M0,60 L50,110 L100,60 L150,110 L200,60 L250,110 L300,60 L350,110 L400,60 L450,110 L500,60 L550,110 L600,60 L650,110 L700,60 L750,110 L800,60 L850,110 L900,60 L950,110 L1000,60 L1050,110 L1100,60 L1150,110 L1200,60" fill="none" stroke="#FFFFFF" strokeWidth="10"></path>
             <path d="M0,60 L50,110 L100,60 L150,110 L200,60 L250,110 L300,60 L350,110 L400,60 L450,110 L500,60 L550,110 L600,60 L650,110 L700,60 L750,110 L800,60 L850,110 L900,60 L950,110 L1000,60 L1050,110 L1100,60 L1150,110 L1200,60 L1200,120 L0,120 Z" fill="#FFFFFF"></path>
         </svg>
      </div>
    </section>
  )
}