/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'], 
        serif: ['"Roca Two"', 'serif'], 
      },
      colors: {
        'jelaeis': {
          light: '#FDFBF7', // Krem putih tulang
          earth: '#D4C3A3', // Coklat pasir estetik
          leaf: '#4A5D23',  // Hijau sage
          dark: '#2C3E18',  // Hijau super gelap
        }
      }
    },
  },
  plugins: [],
}