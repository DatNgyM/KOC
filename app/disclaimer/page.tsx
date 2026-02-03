'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { AlertTriangle } from 'lucide-react';

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Header />
      
      <div className="container mx-auto px-4 py-32 max-w-4xl">
         <div className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-6 h-6 text-yellow-600" />
               </div>
               <h1 className="text-4xl font-hand text-friendly-dark mt-2">Miễn trừ trách nhiệm</h1>
            </div>
            
            <div className="prose prose-lg text-gray-600 font-display">
               <p className="lead font-bold text-gray-800">
                  Để đảm bảo sự minh bạch và tin cậy, tụi mình muốn chia sẻ rõ ràng về cách &ldquo;Đi Săn Cùng Tớ&rdquo; hoạt động và tạo ra thu nhập.
               </p>

               <h3>1. Tiếp thị liên kết (Affiliate Links)</h3>
               <p>
                  Một số đường dẫn (link) sản phẩm trên website này là <strong>link tiếp thị liên kết</strong>. 
                  Điều này có nghĩa là nếu cậu click vào link và mua hàng, tụi mình sẽ nhận được một khoản hoa hồng nhỏ xíu từ nhà bán hàng (Shopee, Lazada, Tiki...).
               </p>
               <p className="bg-friendly-light p-4 rounded-xl border border-friendly-primary/20 text-friendly-dark text-sm font-bold">
                  ⚠️ Quan trọng: Việc này KHÔNG làm tăng giá sản phẩm mà cậu mua. Giá vẫn y nguyên, thậm chí còn rẻ hơn nếu cậu săn được mã giảm giá từ tụi mình.
               </p>

               <h3>2. Nội dung và Đánh giá</h3>
               <p>
                  Mọi bài review, đánh giá trên website đều dựa trên quan điểm cá nhân và trải nghiệm thực tế (hoặc tổng hợp kỹ lưỡng từ cộng đồng). Tụi mình <strong>KHÔNG</strong> nhận tiền để viết bài khen ngợi sai sự thật cho bất kỳ sản phẩm kém chất lượng nào.
               </p>
               <p>
                  Tuy nhiên, trải nghiệm của mỗi người là khác nhau. Món đồ hợp với tụi mình chưa chắc đã hợp với cậu 100%. Vì vậy, hãy cân nhắc kỹ và xem thêm nhiều review khác trước khi &ldquo;chốt đơn&rdquo; nhé.
               </p>

               <h3>3. Thông tin sản phẩm</h3>
               <p>
                  Giá cả và tình trạng kho hàng (còn/hết) của sản phẩm có thể thay đổi tùy theo thời điểm cậu truy cập vào sàn thương mại điện tử. Tụi mình luôn cố gắng cập nhật nhanh nhất, nhưng không thể đảm bảo chính xác 100% tại mọi thời điểm.
               </p>

               <h3>4. Trách nhiệm</h3>
               <p>
                  Tụi mình chỉ giới thiệu và dẫn link tới nơi bán. Việc giao dịch, thanh toán, vận chuyển và bảo hành sẽ do sàn thương mại điện tử (Shopee, Lazada...) và người bán chịu trách nhiệm hoàn toàn. Nếu có vấn đề về đơn hàng, cậu hãy liên hệ trực tiếp với sàn để được hỗ trợ nhé.
               </p>

               <div className="mt-12 border-t pt-8">
                  <p className="text-sm italic text-gray-400">
                     Cảm ơn cậu đã hiểu và ủng hộ tụi mình duy trì website này! 💖
                  </p>
               </div>
            </div>
         </div>
      </div>

      <Footer />
    </main>
  );
}

