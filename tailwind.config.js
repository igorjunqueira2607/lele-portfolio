/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lele: {
          50: '#71879e',
        },
      },
      fontFamily: {
        'montserrat': ['"Montserrat"', 'cursive'],
      },
      boxShadow: {
        '3xl': '0 100px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

