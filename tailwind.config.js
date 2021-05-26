const colors = require("tailwindcss/colors")

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      primary: ["Hind", "sans-serif"],
      secondary: ["Sofia Pro", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0086ff",
        },
        secondary: {
          DEFAULT: "#000000",
        },
        fill: {
          DEFAULT: "#f7fafc",
        },
      },
      minHeight: {
        vh: "calc(100vh - 64px)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
