const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontSize: { base: "1.25rem" },
    extend: {
      colors: {
        amber: colors.amber,

        primary: "#579bfc",
        "primary-content": "#022f6e",
        "primary-dark": "#257dfb",
        "primary-light": "#89b9fd",

        secondary: "#9c57fc",
        "secondary-content": "#ffffff",
        "secondary-dark": "#7e25fb",
        "secondary-light": "#ba89fd",

        background: "#16191d",
        foreground: "#21252c",
        border: "#363e49",

        copy: "#fbfbfc",
        "copy-light": "#d3d8de",
        "copy-lighter": "#98a3b3",

        success: "#57fc57",
        warning: "#fcfc57",
        error: "#fc5757",

        "success-content": "#015201",
        "warning-content": "#525201",
        "error-content": "#520101"
      }
    }
  },
  plugins: []
};
