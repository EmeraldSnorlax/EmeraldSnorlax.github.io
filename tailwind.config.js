const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content:  ['./src/**/*.ejs'],
    options: {
      keyframes: true,
      fontFace: true,
    }
    },
  darkMode: 'media', // or 'media' or 'class'
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
