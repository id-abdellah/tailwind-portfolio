/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1100px',
        '2xl': '1100px',
      }
    },
    extend: {},
    fontFamily: {
      sans: ["Nunito sans", "serif"]
    }
  },
  plugins: [],
}

