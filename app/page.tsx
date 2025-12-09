'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Products from '@/components/Products'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Products />
      <Features />
      <CTA />
      <Footer />
      
      {/* Cute Plant Mascot - Popup Greeting */}
      <div className="mascot-container" id="mascot">
        <div className="mascot-wrapper">
          <button className="close-btn" onClick={() => { const mascot = document.getElementById('mascot'); if (mascot) mascot.style.display = 'none'; }}>×</button>
          <div className="cute-plant">
            <div className="pot"></div>
            <div className="stem"></div>
            <div className="leaf leaf-left"></div>
            <div className="leaf leaf-right"></div>
            <div className="face">
              <div className="eye eye-left"></div>
              <div className="eye eye-right"></div>
              <div className="smile"></div>
              <div className="blush blush-left"></div>
              <div className="blush blush-right"></div>
            </div>
            <div className="hand hand-left"></div>
            <div className="hand hand-right"></div>
          </div>
          <div className="greeting-text">
            Xin chào! 👋
            <div className="greeting-subtitle">Chúc bạn mua sắm vui vẻ!</div>
          </div>
        </div>
      </div>
    </main>
  )
}

