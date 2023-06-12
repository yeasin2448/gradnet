/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.html"],
  theme: {
    container: {
      padding: {
        DEFAULT: ".75rem",
        sm: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "2.5rem",
      },
    },
    screens: {
      xxs: "375px",
      xs: "425px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1500px",
      "max-lg": { max: "1023px" },
      "max-md": { max: "767px" },
      "max-sm": { max: "639px" },
    },
    fontFamily: {
      poppins: "'Poppins', sans-serif",
    },
    extend: {
      colors: {
        header_bg: "#002138",
        theme_color: "#1a68ce",
        primary_color: "#0DC1D9",
        text_color: "#5e6e82",
        border_color: "#344050",
      },
      boxShadow: {
        theme_shadow: "0px 0px 15px rgba(46, 49, 146, 0.06);",
      },
    },
  },
  plugins: [],
};

// const plugin = require("tailwindcss/plugin");

// module.exports = {
//   content: ["./pages/**/*.html"],
//   theme: {
//     container: {
//       padding: {
//         DEFAULT: ".75rem",
//         sm: "1rem",
//         lg: "1.5rem",
//         xl: "2rem",
//         "2xl": "2.5rem",
//       },
//     },
//     screens: {
//       xxs: "375px",
//       xs: "425px",
//       sm: "576px",
//       md: "768px",
//       lg: "992px",
//       xl: "1200px",
//       "2xl": "1500px",
//       "max-lg": { max: "1023px" },
//       "max-md": { max: "767px" },
//       "max-sm": { max: "639px" },
//     },
//     fontFamily: {
//       poppins: "'Poppins', sans-serif",
//     },
//     extend: {
//       colors: {
//         header_bg: "#002138",
//         theme_color: "#1a68ce",
//         primary_color: "#0DC1D9",
//         text_color: "#5e6e82",
//         border_color: "#344050",
//       },
//       boxShadow: {
//         theme_shadow: "0px 0px 15px rgba(46, 49, 146, 0.06);",
//       },
//     },
//   },
//   plugins: [],
// };
