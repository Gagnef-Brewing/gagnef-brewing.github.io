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
        white: '#fffff2',
        gagnef_green: {
          100: '#f7fafc',
          // ...
          900: '#fff000',
        },
        'gagnef-gray': '#384042',
      },
      screens: {
        'ty': '290px',
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}