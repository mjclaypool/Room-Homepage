/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "spartan": ["League Spartan", "sans-serif"],
      },
      colors: {
        "primary-dark-grey": "hsl(0, 0%, 63%)",
        "primary-black": "hsl(0, 0%, 0%)",
        "primary-white": "hsl(0, 0%, 100%)",
        "primary-very-dark-grey": "hsl(0, 0%, 27%)",
      }
    },
  },
  plugins: [],
}

