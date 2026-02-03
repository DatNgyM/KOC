import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tạp Hóa Chữa Lành - Săn Đồ Decor & Quà Tặng Gen Z',
  description: 'Góc nhỏ săn đồ decor bàn học, quà tặng sinh nhật, máy ảnh film, son dưỡng và những món đồ chữa lành tâm hồn. Review chân thực, giá tốt nhất cho Gen Z.',
  keywords: ['decor bàn học', 'quà tặng gen z', 'máy ảnh film', 'son dưỡng', 'tạp hóa chữa lành', 'koc review', 'săn sale shopee'],
  openGraph: {
    title: 'Tạp Hóa Chữa Lành - Góc Nhỏ Của Gen Z',
    description: 'Nơi tụi mình tìm kiếm những mảnh ghép nhỏ để cuộc sống thêm chill và đáng yêu.',
    type: 'website',
  }
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  );
}
