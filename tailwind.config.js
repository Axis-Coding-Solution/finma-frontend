/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "rgb(var(--background)/<alpha-value>)",
        foreground: "rgb(var(--foreground)/<alpha-value>)",
        card: {
          DEFAULT: "rgb(var(--card)/<alpha-value>)",
          foreground: "rgb(var(--card-foreground)/<alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--popover)/<alpha-value>)",
          foreground: "rgb(var(--popover-foreground)/<alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--primary)/<alpha-value>)",
          disabled: "rgb(var(--primary-disabled)/<alpha-value>)",
          foreground: "rgb(var(--primary-foreground)/<alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary)/<alpha-value>)",
          foreground: "rgb(var(--secondary-foreground)/<alpha-value>)",
          dark: "rgb(var(--secondary-dark)/<alpha-value>)",
        },
        success: {
          DEFAULT: "rgb(var(--success)/<alpha-value>)",
          foreground: "rgb(var(--success-foreground)/<alpha-value>)",
        },
        warning: {
          DEFAULT: "rgb(var(--warning)/<alpha-value>)",
          foreground: "rgb(var(--warning-foreground)/<alpha-value>)",
        },
        info: {
          DEFAULT: "rgb(var(--info)/<alpha-value>)",
          foreground: "rgb(var(--info-foreground)/<alpha-value>)",
          light: {
            DEFAULT: "rgb(var(--info-light)/<alpha-value>)",
            foreground: "rgb(var(--info-light-foreground)/<alpha-value>)",
          },
        },
        muted: {
          DEFAULT: "rgb(var(--muted)/<alpha-value>)",
          foreground: "rgb(var(--muted-foreground)/<alpha-value>)",
          text: "rgb(var(--muted-text)/<alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive)/<alpha-value>)",
          foreground: "rgb(var(--destructive-foreground)/<alpha-value>)",
        },
        input: "rgb(var(--input)/<alpha-value>)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        lg: "calc(var(--radius) + 20px)",
        md: "calc(var(--radius) + 10px)",
        sm: "calc(var(--radius) - 10px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
