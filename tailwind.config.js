module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#20852D",
        footer: "#1A1A1A",
        btn: "#F49E0B",
      },

      fontFamily: {
        Opensans: ['"Open Sans"', "cursive"],
        Boston: ['"Boston"', "cursive"],
        Know: ['"Know"', "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
