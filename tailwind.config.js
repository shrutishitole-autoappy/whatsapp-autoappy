/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,

  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-quill/dist/*.css",
  ],

  theme: {
    extend: {
      colors: {
        // New project colors
        primary: "#147db5",
        "primary-dark": "#0f5b8a",
        secondary: "#50b8e7",
        "secondary-dark": "#3a9cd1",

        // Theme color palette
        theme: {
          50: "#f1f8fe",
          100: "#e3f0fb",
          200: "#c1e1f6",
          300: "#8ac8ef",
          400: "#4bade5",
          500: "#2493d3",
          600: "#1675b3",
          700: "#135d91",
          800: "#144f78",
          900: "#164264",
          950: "#0f2b42",
        },

        // Existing WhatsApp colors
        whatsapp: {
          green: "#25D366",
          teal: "#075E54",
          dark: "#128C7E",
          light: "#DCF8C6",
          blue: "#34B7F1",
          bg: "#ECE5DD",
        },
      },

      // Container configuration
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },

      // Animations
      animation: {
        "slide-in": "slideIn 0.3s ease-in-out",
      },

      // Animation keyframes
      keyframes: {
        slideIn: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },

      // Font
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
  ],
};