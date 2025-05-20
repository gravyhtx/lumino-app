/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";
import colors from "tailwindcss/colors";

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
        // Lumi brand solid colors
        "lumi-accent": "var(--lumi-accent)",
        "lumi-highlight": "var(--lumi-highlight)",
        "lumi-blue": "var(--lumi-blue)",
        "lumi-blue2": colors.cyan[600],
        "lumi-sky": colors.sky[500],
        "lumi-sky2": colors.blue[600],
        "lumi-cyan": colors.cyan[500],
        "lumi-cyan2": colors.indigo[500],
        "lumi-emerald": colors.emerald[500],
        "lumi-emerald2": colors.teal[600],
        "lumi-teal": colors.teal[500],
        "lumi-teal2": colors.green[600],
        "lumi-slate": colors.slate[500],
        "lumi-slate2": colors.slate[600],
        "lumi-green": colors.green[500],
        "lumi-green2": colors.emerald[600],
        "lumi-red": colors.red[500],
        "lumi-red2": colors.orange[600],
        "lumi-purple": colors.purple[500],
        "lumi-purple2": colors.violet[700],
        "lumi-indigo": colors.indigo[500],
        "lumi-indigo2": colors.blue[600],
        "lumi-yellow": "rgb(252, 255, 96)",
        "lumi-yellow2": colors.yellow[600],
        "lumi-gold": colors.yellow[500],
        "lumi-gold2": colors.amber[600],
        "lumi-pink": colors.pink[500],
        "lumi-pink2": colors.fuchsia[600],
        "lumi-fuchsia": colors.fuchsia[500],
        "lumi-fuchsia2": colors.red[600],
        "lumi-white": colors.white,
        "lumi-white2": colors.slate[200],
        "lumi-black": colors.slate[900],
        "lumi-black2": colors.black,
        // "lumi-accent-blue": "#08FFFC",
        "lumi-dark-blue":      "var(--lumi-dark-blue)",
        "lumi-darker-blue":    "#02041d",
        "lumi-dark-green":      "rgb(40, 132, 76)",
        // Accent HEX colors
        "lumi-accent-green":   "rgb(65, 245, 134)",
        "lumi-accent-green2":  "#19e8aa",
        "lumi-accent-blue":    colors.cyan[300],
        "lumi-accent-blue2":    colors.cyan[400],
        "lumi-accent-sky":    colors.sky[300],
        "lumi-accent-sky2":    colors.sky[400],
        "lumi-accent-cyan":    colors.cyan[200],
        "lumi-accent-cyan2":    colors.cyan[300],
        "lumi-accent-teal":    colors.teal[300],
        "lumi-accent-teal2":    colors.teal[400],
        "lumi-accent-steel":   colors.blue[200],
        "lumi-accent-steel2":   colors.slate[300],
        "lumi-accent-yellow": "rgb(253, 255, 151)",
        "lumi-accent-yellow2": colors.yellow[400],
        "lumi-accent-red":     "rgb(255, 79, 79)",
        "lumi-accent-red2":     "rgb(225, 44, 44)",
        "lumi-accent-gold":  "rgb(255, 247, 159)",
        "lumi-accent-gold2":  "rgb(250, 232, 113)",
        "lumi-accent-silver":  "rgb(229, 252, 255)",
        "lumi-accent-silver2":  "rgb(217, 238, 253)",
        "lumi-accent-bronze":  "rgb(243, 193, 99)",
        "lumi-accent-bronze2":  "rgb(223, 179, 60)",
        "lumi-accent-orange":  colors.orange[300],
        "lumi-accent-orange2":  colors.orange[400],
        "lumi-accent-emerald": colors.emerald[300],
        "lumi-accent-emerald2": colors.emerald[400],
        "lumi-accent-indigo":  colors.indigo[300],
        "lumi-accent-indigo2":  colors.indigo[400],
        "lumi-accent-purple":  colors.purple[300],
        "lumi-accent-purple2":  colors.purple[400],
        "lumi-accent-violet":  colors.violet[300],
        "lumi-accent-violet2":  colors.violet[400],
        "lumi-accent-pink":    colors.pink[300],
        "lumi-accent-pink2":    colors.pink[400],
        "lumi-accent-fuchsia": colors.fuchsia[300],
        "lumi-accent-fuchsia2": colors.fuchsia[400],
        "lumi-light-blue":     colors.cyan[200],
        "lumi-light-emerald":  colors.emerald[200],
        "lumi-light-teal":     colors.teal[200],
        "lumi-light-green":    colors.green[200],
        "lumi-light-red":      colors.red[200],
        "lumi-light-orange":   colors.orange[200],
        "lumi-light-purple":   colors.purple[200],
        "lumi-light-violet":   colors.violet[200],
        "lumi-light-indigo":  colors.indigo[200],
        "lumi-light-yellow":   colors.yellow[200],
        "lumi-light-amber":    colors.amber[200],
        "lumi-light-pink":     colors.pink[200],
        "lumi-accent-shadow":  "#08FFFC20",

        // Active
        "lumi-active":    "var(--lumi-active)",

        // Glass
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
        xl: "calc(var(--radius) + 0.5rem)",
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