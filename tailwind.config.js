/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class", //Enables class-based dark mode
    theme: {
        extend: {
            animation: {
                'pulse-slow': 'pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                'pulse-slow': {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '50%': {
                        transform: 'translateX(6px)',
                    },
                },
            },
            fontFamily: {
                allumi: ["AllumiBold", "sans-serif"],
                kanit: ["Kanit", "sans-serif"],
            },
            colors: {
                primary: "#FFFFFF", // White
                secondary: "#000000", // Black
            },
        },
    },
    plugins: [],
};
