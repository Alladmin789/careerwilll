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
      colors:{
        gray:{
          400: '#1d2b36',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
