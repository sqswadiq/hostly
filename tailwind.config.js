/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hostly: {
          primary: "#FFFFFF",
          secondary: "#FACC15",
          accent: "#000000",
        },
      },
    },
  },
  plugins: [],
}
