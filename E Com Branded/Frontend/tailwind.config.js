/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      fontFamily: {
        expletus: ['"Expletus Sans"', "sans-serif"],
        nunito: ['"Nunito Sans"', "sans-serif"],
        josefin: ['"Josefin Sans"', "sans-serif"],
        encode: ['"Encode Sans"', "sans-serif"],
        "pt-caption": ['"PT Sans Caption"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
        "m-plus-2": ['"M PLUS 2"', "sans-serif"],
        ubuntu: ['"Ubuntu"', "sans-serif"],
        kodchasan: ['"Kodchasan"', "sans-serif"],
      },
      screens: {
        'custom-sm': '425px',
        'custom-lg': '768px',
      },
      width: {
        '425': '425px',
        '768': '768px',
      },
      colors: {
        whatsappColor: "#25D366",
        fbColor: "#4267B2",
        twitterColor: "#1DA1F2",
        microsoftOrange: "#F25022",
        microsoftGreen: "#7FBA00",
        microsoftBlue: "#00A4EF",
        microsoftYellow: "#FFB900",
        microsoftGray: "#737373",
        hpColor: "#0096D6",
        goldenYellow: "#ffdf00",
        b: "#00a4fae",
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      fontVariationSettings: {
        nunito: {
          wdth: 100,
          YTLC: 500,
        },
        encode: {
          wdth: 100,
        },
      },

      rotate: {
        360: "360deg",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },


    },
  },
  plugins: [],
};
