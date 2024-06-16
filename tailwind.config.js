/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      minWidth: { screen: '100vw' },
      maxWidth: { '32rem': '32rem' },
      colors: {
        121212: '#121212',
        '2d2e31': '#2d2e31',
        ff5f5a: '#ff5f5a',
        ff2c26: '#ff2c26',
      },
    },
  },
  plugins: [],
};
