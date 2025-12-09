import type { Metadata } from 'next'
import { Space_Grotesk, Poppins } from 'next/font/google'
import './globals.css'

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

export const metadata: Metadata = {
  title: 'KOC Shop - Mua sắm thông minh, giá tốt nhất',
  description: 'KOC Shop - Nơi mua sắm với giá tốt nhất và nhận hoa hồng hấp dẫn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${poppins.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}

