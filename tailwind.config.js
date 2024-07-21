/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#BF7242",
        second: "#562601",
        third: "#885E39",
        thirdprimary: "#A0836C",
        four:"#EBE1DB",
      },
    },
  },
  plugins: [],
};
