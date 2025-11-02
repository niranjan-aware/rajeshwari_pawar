export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#FFF5F7',
          100: '#FFE4E9',
          200: '#FFCAD4',
          300: '#FFB0C1',
          400: '#FF8FA8',
          500: '#FF6B9D',
          600: '#F94C87',
          700: '#E63977',
          800: '#C42D62',
          900: '#8B2F5C',
        },
        rose: {
          50: '#FFF1F3',
          100: '#FFE4E8',
          200: '#FFCCD5',
          300: '#FFB3C1',
          400: '#FF8099',
          500: '#FF4D6D',
          600: '#E63946',
          700: '#C5192D',
          800: '#A4161A',
          900: '#660708',
        },
        champagne: {
          50: '#FEFDFB',
          100: '#FBF8F3',
          200: '#F7F0E5',
          300: '#F4E4C1',
          400: '#EDD89E',
          500: '#E5CC7B',
          600: '#D4AF37',
          700: '#B8941F',
          800: '#8B6F1B',
          900: '#5E4A12',
        },
        cream: {
          50: '#FFFEF9',
          100: '#FFFCF0',
          200: '#FFF8E1',
          300: '#FFF3D1',
          400: '#FFEDB3',
          500: '#FFE494',
          600: '#FFD966',
          700: '#FFC933',
          800: '#E6AC00',
          900: '#B38600',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          dark: 'rgba(255, 107, 157, 0.1)',
          border: 'rgba(255, 255, 255, 0.2)',
          'pink-light': 'rgba(255, 107, 157, 0.05)',
          'pink-medium': 'rgba(255, 107, 157, 0.15)',
          'pink-strong': 'rgba(255, 107, 157, 0.25)',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'script': ['Dancing Script', 'cursive'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        'display-sm': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }],
        'display-md': ['3rem', { lineHeight: '3.25rem', fontWeight: '700' }],
        'display-lg': ['4rem', { lineHeight: '4.25rem', fontWeight: '700' }],
        'display-xl': ['5rem', { lineHeight: '5.25rem', fontWeight: '700' }],
      },
      screens: {
        'xs': '375px',
        'sm': '390px',
        'md': '428px',
        'tablet-portrait': '744px',
        'tablet': '820px',
        'lg': '1024px',
        'tablet-landscape': '1133px',
        'xl': '1180px',
        'tablet-pro': '1366px',
        'laptop-sm': '1440px',
        'laptop': '1512px',
        'laptop-lg': '1680px',
        'laptop-xl': '1728px',
        '2xl': '1920px',
        '3xl': '2560px',
        '4xl': '3840px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out infinite 1s',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-pink': 'glowPink 3s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in': 'slideIn 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-slower': 'spin 30s linear infinite',
        'wave': 'wave 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 107, 157, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(255, 107, 157, 0.8)' }
        },
        glowPink: {
          '0%': { 
            boxShadow: '0 0 20px rgba(255, 107, 157, 0.3), 0 0 40px rgba(255, 107, 157, 0.2)',
            filter: 'brightness(1)'
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(255, 107, 157, 0.6), 0 0 80px rgba(255, 107, 157, 0.3)',
            filter: 'brightness(1.1)'
          }
        },
        slideUp: {
          '0%': { 
            transform: 'translateY(100px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        slideIn: {
          '0%': { 
            transform: 'translateX(-100px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        slideInRight: {
          '0%': { 
            transform: 'translateX(100px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        scaleIn: {
          '0%': { 
            transform: 'scale(0.8)',
            opacity: '0'
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1'
          }
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(10deg)' },
          '75%': { transform: 'rotate(-10deg)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        },
        pulseGlow: {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 20px rgba(255, 107, 157, 0.4)'
          },
          '50%': {
            opacity: '0.8',
            boxShadow: '0 0 40px rgba(255, 107, 157, 0.6)'
          }
        }
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(255, 107, 157, 0.1)',
        'glass-lg': '0 25px 50px rgba(255, 107, 157, 0.15)',
        'glass-pink': '0 8px 32px rgba(255, 107, 157, 0.2)',
        'glow-sm': '0 0 20px rgba(255, 107, 157, 0.3)',
        'glow': '0 0 40px rgba(255, 107, 157, 0.4)',
        'glow-lg': '0 0 60px rgba(255, 107, 157, 0.5)',
        'glow-pink': '0 0 30px rgba(255, 107, 157, 0.6), 0 0 60px rgba(255, 77, 109, 0.3)',
        'inner-glass': 'inset 0 2px 4px rgba(255, 255, 255, 0.1)',
        'inner-glow': 'inset 0 0 20px rgba(255, 107, 157, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-pink': 'linear-gradient(135deg, #FFB6C1 0%, #FF6B9D 50%, #E63977 100%)',
        'gradient-rose': 'linear-gradient(135deg, #FFE4E8 0%, #FF8099 50%, #E63946 100%)',
        'gradient-champagne': 'linear-gradient(135deg, #FFF8E1 0%, #E5CC7B 50%, #D4AF37 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #FFB6C1 0%, #FF8FA8 25%, #FF6B9D 50%, #E63946 75%, #8B2F5C 100%)',
        'noise': 'url("data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noiseFilter)" opacity="0.05"/%3E%3C/svg%3E")',
      },
      backgroundSize: {
        '200': '200% 200%',
        '300': '300% 300%',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.glass': {
          'backdrop-filter': 'blur(16px) saturate(180%)',
          'background-color': 'rgba(255, 255, 255, 0.05)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
          'box-shadow': '0 8px 32px rgba(255, 107, 157, 0.1)',
        },
        '.glass-pink': {
          'backdrop-filter': 'blur(20px) saturate(180%)',
          'background-color': 'rgba(255, 107, 157, 0.08)',
          'border': '1px solid rgba(255, 107, 157, 0.2)',
          'box-shadow': '0 8px 32px rgba(255, 107, 157, 0.2)',
        },
        '.glass-strong': {
          'backdrop-filter': 'blur(24px) saturate(200%)',
          'background-color': 'rgba(255, 255, 255, 0.15)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
          'box-shadow': '0 25px 50px rgba(255, 107, 157, 0.15)',
        },
        '.glass-rose': {
          'backdrop-filter': 'blur(16px) saturate(180%)',
          'background-color': 'rgba(255, 180, 193, 0.1)',
          'border': '1px solid rgba(255, 180, 193, 0.2)',
          'box-shadow': '0 8px 32px rgba(255, 180, 193, 0.2)',
        },
        '.text-gradient-pink': {
          'background': 'linear-gradient(135deg, #FF6B9D 0%, #E63977 100%)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.text-gradient-rose': {
          'background': 'linear-gradient(135deg, #FF8099 0%, #E63946 100%)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.text-gradient-champagne': {
          'background': 'linear-gradient(135deg, #E5CC7B 0%, #D4AF37 100%)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      })
    }
  ],
}