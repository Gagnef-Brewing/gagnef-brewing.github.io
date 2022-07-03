const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './beers/*.html',
    './*.html',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Simvoni', 'sans'],
        title: ['"Bitter sweet"', 'sans'],
      },
      colors: {
        black: '#0e100f',
        white: '#f6f5f6',
        'gagnef-green': {
          500: '#51a446',
        },
        'gagnef-yellow': {
          500: '#f1c04d',
        },
        'gagnef-pink': {
          500: '#f094b4',
        },
        'gagnef-orange': {
          500: '#f47f54',
        },
        'gagnef-blue': {
          500: '#0f70b8',
        },
        'gagnef-red': {
          500: '#d81e37',
        },
        'gagnef-indigo': {
          500: '#3d3b8d',
        },
        'gagnef-grayblue': {
          500: '#003743',
        },
        'gagnef-moss': {
          500: '#016c67',
        },
        'gagnef-raspberry': {
          500: '#e01b4f',
        }
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}