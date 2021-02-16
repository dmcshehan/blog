const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Open Sans", "sans-serif"],
      title: ["Work Sans", "sans-serif"],
    },
    colors: {
      primary: colors.blue,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
