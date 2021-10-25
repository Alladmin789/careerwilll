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
          50: '#EFF3F4',
          300:'#c1daec',
          400: '#1d2b36',
        },
        green:{
          300: '#149ca8',
          400: '#1c8693',
          500: '#069a49',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
