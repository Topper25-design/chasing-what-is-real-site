/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#000000',
          'light-grey': '#D3D3D3',
          red: '#C1272D',
          'dark-red': '#991F24',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'Segoe UI', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

