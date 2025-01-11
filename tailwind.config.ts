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
    screens: {
      // You can rename or create completely new breakpoints:
      'x': '0px',
      'xs': '480px',
      'sm': '640px',      // default 'sm'
      'md': '768px',      // default 'md'
      'lg': '1024px',     // default 'lg'
      'xl': '1280px',     // default 'xl'
      '2xl': '1536px',    // default '2xl'
      // or add any other custom ones:
      '3xl': '1600px',
    },
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
