import { ReactNode } from 'react';

export interface BlogPost {
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  content: ReactNode;
}

export const BLOG_CONTENT: Record<string, BlogPost> = {
  // Bài 1: Review Cocoon
  'review-tay-da-chet-cocoon-ca-phe': { 
    title: 'Review Tẩy Da Chết Cà Phê Đắk Lắk Cocoon: "Chân Ái" Của Làn Da Việt',
    category: 'Review',
    date: '05/01/2026',
    author: 'KOC Chan',
    readTime: '4 phút đọc',
    tags: ['Cocoon', 'Local Brand', 'Skincare'],
    content: (
      <>
        <p className="lead font-bold text-lg mb-6">
          Nếu được hỏi đâu là món mỹ phẩm Việt Nam khiến mình tự hào nhất khi giới thiệu với bạn bè quốc tế, mình sẽ không ngần ngại gọi tên Cocoon. Và &ldquo;ngôi sao&rdquo; sáng nhất chính là hũ tẩy da chết cà phê này đây.
        </p>
        
        <h3 className="text-2xl font-bold mt-8 mb-4">1. Mùi hương &ldquo;gây nghiện&rdquo;</h3>
        <p className="mb-4">
          Mở nắp ra là hương cà phê rang xay thơm lừng xộc thẳng vào mũi. Nó không phải mùi hương liệu hóa học đâu nha, mà là mùi cà phê thật, đậm đà và ấm áp. Tắm xong mà cảm giác như vừa bước ra từ một quán cà phê xịn xò vậy.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">2. Kết cấu và cảm nhận</h3>
        <p className="mb-4">
          Hạt cà phê được xay nhuyễn vừa phải, đủ để massage lấy đi lớp da chết sần sùi nhưng không làm rát da. Đặc biệt là em này có chứa bơ ca cao nên dùng xong da mềm mướt cực kỳ, không bị khô kin kít như mấy loại muối tắm đâu.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 bg-friendly-light/50 p-6 rounded-xl border border-friendly-primary/20">
            <li><strong>Thành phần chính:</strong> Cà phê Đắk Lắk, Bơ ca cao Tiền Giang.</li>
            <li><strong>Cam kết:</strong> 100% thuần chay, không thử nghiệm trên động vật.</li>
            <li><strong>Hiệu quả:</strong> Da sáng mịn ngay lần đầu sử dụng.</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8 mb-4">3. Tổng kết</h3>
        <p className="mb-6">
           Với giá chỉ khoảng 100k cho một hũ to oạch dùng cả mấy tháng, đây thực sự là món &ldquo;must-have&rdquo; trong nhà tắm của mọi cô gái. Vừa ủng hộ nông sản Việt, vừa đẹp da, tội gì không thử nhỉ?
        </p>
        
        <div className="p-6 bg-[#FDF6EC] rounded-2xl border border-orange-200 text-center">
            <p className="font-hand text-xl text-friendly-dark mb-4">✨ Chốt đơn ở đây nè ✨</p>
            <a href="https://shopee.vn/T%E1%BA%A9y-T%E1%BA%BF-B%C3%A0o-Ch%E1%BA%BFt-Body-Cocoon-C%C3%A0-Ph%C3%AA-%C4%90%E1%BA%AFk-L%E1%BA%AFk-M%E1%BB%8Bn-Da-Cocoon-Dak-Lak-Coffee-Body-Polish-200ml-i.863612767.20746872642" target="_blank" className="inline-block bg-friendly-dark text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-friendly-primary transition-all hover:scale-105">
                Mua Chính Hãng trên Shopee (~100k)
            </a>
            <p className="text-xs text-gray-400 mt-2 italic">*Link này giúp mình có ly trà sữa đó, cảm ơn cậu! 💖</p>
        </div>
      </>
    )
  },

  // Bài 2: Tsubaki (ĐÃ SỬA SLUG)
  'phuc-hoi-toc-hu-ton-voi-tsubaki': {
    title: 'Phục hồi tóc hư tổn tại nhà chuẩn Salon với Tsubaki Vàng Premium',
    category: 'Tips & Tricks',
    date: '03/01/2026',
    author: 'KOC Chan',
    readTime: '5 phút đọc',
    tags: ['Haircare', 'Tsubaki', 'Premium'],
    content: (
      <>
         <p className="lead font-bold text-lg mb-6">
          Tóc tẩy, tóc nhuộm, tóc khô xơ như rơm? Đừng vội cắt đi nhé! Để mình mách bạn bộ đôi &ldquo;thần thánh&rdquo; từ nhà Shiseido này.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Công nghệ thẩm thấu nhanh</h3>
        <p className="mb-4">
           Điểm đặc biệt nhất của dòng Tsubaki Premium là công nghệ thẩm thấu tức thì. Bạn không cần ủ tóc 15-20 phút đâu, xả xong là xả nước liền được rồi. Siêu tiết kiệm thời gian cho những đứa lười như mình.
        </p>
        
        <h3 className="text-2xl font-bold mt-8 mb-4">Mùi hương sang chảnh</h3>
        <p className="mb-4">
           Mùi hoa trà và mật ong ngọt ngào, lưu hương lâu cực kỳ. Gội đầu xong đi ngang qua crush là bảo đảm ổng quay lại nhìn liền!
        </p>

        <div className="p-6 bg-[#FDF6EC] rounded-2xl border border-orange-200 text-center mt-8">
            <p className="font-hand text-xl text-friendly-dark mb-4">✨ Mua ngay kẻo lỡ ✨</p>
            <a href="https://shopee.vn/B%E1%BB%99-D%E1%BA%A7u-G%E1%BB%99i-X%E1%BA%A3-Tsubaki-%C4%90en-Ph%E1%BB%A5c-H%E1%BB%93i-T%C3%B3c-H%C6%B0-T%E1%BB%95n-N%E1%BA%B7ng-Premium-EX-Intensive-Repair-Treatment-450ml-Chai-i.863612767.20064820249" target="_blank" className="inline-block bg-friendly-dark text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-friendly-primary transition-all hover:scale-105">
                Combo Gội Xả Tsubaki (Giá tốt)
            </a>
        </div>
      </>
    )
  },

  // Bài 3: Anessa
  'review-kem-chong-nang-anessa': {
    title: 'Tại sao Anessa luôn là "Nữ hoàng" trong làng kem chống nắng?',
    category: 'Review',
    date: '28/12/2025',
    author: 'KOC Chan',
    readTime: '6 phút đọc',
    tags: ['Sunscreen', 'Anessa', 'Skincare'],
    content: (
      <>
        <p className="lead font-bold text-lg mb-6">
           Đắt nhưng xắt ra miếng! Đó là câu chính xác nhất để nói về sữa chống nắng Anessa Gold Milk.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Khả năng kiềm dầu vô địch</h3>
        <p className="mb-4">
           Team da dầu đâu rồi? Giơ tay lên nào! Em này đích thị là chân ái của tụi mình. Bôi lên da thấm cái rẹt, khô thoáng cả ngày, không hề bị bóng nhẫy như chảo mỡ đâu nhé.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Chống trôi siêu đỉnh</h3>
        <p className="mb-4">
           Công nghệ Aqua Booster giúp lớp chống nắng càng bền vững hơn khi gặp nước hoặc mồ hôi. Đi bơi, đi biển hay chạy deadline mướt mồ hôi cũng không lo bị trôi kem.
        </p>

        <div className="p-6 bg-[#FDF6EC] rounded-2xl border border-orange-200 text-center mt-8">
            <p className="font-hand text-xl text-friendly-dark mb-4">✨ Săn sale Anessa ✨</p>
            <a href="https://shopee.vn/Kem-Ch%E1%BB%91ng-N%E1%BA%AFng-Anessa-M%E1%BA%B7t-Tr%E1%BB%9Di-Ki%E1%BB%81m-D%E1%BA%A7u-M%E1%BB%8Bn-Da-Anessa-Perfect-UV-Sunscreen-Skincare-Milk-20ml-60ml-i.863612767.21169595793" target="_blank" className="inline-block bg-friendly-dark text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-friendly-primary transition-all hover:scale-105">
                Mua Anessa Gold Milk
            </a>
        </div>
      </>
    )
  },

  // Bài 4: 3W Clinic
  'review-nuoc-hoa-hong-3w-clinic': {
    title: 'Review Nước hoa hồng 3W Clinic Collagen: Ngon - Bổ - Rẻ cho HSSV',
    category: 'Tips & Tricks',
    date: '25/12/2025',
    author: 'KOC Chan',
    readTime: '4 phút đọc',
    tags: ['Skincare', 'Budget', '3W Clinic'],
    content: (
      <>
         <p className="lead font-bold text-lg mb-6">
           Tìm đâu ra một chai toner to vật vã 150ml mà giá chỉ hơn 100k? Chỉ có thể là 3W Clinic Collagen từ Hàn Quốc thôi.
         </p>
         <h3 className="text-2xl font-bold mt-8 mb-4">Công dụng đa năng</h3>
         <p className="mb-4">
            Em này kết cấu hơi sệt nhẹ, không lỏng toẹt như nước lã. Vừa làm sạch, cân bằng pH, vừa cấp ẩm nhẹ nhàng. Dùng làm lotion mask thì phê thôi rồi luôn.
         </p>
         <div className="p-6 bg-[#FDF6EC] rounded-2xl border border-orange-200 text-center mt-8">
            <p className="font-hand text-xl text-friendly-dark mb-4">✨ Hàng ngon giá rẻ ✨</p>
            <a href="https://shopee.vn/N%C6%B0%E1%BB%9Bc-hoa-h%E1%BB%93ng-3w-Clinic-Collagen-White-Clear-Softener-d%C6%B0%E1%BB%A1ng-%E1%BA%A9m-l%C3%A0m-tr%E1%BA%AFng-da-H%C3%A0n-Qu%E1%BB%91c-i.123018694.6539910991" target="_blank" className="inline-block bg-friendly-dark text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-friendly-primary transition-all hover:scale-105">
                Mua Toner 3W Clinic
            </a>
        </div>
      </>
    )
  },

  // Bài 5: Ramzer
  'review-sua-tam-ramzer': {
    title: 'Sữa tắm Ramzer 1 Lít: Tắm cả năm không hết, thơm như nước hoa',
    category: 'Lifestyle',
    date: '20/12/2025',
    author: 'KOC Chan',
    readTime: '3 phút đọc',
    tags: ['Bodycare', 'Ramzer', 'Review'],
    content: (
      <>
         <p className="lead font-bold text-lg mb-6">
           Nếu bạn đang tìm một loại sữa tắm &ldquo;kinh tế&rdquo; cho cả gia đình mà vẫn muốn thơm tho sang trọng, thì Ramzer chính là câu trả lời.
         </p>
         <h3 className="text-2xl font-bold mt-8 mb-4">Dung tích khổng lồ</h3>
         <p className="mb-4">
            Chai 1 Lít to đùng đoàng, cầm mỏi cả tay. Mua 1 chai dùng nhòe cả mấy tháng trời. Tiết kiệm cực kỳ luôn.
         </p>
         <h3 className="text-2xl font-bold mt-8 mb-4">Hương thơm nước hoa</h3>
         <p className="mb-4">
            Mùi hương thanh mát, dễ chịu, không bị hắc. Tắm xong da mềm mại, không bị khô căng.
         </p>
         <div className="p-6 bg-[#FDF6EC] rounded-2xl border border-orange-200 text-center mt-8">
            <p className="font-hand text-xl text-friendly-dark mb-4">✨ Deal hời mua ngay ✨</p>
            <a href="https://shopee.vn/COMBO-2-Chai-S%E1%BB%AFa-T%E1%BA%AFm-Truy%E1%BB%81n-Tr%E1%BA%AFng-RAMZER-Amino-Acid-1L-H%C6%B0%C6%A1ng-N%C6%B0%E1%BB%9Bc-Hoa-Thanh-M%C3%A1t-i.439314619.24985586480" target="_blank" className="inline-block bg-friendly-dark text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-friendly-primary transition-all hover:scale-105">
                Mua Sữa Tắm Ramzer
            </a>
        </div>
      </>
    )
  }
};
