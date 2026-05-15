export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7A003C", // Burgundy
        secondary: "#8A1455", // Wine Purple
        accent: "#D4A373", // Rose Gold
        background: "#FFF8F5", // Cream White
        gold: "#C89B3C", // Gold Accent
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
