/** @type {import('tailwindcss').Config} */
const primeui = require('tailwindcss-primeui');

export default {
  content: [],
  theme: {
    extend: {
      colors: {
      // Configure your color palette here
      'nijika': '#E6D47B',
      'yamada': '#4061A0',
      'hitori': '#EEB8C4',
      'ikuyo': '#D0574E',
      'yamada-light': '#42cafc',
    }
  },
    
  },
  plugins: [primeui],
}

