import type { Config } from "tailwindcss";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Roboto } from 'next/font/google';
// eslint-disable-next-line @typescript-eslint/no-unused-vars




export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add your custom font
        Roboto: ['Roboto', 'sans-serif'],
        // You can add more fonts here
        // example: 'open-sans': ['"Open Sans"', 'sans-serif'],
       
      
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
