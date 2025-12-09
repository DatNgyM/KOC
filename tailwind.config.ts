import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-space)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f5f2',
          100: '#d9e7dd',
          200: '#b3cebb',
          300: '#8db599',
          400: '#679c77',
          500: '#4A7C59',
          600: '#3d6649',
          700: '#2f4f37',
          800: '#223925',
          900: '#1a2f23',
          950: '#0d1712',
        },
        minimal: {
          bg: '#f7f9f7',
          'bg-secondary': '#eef2ef',
          'bg-tertiary': '#e5ebe6',
          text: '#1a2f23',
          'text-muted': '#5a7565',
          border: '#d4dfd6',
        },
        luxury: {
          gold: '#c5a572',
          'gold-light': '#e8ddc8',
          'green-dark': '#1a2f23',
          'green-luxury': '#2f4f37',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'luxury-gradient': 'linear-gradient(135deg, #1a2f23 0%, #2f4f37 50%, #3d6649 100%)',
        'minimal-gradient': 'linear-gradient(135deg, #f7f9f7 0%, #eef2ef 100%)',
        'flat-gradient': 'linear-gradient(135deg, #4A7C59 0%, #3d6649 100%)',
      },
      boxShadow: {
        'luxury': '0 20px 60px -15px rgba(15, 81, 50, 0.3)',
        'luxury-lg': '0 25px 80px -20px rgba(15, 81, 50, 0.4)',
        'luxury-xl': '0 30px 100px -25px rgba(15, 81, 50, 0.5)',
        'inner-luxury': 'inset 0 2px 4px 0 rgba(15, 81, 50, 0.1)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

