/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './assets/js/*.mjs'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'serif'],
      },
      minWidth: { screen: '100vw' },
      maxWidth: { '32rem': '32rem' },
      colors: {
        121212: '#121212',
        ff5f5a: '#ff5f5a',
        ff2c26: '#ff2c26',
      },
    },
  },
  plugins: [],
};
