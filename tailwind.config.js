/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      sniffGreen: "#28d369",
      darkGreen: "#052814",
      sniffBg: "#f5fafc",
      black: "#000000",
      white: "#FFFFFF",
      textGray: "#686781",
    },
    fontFamily: {
      lexend: ["Lexend", "sans-serif"],
    },
  },
  plugins: [],
};
