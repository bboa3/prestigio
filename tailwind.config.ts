/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-garet)']
      },
      colors: {
        primary: {
          50: '#E6F7EE',
          100: '#C1EBCF',
          200: '#97DCAE',
          300: '#6DCD8E',
          400: '#4FC177',
          500: '#1BBA66',
          600: '#179E57',
          700: '#127E47',
          800: '#0D5E38',
          900: '#093F28',
          950: '#052E1D',
        },
        black: {
          50: '#F5F6F9',
          100: '#E2E3E7',
          200: '#BEC0C7',
          300: '#A1A3AC',
          400: '#848695',
          500: '#777B8A',
          600: '#5F636F',
          700: '#474954',
          800: '#2F303A',
          900: '#0F1014',
          950: '#090F24',
          DEFAULT: '#090F24',
        },
      }
    }
  },
  plugins: [
    flowbite.content(),
  ],
};
export default config;