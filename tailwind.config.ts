import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "color-1": "var(--color-1)",
        "color-2": "var(--color-2)",
        "color-3": "var(--color-3)",
        "color-4": "var(--color-4)",
        "color-5": "var(--color-5)",
      },
      fontFamily: {
        "gajraj": "var(--font-gajraj-one)",
        "poppins": "var(--font-poppins)",
        "staatliches": "var(--font-staatliches)"
      }
    },
  },
  plugins: [],
} satisfies Config;
