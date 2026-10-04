/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#0F172A',
        brand: {
          orange: '#356BFF',
          dark: '#0F172A',
          light: '#FBF8F1',
          gray: '#E4E8F0'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Archivo Black"', '"Inter"', 'sans-serif'],
        Liberation: ['"Liberation Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
