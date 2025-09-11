/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        iaesteBlue: {
          DEFAULT: "#1E3A8A",
          light: "#3B82F6",
        },
        iaesteGold: "#F59E0B",
      },
    },
  },
  plugins: [],
}


