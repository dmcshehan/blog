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
          DEFAULT: "#2563EB",
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
