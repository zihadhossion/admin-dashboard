import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: '300ms', // Set the default transition duration to 500ms
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'bgColor': '#151c2c',
        'bgSoftColor': '#182237',
        'textSoft': '#b7bac1',
      },
    },
  },
  plugins: [],
} satisfies Config;