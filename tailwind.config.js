/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#50653e',
        secondary: '#a8d08d',
        accent1: '#d1e058',
        accent2: '#f1a33e',
        darkText: '#4e4e4e',
        lightText: '#a1a1a1',
        border: '#d3d3d3',
        success: '#81c784',
        error: '#e57373',
      },
    },
  },
  plugins: [],
}
