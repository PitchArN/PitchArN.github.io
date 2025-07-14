// tailwind.config.js
const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/(button|modal|ripple|spinner).js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Prompt", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [heroui()],
};
