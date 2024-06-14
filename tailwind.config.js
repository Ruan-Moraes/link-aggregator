/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      width: {
        '32rem': '32rem',
      },
      // #2aca44,
      // #2e60f2,
      // #662ef2,
      colors: {
        121212: '#121212',
        ff5f5a: '#ff5f5a',
        ff2c26: '#ff2c26',
      },
    },
  },
  plugins: [],
};
