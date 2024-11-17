/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
      colors: {
          "background": "#101418",
          "dark-highlight": "#20153a",
          "highlight": "#6233a4",
          "light-highlight": "#9063cf",
          "secondary": "#f3dad7",
          "foreground": "#fef6ff",
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['Inter', 'serif'],
        },
        extend: {},
    },
  plugins: [],
}

