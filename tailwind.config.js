/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        'slide-in-out': 'slideIn 0.5s ease-out, slideOut 0.5s ease-in 4.5s',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "prism-gradient": "var(--prism-gradient)",
        "lumi-blue": "var(--lumi-blue)",
        "lumi-dark-blue": "#02041d",
        "lumi-accent-green": "rgb(39, 178, 17)",
        "lumi-accent-blue": "#08FFFC",
        "lumi-accent-yellow": "rgb(253, 255, 113)",
        "lumi-accent-red": "rgb(253, 43, 43)",
        "lumi-accent-shadow": "#08FFFC20",
        "glass-border": "rgba(0, 0, 0, 0.08)", // Light mode
        "glass-background": "rgba(255, 255, 255, 0.05)", // Light mode
        dark: {
          "glass-border": "rgba(255, 255, 255, 0.1)", // Dark mode
          "glass-background": "rgba(0, 0, 0, 0.2)", // Dark mode
        },
        backdropBlur: {
          sm: '4px',
          md: '8px',
          lg: '12px',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - .5rem)",
        sm: "calc(var(--radius) - 1rem)",
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
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(100%)', opacity: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
}