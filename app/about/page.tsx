'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Coffee, Sun } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] overflow-hidden">
      <Header />
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-friendly-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-friendly-secondary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-gray-100">
                <Sparkles className="w-4 h-4 text-friendly-accent" />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Câu chuyện nhỏ xíu</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-hand text-friendly-dark mb-6 leading-tight">
                Chào cậu, <br/>
                <span className="text-friendly-primary">Tụi mình ở đây nè!</span> 👋
              </h1>
              
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                Không chỉ là một trang web săn deal, đây là góc nhỏ để tụi mình chia sẻ những món đồ xinh xắn, những câu chuyện chữa lành và lan tỏa năng lượng tích cực đến cậu.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                 <button className="px-8 py-4 bg-friendly-dark text-white rounded-full font-bold shadow-lg hover:bg-friendly-primary hover:scale-105 transition-all duration-300">
                    Kết nối với tụi mình
                 </button>
                 <button className="px-8 py-4 bg-white text-friendly-dark border-2 border-gray-100 rounded-full font-bold hover:border-friendly-dark hover:bg-gray-50 transition-all duration-300">
                    Xem hành trình
                 </button>
              </div>
            </motion.div>

            {/* Hero Image Area - Placeholder for future image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 relative flex items-center justify-center min-h-[400px]"
            >
               {/* Cute blobs behind */}
               <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10 text-friendly-light opacity-60" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,31.7C59,41.9,47.1,49.5,35.4,55.9C23.7,62.3,12.2,67.6,-0.6,68.6C-13.4,69.6,-25.5,66.3,-36.5,59.2C-47.5,52.1,-57.4,41.2,-64.9,28.5C-72.4,15.8,-77.5,1.3,-75.4,-11.8C-73.3,-24.9,-64,-36.6,-53.1,-45.8C-42.2,-55,-29.7,-61.7,-17.1,-65.8C-4.5,-69.9,8.2,-71.4,21.3,-73.2L44.7,-76.4Z" transform="translate(100 100)" />
               </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- MISSION VALUES --- */}
      <section className="py-20 bg-white relative">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <span className="text-friendly-primary font-hand text-2xl">Giá trị tụi mình theo đuổi</span>
               <h2 className="text-4xl font-display font-bold text-gray-800 mt-2">Nhỏ Xíu Nhưng Chân Thành</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                  {
                     icon: <Heart className="w-8 h-8 text-red-400" />,
                     title: "Làm Vì Đam Mê",
                     desc: "Mỗi món đồ review đều được tụi mình trải nghiệm thật sự, khen chê rõ ràng, không 'seeding' bừa bãi đâu nha.",
                     color: "bg-red-50"
                  },
                  {
                     icon: <Sun className="w-8 h-8 text-yellow-500" />,
                     title: "Năng Lượng Tích Cực",
                     desc: "Tụi mình muốn nơi này giống như một trạm sạc pin tâm hồn. Ghé chơi là phải thấy vui!",
                     color: "bg-yellow-50"
                  },
                  {
                     icon: <Coffee className="w-8 h-8 text-amber-600" />,
                     title: "Góc Chill Mỗi Ngày",
                     desc: "Không chỉ mua sắm, đây là nơi để cậu tìm thấy những tips hay ho giúp cuộc sống 'chill' hơn.",
                     color: "bg-orange-50"
                  }
               ].map((item, idx) => (
                  <motion.div 
                     key={idx}
                     whileHover={{ y: -10 }}
                     className={`p-8 rounded-3xl ${item.color} border-2 border-dashed border-gray-100 flex flex-col items-center text-center`}
                  >
                     <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                        {item.icon}
                     </div>
                     <h3 className="font-bold text-xl text-gray-800 mb-3">{item.title}</h3>
                     <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section className="py-20 bg-[#FDF6EC]">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-16">
               <div className="w-full md:w-1/2 flex justify-center items-center min-h-[300px]">
                  {/* Placeholder for future team image */}
                  <div className="w-full h-full bg-friendly-primary/5 rounded-3xl border-2 border-dashed border-friendly-primary/20 flex items-center justify-center">
                     <span className="text-friendly-primary/50 font-hand text-xl">Hình team xinh xắn ở đây nè! ✨</span>
                  </div>
               </div>
               <div className="w-full md:w-1/2">
                  <h2 className="text-4xl font-hand text-friendly-dark mb-6">Người đứng sau những dòng code</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                     Hi, mình là <span className="font-bold text-friendly-primary">Đạt</span> (hoặc cứ gọi là Admin cute cũng được 🤣). 
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                     Mình lập ra chiếc web này ban đầu chỉ để lưu lại những món đồ hay ho mình tìm được. Dần dần, nó trở thành một niềm vui nhỏ mỗi ngày - được chia sẻ, được viết lách và được kết nối với những người bạn cùng tần số.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                     Cảm ơn cậu đã ghé thăm và trở thành một phần của hành trình này nhé! 💖
                  </p>
                  
                  <div className="mt-8">
                     <Heart className="w-8 h-8 text-red-400 fill-current animate-pulse" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
