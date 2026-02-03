import { Metadata } from 'next';
import HomeClient from '@/components/home/HomeClient';

export const metadata: Metadata = {
  title: 'Đi Săn Cùng Tớ | Săn Deal Gen Z & Review Có Tâm',
  description: 'Góc nhỏ chia sẻ deal ngon, review có tâm và những món đồ xinh xắn. Cùng tụi mình mua sắm thảnh thơi và chữa lành tâm hồn!',
  openGraph: {
    title: 'Đi Săn Cùng Tớ | Săn Deal Gen Z & Review Có Tâm',
    description: 'Khám phá thế giới ưu đãi dành riêng cho KOC. Review chân thực, deal hời mỗi ngày.',
    type: 'website',
  },
};

export default function Home() {
  return <HomeClient />;
}
