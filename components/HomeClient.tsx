'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FloatingHero } from '@/components/floating-storybook/FloatingHero';
import { BentoGrid, BentoGridItem } from '@/components/floating-storybook/BentoGrid';
import { WavyDivider } from '@/components/floating-storybook/WavyDivider';
import { StoryLine } from '@/components/floating-storybook/StoryLine';
import { FloatingElement } from '@/components/floating-storybook/FloatingElement';
import Image from 'next/image';
import { AffiliateGrid } from '@/components/floating-storybook/AffiliateGrid';
import { HowItWorks } from '@/components/floating-storybook/HowItWorks';
import { ReviewSection } from '@/components/floating-storybook/ReviewSection';
import { motion } from 'framer-motion';

// Example items for Bento Grid
const features = [
  {
    title: "Chào mừng bạn!",
    description: "Khám phá thế giới ưu đãi dành riêng cho KOC.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] relative items-center justify-center group/image">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-friendly-primary/20 to-friendly-secondary/20 z-0" />
        <Image 
          src="/assets/illustrations/blush/user.png" 
          alt="User" 
          width={150} 
          height={150} 
          className="object-contain absolute -bottom-4 right-0 transform translate-x-4 rotate-12 z-10" 
        />
      </div>
    ),
    className: "md:col-span-2",
  },
  {
    title: "Sale Hôm Nay",
    description: "Giảm 50% cho các sản phẩm hot.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] relative items-center justify-center group/image">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-friendly-accent/20 to-orange-100 z-0" />
        <div className="z-10 relative">
          <FloatingElement duration={3}>
            <Image src="/assets/illustrations/blush/buyingonline2.png" alt="Sale" width={100} height={100} className="object-contain" />
          </FloatingElement>
        </div>
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    title: "Voucher Độc Quyền",
    description: "Săn mã giảm giá hot nhất dành riêng cho bạn.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] relative items-center justify-center group/image">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-friendly-success/20 to-green-100 z-0" />
        <Image 
          src="/assets/illustrations/blush/mailnotificate.png" 
          alt="Voucher" 
          width={120} 
          height={120} 
          className="object-contain hover:scale-110 transition-transform z-10 relative" 
        />
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    title: "Xu Hướng Mới",
    description: "Cập nhật trend mới nhất mỗi ngày.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] relative items-center justify-center group/image">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-100 to-friendly-secondary/20 z-0" />
        <Image 
          src="/assets/illustrations/blush/airplane.png" 
          alt="Trend" 
          width={120} 
          height={120} 
          className="object-contain animate-float z-10 relative" 
        />
      </div>
    ),
    className: "md:col-span-2",
  },
];

export default function HomeClient() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Header />
      
      {/* Scroll Progress Line */}
      <StoryLine />

      {/* Hero Section */}
      <section className="relative z-10 mb-20">
        <FloatingHero />
      </section>

      <WavyDivider className="z-20 text-[#FDF6EC]" />

      {/* Bento Grid Section */}
      <section className="relative z-10 bg-[#FDF6EC] pt-20 pb-20 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-hand text-5xl md:text-6xl text-friendly-dark mb-4">Khám Phá Thế Giới</h2>
          <p className="font-display text-xl text-friendly-dark/70">Mọi thứ bạn cần để bắt đầu hành trình.</p>
        </motion.div>

        <BentoGrid>
          {features.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </section>

      {/* How It Works Section */}
      <div className="relative z-10 bg-[#FDF6EC]">
         <HowItWorks />
      </div>

      <WavyDivider invert fill="#FFF" className="z-20 -mt-1" />

      {/* Affiliate Product Grid - The Main Content */}
      <div className="relative z-10 bg-white min-h-screen">
         <AffiliateGrid />
      </div>

      <WavyDivider className="z-20 text-[#fff]" />

      {/* Review Section */}
      <div className="relative z-10 bg-white pt-10 pb-20">
         <ReviewSection />
      </div>

      {/* Story Section Placeholder */}
      <section className="relative z-10 bg-gradient-to-b from-white to-friendly-bg py-20 px-4 flex items-center justify-center">
         <div className="max-w-4xl w-full text-center">
             <h2 className="font-hand text-5xl md:text-6xl text-friendly-dark mb-12">Câu Chuyện Của Bạn</h2>
             <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                 <motion.div 
                    whileHover={{ rotate: -5, scale: 1.05 }} 
                    className="flex-1 bg-friendly-bg p-8 rounded-3xl shadow-japandi border-2 border-dashed border-friendly-primary"
                 >
                     <p className="font-display text-lg mb-4">&quot;Bắt đầu từ những bước nhỏ...&quot;</p>
                     <Image src="/assets/illustrations/blush/1.png" alt="Story 1" width={200} height={200} className="mx-auto" />
                 </motion.div>
                 
                 <div className="hidden md:block text-4xl text-friendly-primary font-hand">
                     ➜
                 </div>

                 <motion.div 
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    className="flex-1 bg-friendly-bg p-8 rounded-3xl shadow-japandi border-2 border-dashed border-friendly-secondary"
                 >
                     <p className="font-display text-lg mb-4">&quot;...đến thành công rực rỡ!&quot;</p>
                     <Image src="/assets/illustrations/blush/mailsuccess.png" alt="Story 2" width={200} height={200} className="mx-auto" />
                 </motion.div>
             </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
