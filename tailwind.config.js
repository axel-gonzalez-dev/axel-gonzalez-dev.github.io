/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'asphalt': '#0E0605',
        'desert': '#ffffff',
        'jumbo': '#7A7A7C',
        'friar': '#84847D'
      }
    },
  },
  plugins: [],
}
