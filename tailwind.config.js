/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",
  "./node_modules/react-tailwindcss-select/dist/index.esm.js"
  ],
  theme: {
    fontFamily: {
      sans: ['catamaran', ...fontFamily.sans],
    },
    extend: {
      fontFamily: {
        merriweather: ['merriweather', ...fontFamily.sans]
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
