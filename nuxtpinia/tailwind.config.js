/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kenia", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#270A4B",
        secondary: "#E8C36D",
        dark: "#110734",
      },
    },
  },
  plugins: [],
};
