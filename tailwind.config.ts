import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
        "kumbh-sans": ["Kumbh Sans", "sans-serif"],
        "inter": ["Inter", "sans-serif"],
        "figtree": ["Figtree", "sans-serif"],
        "urbanist": ["Urbanist", "sans-serif"],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
} satisfies Config;
