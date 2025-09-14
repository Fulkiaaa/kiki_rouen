/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#e66303',
        sun: '#fed537',
      },
      boxShadow: {
        brand: '0 8px 30px rgba(230, 99, 3, 0.25)',
      },
      fontFamily: {
        display: ['ui-rounded','system-ui','-apple-system','Segoe UI','Roboto','Ubuntu','Cantarell','Noto Sans','sans-serif'],
      },
    },
  },
  plugins: [],
}
