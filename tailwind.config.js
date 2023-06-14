/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./profile-feed/**/*.{html,js}"],
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
    extend: {
      colors: {
        header_bg: "#002138",
        theme_color: "#1a68ce",
        primary_color: "#0DC1D9",
        text_color: "#5e6e82",
        border_color: "#344050",
        th_border: "#d8e2ef",
        text_colors: "#344050",
      },
      boxShadow: {
        theme_shadow: "0px 0px 15px rgba(46, 49, 146, 0.06);",
        primary_shadow:
          "0 7px 14px 0 rgba(65,69,88,.1), 0 3px 6px 0 rgba(0,0,0,.07)",
        after_shadow: "0 0.125rem 0.25rem rgba(0,0,0,.075)",
      },
    },
    fontFamily: {
      poppins: "'Poppins', sans-serif",
    },
  },
  plugins: [],
};
