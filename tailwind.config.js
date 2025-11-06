export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        pink: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        cream: {
          50: '#fefcf9',
          100: '#fdf9f3',
          200: '#fbf3e7',
          300: '#f9eddb',
          400: '#f5e1c3',
          500: '#f1d5ab',
          600: '#d9bf97',
          700: '#b59f7e',
          800: '#917f65',
          900: '#776852',
        },
        champagne: {
          50: '#fdfaf5',
          100: '#faf5eb',
          200: '#f5e6cd',
          300: '#efd7af',
          400: '#e5b973',
          500: '#da9b37',
          600: '#c48b32',
          700: '#a3742a',
          800: '#825d22',
          900: '#6a4c1b',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'glow-pink': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(236, 72, 153, 0.3)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(236, 72, 153, 0.6)',
          },
        },
      },
      backgroundImage: {
        'gradient-pink': 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
        'gradient-rose': 'linear-gradient(135deg, #f43f5e 0%, #be185d 100%)',
        'gradient-champagne': 'linear-gradient(135deg, #da9b37 0%, #a3742a 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-lg': '0 16px 48px 0 rgba(31, 38, 135, 0.12)',
        'glass-pink': '0 8px 32px 0 rgba(236, 72, 153, 0.15)',
        'glow-pink': '0 0 30px rgba(236, 72, 153, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}