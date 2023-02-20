/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Rubik', 'sans-serif']
      },
      backgroundImage: {
        'linear-gradient': 'linear-gradient(180deg, #8257E5 0%, #271A45 100%);',
        'radial-gradient': 'radial-gradient(15px, transparent 50%, #271A45 100%);',
      }
    },
  },
  plugins: [],
}
