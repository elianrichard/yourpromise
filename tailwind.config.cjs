/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Apercu"],
        serif: ["Bad Script", "cursive"],
      },
      colors: {
        mainBlue: "#1B92A7",
        mainYellow: "#FF9933",
      },
    },
  },
  plugins: [],
};

module.exports = config;
