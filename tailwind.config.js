/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      xs: '390px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        ink: { 950: '#07100B', 900: '#0B1510', 800: '#101A14', 700: '#151F18' },
        forest: { 900: '#173D29', 700: '#1F5A38', 600: '#2D7047' },
        moss: '#6D9B62',
        bone: '#F3F1E9',
        sand: '#D8D5C8',
        stone: '#9EA39B',
      },
      fontFamily: {
        display: ['"Fraunces Variable"', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['"Hanken Grotesk Variable"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      opacity: {
        15: '0.15',
        35: '0.35',
        45: '0.45',
        55: '0.55',
        65: '0.65',
        85: '0.85',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
