/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alegreya: ["Alegreya", "serif"],
        bitter: ["Bitter", "serif"],
      },
    },
  },
  plugins: [],
}
