'use client';

import Link from 'next/link';
import { Calendar, User, ArrowLeft, Share2, MessageCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { BLOG_CONTENT } from '@/lib/data/blog-data';

export default function BlogDetailClient({ slug }: { slug: string }) {
  const post = BLOG_CONTENT[slug];

  if (!post) {
    return (
      <main className="min-h-screen bg-[#FDFBF7] flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl font-hand text-gray-300 mb-4">404</h1>
            <p className="text-gray-500 text-lg mb-8">Huhu, bài viết này hổng tìm thấy hoặc đang được viết dở...</p>
            <Link href="/blog" className="bg-friendly-dark text-white px-6 py-3 rounded-full font-bold hover:bg-friendly-primary transition-colors">
                Quay lại trang Blog
            </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Header />
      
      {/* Article Header */}
      <section className="pt-32 pb-12 px-4 bg-white border-b border-gray-100">
         <div className="container mx-auto max-w-3xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-friendly-primary transition-colors mb-6 font-bold text-sm">
               <ArrowLeft className="w-4 h-4" /> Quay lại danh sách
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 mb-4">
               <span className="bg-friendly-light text-friendly-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  {post.category}
               </span>
               <span className="text-gray-400 text-xs flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {post.date}
               </span>
               <span className="text-gray-400 text-xs flex items-center gap-1">
                  <User className="w-3 h-3" /> {post.author}
               </span>
            </div>

            <motion.h1 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-3xl md:text-5xl font-display font-bold text-friendly-dark leading-tight mb-6"
            >
               {post.title}
            </motion.h1>

            <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                <div className="flex gap-2">
                    {post.tags.map((tag: string) => (
                        <span key={tag} className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            #{tag}
                        </span>
                    ))}
                </div>
                
                <button className="flex items-center gap-2 text-gray-500 hover:text-friendly-primary transition-colors font-bold text-sm">
                    <Share2 className="w-4 h-4" /> Chia sẻ
                </button>
            </div>
         </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4">
         <div className="container mx-auto max-w-3xl">
            <motion.article 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="prose prose-lg prose-headings:font-display prose-headings:text-friendly-dark prose-p:text-gray-600 prose-a:text-friendly-primary hover:prose-a:text-friendly-dark prose-img:rounded-2xl"
            >
               {post.content}
            </motion.article>

            {/* Author Box */}
            <div className="mt-16 bg-white p-8 rounded-3xl border border-gray-100 flex items-center gap-6 shadow-sm">
                <div className="w-16 h-16 bg-friendly-light rounded-full flex items-center justify-center shrink-0">
                    <User className="w-8 h-8 text-friendly-primary" />
                </div>
                <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-1">Viết bởi {post.author}</h4>
                    <p className="text-sm text-gray-500">
                        Một người yêu cái đẹp, thích săn deal và chia sẻ những điều tích cực. Hy vọng bài viết này giúp ích cho cậu!
                    </p>
                </div>
            </div>

            {/* Comments Placeholder */}
            <div className="mt-12 text-center">
                <p className="text-gray-400 italic mb-4">--- Phần bình luận đang được xây dựng ---</p>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-600 font-bold hover:border-friendly-primary hover:text-friendly-primary transition-colors">
                    <MessageCircle className="w-4 h-4" /> Gửi phản hồi cho tụi mình
                </button>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
