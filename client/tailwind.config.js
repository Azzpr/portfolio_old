/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        navbar: ["Poppins"],
        text: ["Lato"],
      },
      colors: {
        primary: "#5e3aee",
        secondary: "#bdbbbb",
      },
    },
  },
  plugins: [],
};
