/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Refined Warmth カラーパレット
        cream: {
          50:  '#fdfaf6',
          100: '#faf5ee',
          200: '#f4ead8',
          DEFAULT: '#faf5ee',
        },
        rose: {
          gold: '#C4956A',
          'gold-light': '#d4aa85',
          'gold-dark': '#a87850',
        },
        charcoal: {
          DEFAULT: '#3d3530',
          light: '#6b5f58',
          muted: '#9e8f86',
        },
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        dm: ['"DM Sans"', 'sans-serif'],
        noto: ['"Noto Serif JP"', 'serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}
