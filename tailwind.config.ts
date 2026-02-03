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
        hand: ['var(--font-patrick)', 'cursive'],
      },
      colors: {
        // Friendly Cartoon Palette
        friendly: {
          primary: '#FF9F9F', // Soft Pink/Coral
          secondary: '#8AC6D1', // Soft Blue
          accent: '#FFD166', // Soft Yellow
          success: '#A0E8AF', // Soft Green
          dark: '#2D3436', // Soft Black for text
          light: '#FFF9F5', // Warm White
          bg: '#FDF6EC', // Cream background
        },
        // Japandi Color Palette (inspired by Provider Store)
        japandi: {
          // Warm Beiges & Creams
          beige: {
            50: '#FAF9F6',
            100: '#F7F5F0',
            200: '#F5F1E8',
            300: '#E8E3D5',
            400: '#D4C9B0',
            500: '#C9A96B',
            600: '#A68B5B',
            700: '#8B7355',
          },
          // Natural Browns & Tans
          brown: {
            50: '#F5F3EF',
            100: '#E8E0D6',
            200: '#D4C4B0',
            300: '#B8A082',
            400: '#9D8265',
            500: '#7A6349',
            600: '#5C4A36',
            700: '#3E3224',
          },
          // Muted Greens (Natural & Calming)
          green: {
            50: '#F0F4ED',
            100: '#E0E9DB',
            200: '#C4D4B8',
            300: '#9CAF88',
            400: '#7A9471',
            500: '#5F6B5A',
            600: '#4A5443',
            700: '#353D2F',
          },
          // Soft Grays (Minimalist)
          gray: {
            50: '#FAFAF9',
            100: '#F5F5F3',
            200: '#E5E5E5',
            300: '#D0D0D0',
            400: '#A8A8A8',
            500: '#8B8B8B',
            600: '#6B6B6B',
            700: '#4A4A4A',
            800: '#2C2C2C',
            900: '#1A1A1A',
          },
          // Accent Colors (Subtle & Warm)
          accent: {
            terracotta: '#C97D60',
            sage: '#9CAF88',
            clay: '#B8A082',
            sand: '#D4C9B0',
            charcoal: '#4A4A4A',
          },
        },
        // Primary colors using Japandi palette
        primary: {
          50: '#FAF9F6',
          100: '#F7F5F0',
          200: '#E8E3D5',
          300: '#D4C9B0',
          400: '#C9A96B',
          500: '#A68B5B',
          600: '#8B7355',
          700: '#5F6B5A',
          800: '#4A5443',
          900: '#353D2F',
        },
        // Background colors
        background: {
          light: '#FAF9F6',
          soft: '#F7F5F0',
          warm: '#F5F1E8',
        },
        // Minimal & Clean Grays (Japandi style)
        minimal: {
          bg: '#FAF9F6',
          'bg-secondary': '#F7F5F0',
          'bg-tertiary': '#E8E3D5',
          text: '#2C2C2C',
          'text-muted': '#6B6B6B',
          border: '#E8E3D5',
        },
        // Glass & Modern Colors
        glass: {
          white: 'rgba(250, 249, 246, 0.7)',
          'white-strong': 'rgba(250, 249, 246, 0.9)',
          dark: 'rgba(0, 0, 0, 0.05)',
          'dark-strong': 'rgba(0, 0, 0, 0.1)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // Japandi-inspired gradients
        'gradient-japandi': 'linear-gradient(135deg, #F7F5F0 0%, #E8E3D5 100%)',
        'gradient-warm': 'linear-gradient(135deg, #C9A96B 0%, #A68B5B 100%)',
        'gradient-natural': 'linear-gradient(135deg, #9CAF88 0%, #7A9471 100%)',
        'gradient-soft': 'linear-gradient(135deg, #FAF9F6 0%, #F5F1E8 100%)',
        'gradient-terracotta': 'linear-gradient(135deg, #C97D60 0%, #B8A082 100%)',
        'gradient-primary': 'linear-gradient(135deg, #A68B5B 0%, #8B7355 100%)',
        'gradient-accent': 'linear-gradient(135deg, #9CAF88 0%, #7A9471 100%)',
        'gradient-cool': 'linear-gradient(135deg, #9CAF88 0%, #5F6B5A 100%)',
        'gradient-minimal': 'linear-gradient(135deg, #FAF9F6 0%, #F7F5F0 100%)',
        // Glassmorphism
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      boxShadow: {
        // Soft, natural shadows (Japandi style)
        'japandi': '0 2px 20px -5px rgba(0, 0, 0, 0.05), 0 8px 16px -8px rgba(0, 0, 0, 0.03)',
        'japandi-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.08), 0 4px 12px -4px rgba(0, 0, 0, 0.04)',
        'japandi-xl': '0 20px 60px -15px rgba(0, 0, 0, 0.1)',
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 8px 16px -8px rgba(0, 0, 0, 0.1)',
        'soft-xl': '0 20px 50px -12px rgba(0, 0, 0, 0.15)',
        // Glassmorphism Shadow
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
        // Colored Shadows - Soft Japandi
        'primary': '0 10px 30px -5px rgba(166, 139, 91, 0.2)',
        'accent': '0 10px 30px -5px rgba(156, 175, 136, 0.25)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
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
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

