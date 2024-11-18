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
            "tertiary": "#cbc2cc",
            "foreground": "#fef6ff",
            "whatsapp": "#128c7e",
            "glass": "rgba(8, 10, 12, 0.55)",
        },
        fontFamily: {
            sans: ["Inter", "sans-serif"],
            serif: ["Inter", "serif"],
        },
        extend: {
            backgroundImage: {
                "body": "url('/assets/hero-background.png'), linear-gradient(0, #080a0c 75%, #101418)",
                "gradient": "radial-gradient(at right bottom, #6233a4, rgba(32 21 58) 90%)"
            }
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("tailwind-scrollbar"),
    ],
}