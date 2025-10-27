/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-red': '#DC2626',
        'cyber-dark': '#000000',
        'cyber-gray': '#1A1A1A',
      },
      backgroundColor: {
        'pure-black': '#000000',
      },
    },
  },
  plugins: [],
}

