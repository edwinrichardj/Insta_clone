module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [ require("tailwindcss-scrollbar"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar-hide"),
  ],
}
