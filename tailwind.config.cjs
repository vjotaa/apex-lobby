module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      minWidth: {
        100: "1000px",
      },
      colors: {
        blue: {
          100: "#a6a6c9",
          200: "#565772",
          250: "#282a48",
          300: "#1B1C30",
          400: "#131324",
          500: "#0d0d19",
        },
        violet: "rgb(123,87,222)",
      },
    },
  },
  plugins: [],
};
