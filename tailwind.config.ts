import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      fontSize: { base: "1.25rem" },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans]
      },
      colors: {
        "primary-content": "rgb(255, 255, 255)",
        "primary-dark": "rgb(95, 20, 224)",
        "primary-light": "rgb(155, 105, 241)",

        "secondary-content": "rgb(3, 37, 10)",
        "secondary-dark": "rgb(20, 224, 61)",
        "secondary-light": "rgb(105, 241, 132)",

        background: "rgb(3, 7, 18)",
        "background-items": "rgb(37, 35, 41)",
        foreground: "rgb(255, 255, 255)",
        border: "rgb(31, 41, 55)",

        copy: "rgb(251, 250, 253)",
        "copy-light": "rgb(213, 203, 230)",
        "copy-lighter": "rgb(158, 135, 197)",

        success: "rgb(58, 237, 58)",
        warning: "rgb(237, 237, 58)",
        error: "rgb(237, 58, 58)",

        "success-content": "rgb(3, 37, 3)",
        "warning-content": "rgb(237, 150, 58)",
        "error-content": "rgb(255, 255, 255)",

        input: "rgb(3, 37, 10)",
        ring: "rgb(124, 58, 237)",

        primary: {
          DEFAULT: "rgb(124, 58, 237)",
          foreground: "rgb(255, 255, 255)"
        },
        secondary: {
          DEFAULT: "rgb(58, 237, 94)",
          foreground: "rgb(255, 255, 255)"
        },
        destructive: {
          DEFAULT: "rgb(237, 150, 58)",
          foreground: "rgb(255, 255, 255)"
        },
        muted: {
          DEFAULT: "rgb(102, 102, 102)",
          foreground: "rgb(38, 38, 38)"
        },
        accent: {
          DEFAULT: "rgb(95, 20, 224)",
          foreground: "rgb(255, 255, 255)"
        },
        popover: {
          DEFAULT: "rgb(213, 203, 230)",
          foreground: "rgb(255, 255, 255)"
        },
        card: {
          DEFAULT: "rgb(213, 203, 230)",
          foreground: "rgb(255, 255, 255)"
        }
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;

export default config;
