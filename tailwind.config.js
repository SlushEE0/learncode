/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize: { base: "1.25rem" },
      colors: {
        primary: "rgb(156, 87, 252)",
        "primary-content": "rgb(255, 255, 255)",
        "primary-dark": "rgb(126, 37, 251)",
        "primary-light": "rgb(186, 137, 253)",
        "primary-superdark": "rgb(60, 41, 86)",

        secondary: "rgb(183, 252, 87)",
        "secondary-content": "rgb(49, 83, 1)",
        "secondary-dark": "rgb(132, 221, 7)",
        "secondary-light": "rgb(204, 253, 137)",

        background: "rgb(15, 12, 19)",
        foreground: "rgb(37, 33, 43)",
        border: "rgb(62, 56, 72)",

        copy: "rgb(251, 251, 252)",
        "copy-light": "rgb(216, 212, 222)",
        "copy-lighter": "rgb(164, 155, 177)",

        success: "rgb(87, 252, 87)",
        warning: "rgb(252, 252, 87)",
        error: "rgb(252, 87, 87)",

        "success-content": "rgb(1, 82, 1)",
        "warning-content": "rgb(82, 82, 1)",
        "error-content": "rgb(82, 1, 1)"
      }
    }
  },
  plugins: []
};
