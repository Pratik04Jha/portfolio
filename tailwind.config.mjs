export default tailwindConfig = {
  darkMode: "class", 
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#60B2DC",
          dark: "#C358F6",
        },
        background: {
          light: "#00ff00",
          dark: "#101010"
        }
      }
    }
  },
  plugins: [],
};
