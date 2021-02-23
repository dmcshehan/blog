const colors = require("tailwindcss/colors")

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      secondary: ["Titillium Web", "sans-serif"],
      primary: ["Ruda", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0086ff",
        },
        secondary: {
          DEFAULT: "#000000",
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
