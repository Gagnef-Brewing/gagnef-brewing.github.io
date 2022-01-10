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
        title: ['"EB Garamond"', 'serif'],
      },
      colors: {
        white: '#fbfbfb',
        gagnef_green: {
          100: '#f7fafc',
          // ...
          900: '#fff000',
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}