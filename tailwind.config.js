/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: (theme) => ({
        ...theme("colors"),
        h: theme("colors.white"),
        p: theme("colors.gray"),
        primary: theme("colors.yellow.default"),
      }),
      backgroundColor: (theme) => ({
        ...theme("colors"),
        body: theme('colors["light-gray"]'),
        primary: theme("colors.yellow.default"),
        "primary-hover": theme("colors.yellow.dark"),
      }),
      spacing: {
        "btn-x": "30px",
        "btn-y": "15px",
        "card-x": "25px",
        "card-y": "40px",
        "0-auto": "0 auto",
        50: "50px",
      },
    },
  },
  plugins: [],
};
