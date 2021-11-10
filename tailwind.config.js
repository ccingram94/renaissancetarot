module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: [
          'IM Fell English', 'serif',
        ],
        sans: [
          'Montserrat Alternates', 'sans',
        ],
      },
      backgroundImage: {
        'hero': "url('../../tarot.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
