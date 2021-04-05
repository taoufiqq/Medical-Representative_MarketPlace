module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
       }
    },
  },
  variants: {
    extend: {
      transitionDuration: ['hover', 'focus'],
    },
  },
  plugins: [],
}
