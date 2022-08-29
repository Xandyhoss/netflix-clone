/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mini: "335px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        roboto: "Roboto Slab, serif",
      },
    },
  },
  plugins: [],
};
