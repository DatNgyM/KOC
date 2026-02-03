import type { Metadata } from 'next'
import { Space_Grotesk, Poppins, Patrick_Hand } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin', 'latin-ext'],
  variable: '--font-space',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const poppins = Poppins({ 
  subsets: ['latin', 'latin-ext'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const patrickHand = Patrick_Hand({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-patrick',
  display: 'swap',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Đi Săn Cùng Tớ | Góc Review & Săn Deal Gen Z',
  description: 'Góc nhỏ chia sẻ deal ngon, review có tâm và những món đồ xinh xắn. Cùng tụi mình mua sắm thảnh thơi và chữa lành tâm hồn!',
  icons: {
    icon: '/icon', // Dùng file icon.tsx vừa tạo
  },
  openGraph: {
    title: 'Đi Săn Cùng Tớ | Góc Review & Săn Deal Gen Z',
    description: 'Góc nhỏ chia sẻ deal ngon, review có tâm và những món đồ xinh xắn. Cùng tụi mình mua sắm thảnh thơi và chữa lành tâm hồn!',
    type: 'website',
    locale: 'vi_VN',
    siteName: 'Đi Săn Cùng Tớ',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${poppins.variable} ${patrickHand.variable} font-sans antialiased`}>
        <GoogleAnalytics ga_id="G-XXXXXXXXXX" />
        {children}
      </body>
    </html>
  )
}
