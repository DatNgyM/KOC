'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Facebook, Instagram, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate sending
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Header />
      
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-friendly-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
        
        <div className="container mx-auto px-4">
          
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-hand text-friendly-dark mb-4">Gửi thư cho tụi mình</h1>
            <p className="text-xl text-gray-500 font-display italic">Đừng ngại ngùng, cứ say &ldquo;Hi&rdquo; một cái nè! 👋</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto items-stretch">
            
            {/* Contact Info Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/3 bg-friendly-dark text-white p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold font-display mb-8">Thông tin liên hệ</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                       <Mail className="w-5 h-5 text-friendly-accent" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs uppercase font-bold tracking-wider mb-1">Email</p>
                      <p className="font-medium hover:text-friendly-accent transition-colors cursor-pointer">hello@disancungto.vn</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                       <Phone className="w-5 h-5 text-friendly-accent" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs uppercase font-bold tracking-wider mb-1">Hotline</p>
                      <p className="font-medium hover:text-friendly-accent transition-colors cursor-pointer">0909 xxx xxx</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-friendly-accent" />
                     </div>
                     <div>
                        <p className="text-white/50 text-xs uppercase font-bold tracking-wider mb-1">Địa chỉ</p>
                        <p className="font-medium leading-relaxed">Góc nhỏ nào đó tại Sài Gòn, Việt Nam 🇻🇳</p>
                     </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12">
                 <p className="text-white/50 text-xs uppercase font-bold tracking-wider mb-4">Mạng xã hội</p>
                 <div className="flex gap-4">
                    {[Facebook, Instagram, Twitter].map((Icon, i) => (
                       <button key={i} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-friendly-accent hover:text-friendly-dark transition-all">
                          <Icon className="w-5 h-5" />
                       </button>
                    ))}
                 </div>
              </div>

              {/* Decor Circle */}
              <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-white/5 rounded-full blur-2xl" />
              <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-friendly-accent/10 rounded-full blur-xl" />
            </motion.div>

            {/* Contact Form */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="lg:w-2/3 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative"
            >
               {formStatus === 'success' ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-fade-in">
                     <div className="w-32 h-32 relative mb-6">
                        <Image src="/assets/illustrations/blush/mailsuccess.png" alt="Success" fill className="object-contain" />
                     </div>
                     <h3 className="text-3xl font-hand text-friendly-dark mb-2">Đã gửi thành công!</h3>
                     <p className="text-gray-500 max-w-sm mx-auto">Cảm ơn cậu đã nhắn tin. Tụi mình sẽ phản hồi sớm nhất có thể nha (thường là trong 24h á).</p>
                     <button 
                        onClick={() => setFormStatus('idle')}
                        className="mt-8 px-6 py-2 bg-gray-100 text-gray-600 rounded-full font-bold hover:bg-gray-200 transition-colors"
                     >
                        Gửi tin nhắn khác
                     </button>
                  </div>
               ) : (
                  <form onSubmit={handleSubmit} className="relative z-10">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700 ml-1">Tên cậu là gì?</label>
                           <input 
                              type="text" 
                              required
                              placeholder="VD: Mèo Béo"
                              className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-friendly-primary focus:bg-white transition-all font-medium placeholder:text-gray-300"
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700 ml-1">Email để tụi mình rep nè</label>
                           <input 
                              type="email" 
                              required
                              placeholder="VD: meo@example.com"
                              className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-friendly-primary focus:bg-white transition-all font-medium placeholder:text-gray-300"
                           />
                        </div>
                     </div>

                     <div className="space-y-2 mb-8">
                        <label className="text-sm font-bold text-gray-700 ml-1">Cậu muốn nhắn nhủ điều chi?</label>
                        <textarea 
                           required
                           rows={6}
                           placeholder="Kể cho tụi mình nghe đi..."
                           className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-friendly-primary focus:bg-white transition-all font-medium placeholder:text-gray-300 resize-none"
                        ></textarea>
                     </div>

                     <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-400 italic hidden sm:block">*Tụi mình hứa bảo mật thông tin của cậu.</p>
                        <button 
                           type="submit" 
                           disabled={formStatus === 'sending'}
                           className="px-8 py-4 bg-friendly-primary text-white rounded-2xl font-bold hover:bg-friendly-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                           {formStatus === 'sending' ? (
                              <>Đang gửi thư...</>
                           ) : (
                              <>Gửi ngay <Send className="w-4 h-4" /></>
                           )}
                        </button>
                     </div>
                  </form>
               )}

               {/* Cute stamp */}
               <div className="absolute top-6 right-6 opacity-20 rotate-12 pointer-events-none hidden md:block">
                  <Image src="/assets/illustrations/blush/mail.png" alt="Stamp" width={100} height={100} />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

