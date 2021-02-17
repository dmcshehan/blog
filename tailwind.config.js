const colors = require("tailwindcss/colors")

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Titillium Web", "sans-serif"],
      title: ["Ruda", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f3ca20",
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
