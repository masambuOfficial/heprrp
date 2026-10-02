import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    // Sharp corners site-wide. To bring rounding back, restore values here (e.g. md: "0.375rem", full: "9999px").
    borderRadius: {
      none: "0",
      sm: "0",
      DEFAULT: "0",
      md: "0",
      lg: "0",
      xl: "0",
      "2xl": "0",
      "3xl": "0",
      full: "0",
    },
    extend: {
      colors: {
        navy: { DEFAULT: "#0A2342", light: "#12355B" },
        brand: {
          DEFAULT: "#0F8B8D", // clinical teal
          dark: "#0C7375",
          light: "#6CC3BE",
          soft: "#E3F2F1",
          mist: "#9ED8D6",
        },
        surface: "#F3F5F7", // soft gray background
        line: "#DCE2E8",
        ink: "#1B2B3A",
        muted: "#5B6B7A",
      },
      fontFamily: {
        sans: ['"Public Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
