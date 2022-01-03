module.exports = {
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './beers/*.md',
    './*.html',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      screens: {
        'md': '710px',
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