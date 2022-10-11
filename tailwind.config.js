/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "dark-blue": "#0062FF",
      "dark-red": "#FC5A5A",
      "grey-100": "#171725",
      "grey-300": "#696974",
      "grey-400": "#92929D",
      "grey-500": "#B5B5BE",
      "grey-700": "#E2E2EA",
      "grey-800": "F1F1F5",
      ...colors,
    },
    extend: {
      fontFamily: {
        hellix: ["Hellix", "sans-serif"],
      },
      boxShadow: {
        low: "0px 12px 18px rgba(23, 23, 37, 0.04);",
      },
    },
  },
  plugins: [],
};
