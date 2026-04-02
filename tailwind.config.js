/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#10b981",
        secondary: "#06b6d4",
        background: "#0f172a",
        card: "#1e293b",
        border: "#334155",
      },
    },
  },
  plugins: [],
};
