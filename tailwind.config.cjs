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
        paleWhite: "#EDEDED",
      },
      boxShadow: {
        lightBlack: "0px 4px 10px rgba(0,0,0,0.25)",
        mediumBlack: "0px 5px 15px rgba(0, 0, 0, 0.35)",
        heavyBlack: "7px 7px 26px 7px rgba(0,0,0,0.25)",
      },
      dropShadow: {
        lightBlack: "0px 4px 4px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

module.exports = config;
