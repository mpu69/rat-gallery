/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1380px",
      xxl: "1536px",
    },
    extend: {
      fontFamily: {
        Berlin: "Berlin-Sans-FB-Demi-Bold",
        "Barlow-Bold": "Barlow-Bold",
        "Barlow-Light": "Barlow-Light",
      },
      colors: {
        bg: "#110915",
        bg2: "#211229",
        primary: "#48295b",
        secondary: "#180e20",
        accent: "#ceb4de",
        text: "#f6f1f9",
      },
      backgroundImage: {
        xdd: "url('/img/rathome.jpg')",
        xddgang: "url('/img/xddgang.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
