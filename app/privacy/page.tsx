'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Header />
      
      <div className="container mx-auto px-4 py-32 max-w-4xl">
         <div className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-gray-100">
            <h1 className="text-4xl font-hand text-friendly-dark mb-8">Chính sách bảo mật</h1>
            
            <div className="prose prose-lg text-gray-600 font-display">
               <p className="lead font-bold text-gray-800">
                  Chào cậu, tụi mình là &ldquo;Đi Săn Cùng Tớ&rdquo;. Tụi mình tôn trọng sự riêng tư của cậu và cam kết bảo vệ những thông tin mà cậu chia sẻ.
               </p>

               <h3>1. Thu thập thông tin</h3>
               <p>
                  Tụi mình chỉ thu thập những thông tin cơ bản khi cậu tự nguyện cung cấp, ví dụ như tên và email khi cậu điền form liên hệ hoặc đăng ký nhận tin. Ngoài ra, web có sử dụng Cookies để nhớ xem cậu thích món đồ nào để gợi ý cho chuẩn thôi nè.
               </p>

               <h3>2. Sử dụng thông tin</h3>
               <p>
                  Thông tin của cậu chỉ được dùng để:
               </p>
               <ul className="list-disc pl-5 space-y-2">
                  <li>Gửi phản hồi khi cậu nhắn tin hỏi thăm.</li>
                  <li>Gửi email thông báo deal hot (nếu cậu đã đồng ý đăng ký).</li>
                  <li>Cải thiện trải nghiệm lướt web cho mượt mà hơn.</li>
               </ul>

               <h3>3. Chia sẻ thông tin</h3>
               <p>
                  Tuyệt đối <strong>KHÔNG</strong>. Tụi mình không bán hay chia sẻ thông tin cá nhân của cậu cho bên thứ ba nào cả. Cậu cứ yên tâm nhé!
               </p>

               <h3>4. Cookies</h3>
               <p>
                  Web có sử dụng một chút Cookies để giúp web tải nhanh hơn và nhớ được cài đặt của cậu. Cậu có thể tắt Cookies trong trình duyệt nếu không thích, nhưng web có thể sẽ hơi &ldquo;ngáo&rdquo; một xíu đó.
               </p>

               <h3>5. Thay đổi chính sách</h3>
               <p>
                  Đôi khi tụi mình sẽ cập nhật lại chính sách này một chút cho phù hợp với luật pháp hoặc tính năng mới. Mọi thay đổi sẽ được cập nhật ngay tại trang này.
               </p>

               <div className="mt-12 p-6 bg-friendly-light rounded-xl border border-friendly-primary/20">
                  <p className="mb-0 text-sm italic">
                     Nếu có thắc mắc gì, cậu cứ nhắn tin cho tụi mình qua trang <a href="/contact" className="text-friendly-primary font-bold hover:underline">Liên hệ</a> nhé!
                  </p>
               </div>
            </div>
         </div>
      </div>

      <Footer />
    </main>
  );
}

