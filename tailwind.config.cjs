/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Neue Montreal"],
        serif: ["Bad Script", "cursive"],
      },
      colors: {
        mainBlue: "#1B92A7",
        mainYellow: "#FF9933",
        secondaryYellow: "#FEE665",
        mainPink: "#FF729F",
        mainLime: "#E8FCC2",
        mainCream: "#DAE4C5",
        mainSage: "#D0F4EA",
      },
    },
  },
  plugins: [],
};

module.exports = config;
