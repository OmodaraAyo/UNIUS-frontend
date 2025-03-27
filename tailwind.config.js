/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#3490DC",
        secondary: "#FFC107",
        tertiary: "#E91E63",
      },
      // fontFamily: {
      //   sans: ["Poppins", "sans-serif"],
      // },
      // spacing: {
      //   "100": "20rem",
      //   "120": "24rem",
      //   "140": "28rem",
      // },
      // maxWidth: {
      //   "2xl": "1200px",
      // },
      // minWidth: {
      //   "3xl": "1440px",
      // },
      // height: {
      //   "3xl": "1440px",
      // },
    },
  },
  plugins: [],
}