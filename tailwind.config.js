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
        title: ['"EB Garamond"', 'serif'],
      },
      colors: {
        white: '#f6f5f6',
        'gagnef-green': {
          100: '#f7fafc',
          500: '#016c67',
          900: '#fff000',
        },
        'gagnef-gray': '#003743',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}