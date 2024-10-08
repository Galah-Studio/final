/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/projects/abajora/**/*.{js,ts,jsx,tsx}",
    "./pages/projects/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      fontFamily: {
        comfortaa: ['Comfortaa', 'cursive'],
        maven: ['Maven Pro', 'sans-serif'],
      },
      colors: {
        'custom-dark': '#030001',
        'divider-dark': '#5E1028',
        'backbanner-dark': '#1e070f',
        'selectedbanner-dark': '#782243',
        'galah': '#ff2b69',
        'galahlight': '#c9466c',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
