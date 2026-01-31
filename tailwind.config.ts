import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Seasonal colors
        winter: {
          sky: "hsl(var(--winter-sky))",
          frost: "hsl(var(--winter-frost))",
          ice: "hsl(var(--winter-ice))",
          deep: "hsl(var(--winter-deep))",
          snow: "hsl(var(--winter-snow))",
          mist: "hsl(var(--winter-mist))",
        },
        spring: {
          leaf: "hsl(var(--spring-leaf))",
          blossom: "hsl(var(--spring-blossom))",
          grass: "hsl(var(--spring-grass))",
          sky: "hsl(var(--spring-sky))",
          bark: "hsl(var(--spring-bark))",
          petal: "hsl(var(--spring-petal))",
        },
        summer: {
          sun: "hsl(var(--summer-sun))",
          gold: "hsl(var(--summer-gold))",
          sky: "hsl(var(--summer-sky))",
          grass: "hsl(var(--summer-grass))",
          warmth: "hsl(var(--summer-warmth))",
          glow: "hsl(var(--summer-glow))",
        },
        autumn: {
          leaf: "hsl(var(--autumn-leaf))",
          amber: "hsl(var(--autumn-amber))",
          rust: "hsl(var(--autumn-rust))",
          bark: "hsl(var(--autumn-bark))",
          gold: "hsl(var(--autumn-gold))",
          warmth: "hsl(var(--autumn-warmth))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
} satisfies Config;
