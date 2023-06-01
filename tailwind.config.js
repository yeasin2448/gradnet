/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.html"],
  theme: {
    container: {
      padding: {
        DEFAULT: ".5rem",
        sm: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "2.5rem",
      },
    },
    screens: {
      xxs: "320px",
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
    extend: {},
  },
  plugins: [],
};
