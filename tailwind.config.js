const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/**/*.html',
  ],
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
      'blue-grey': colors.coolGray,
      'blue': colors.blue,
      'yellow': colors.yellow,
      'indigo': colors.indigo
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
