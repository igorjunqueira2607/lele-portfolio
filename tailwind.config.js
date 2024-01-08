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
      // backgroundImage: {
      //   'main': "url('/images/louvre3.jpg')",
      // }
    },
  },
  plugins: [],
}

