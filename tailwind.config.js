/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-dark': '#430F6A',
        'purple-light': '#8D38B5',
        'purple-contrast': '#8d38b567',
      }
    },
  },
  plugins: [],
}