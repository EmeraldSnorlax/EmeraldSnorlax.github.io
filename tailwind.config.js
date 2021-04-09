const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'grey': colors.trueGray, 
      'purple': colors.purple,
      'pink': colors.pink,
      'red': colors.red,
      'white': colors.white,
      'black': colors.black,
      'blue-grey': colors.coolGray
    }
  },
  variants: {
    fill: ['dark'],
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
