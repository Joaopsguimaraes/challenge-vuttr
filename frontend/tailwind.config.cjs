/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: 'Roboto, sans-serif',
      colors:{
        background:{
          700: "#303030",
          500: "#202022",
        }
      },
    },
  },
  plugins: [],
}
