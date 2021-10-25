module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // fontFamily: {
      //   productSans: ['Montserrat', sans-serif],
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
