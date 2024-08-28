/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}", // Tremor module
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'papaya-whip': '#FFEFD5',
        'gunmetal': '#2B3D4F',
        'myrtle-green': '#317873',
        'myrtle-green-light': '#3D958F',
        'palatinate': '#682860',
        'earth-yellow': '#E1A95F',
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
        tremor: {
          brand: {
            faint: "#FFEFD5", // papaya-whip
            muted: "#E1A95F", // earth-yellow
            subtle: "#3D958F", // myrtle-green-light
            DEFAULT: "#317873", // myrtle-green
            emphasis: "#682860", // palatinate
            inverted: "#2B3D4F", // gunmetal
          },
          background: {
            muted: "#F0E6C9", // lighter papaya-whip
            subtle: "#FFEFD5", // papaya-whip
            DEFAULT: "#FFFFFF",
            emphasis: "#2B3D4F", // gunmetal
          },
          border: {
            DEFAULT: "#317873", // myrtle-green
          },
          ring: {
            DEFAULT: "#317873", // myrtle-green
          },
          content: {
            subtle: "#3D958F", // myrtle-green-light
            DEFAULT: "#317873", // myrtle-green
            emphasis: "#682860", // palatinate
            strong: "#2B3D4F", // gunmetal
            inverted: "#FFEFD5", // papaya-whip
          },
        },
        "dark-tremor": {
          brand: {
            faint: "#1F2D3A", // darker gunmetal
            muted: "#2B3D4F", // gunmetal
            subtle: "#317873", // myrtle-green
            DEFAULT: "#3D958F", // myrtle-green-light
            emphasis: "#E1A95F", // earth-yellow
            inverted: "#FFEFD5", // papaya-whip
          },
          background: {
            muted: "#1F2D3A", // darker gunmetal
            subtle: "#2B3D4F", // gunmetal
            DEFAULT: "#2B3D4F", // gunmetal
            emphasis: "#FFEFD5", // papaya-whip
          },
          border: {
            DEFAULT: "#3D958F", // myrtle-green-light
          },
          ring: {
            DEFAULT: "#3D958F", // myrtle-green-light
          },
          content: {
            subtle: "#E1A95F", // earth-yellow
            DEFAULT: "#FFEFD5", // papaya-whip
            emphasis: "#FFFFFF",
            strong: "#FFFFFF",
            inverted: "#2B3D4F", // gunmetal
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'var(--font-saira)', 'sans-serif'],
        serif: ['var(--font-lora)', 'var(--font-saira)', 'serif'],
        saira: ['var(--font-saira)', 'sans-serif'],
        lora: ['var(--font-lora)', 'serif'],
        hind: ['var(--font-hind)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        // Light mode shadows
        "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "tremor-card": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "tremor-dropdown": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        // Dark mode shadows
        "dark-tremor-input": "0 1px 2px 0 rgb(255 255 255 / 0.05)",
        "dark-tremor-card": "0 1px 3px 0 rgb(255 255 255 / 0.1), 0 1px 2px -1px rgb(255 255 255 / 0.1)",
        "dark-tremor-dropdown": "0 4px 6px -1px rgb(255 255 255 / 0.1), 0 2px 4px -2px rgb(255 255 255 / 0.1)",
      },
      borderRadius: {
        "tremor-small": "0.375rem",
        "tremor-default": "0.5rem",
        "tremor-full": "9999px",
      },
      fontSize: {
        "tremor-label": ["0.75rem"],
        "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
        "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
        "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],
  plugins: [require("tailwindcss-animate")],
};