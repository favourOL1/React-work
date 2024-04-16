/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "400px",
    },
    colors: {
      favor: "#fff000"
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'selector',
}