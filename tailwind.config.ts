import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray700: "#202325",
        gray600: "rgba(108, 117, 125, 1)",
        gray500: "#595D60",
        gray400: "#6C7174",
        gray300: "#CED4DA",
        gray200: "#B7BCC0",
        gray100: "#E9ECEF",
        gray50: "rgba(243, 244, 245, 1)",
        white: "#FFFFFF",
        black: "#1A1E27",
        gray: "rgba(6, 11, 17, 0.56)",
        disabled: "rgba(6, 11, 17, 0.28)",
        lightGray: "rgba(6, 11, 17, 0.16)",
        primary: "#396FFF",
        primary100: "#6151F3",
        secondary: "rgba(108, 117, 125, 1)",
        secondaryDisable: "rgba(172, 177, 182, 1)",
        blue500: "rgba(33, 150, 243, 1)",
        blue100: "rgba(227, 242, 253, 1)",
        red500: "rgba(255, 60, 60, 1)",
        red100: "rgba(255, 240, 240, 1)",
        green500: "rgba(67, 160, 71, 1)",
        green100: "rgba(232, 245, 233, 1)",
        divider: "rgba(231, 233, 235, 1)",
      },

      screens: {
        max: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
