/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fffef7',
          100: '#fffbeb',
          200: '#fef3c7',
          300: '#fde68a',
          400: '#fcd34d',
          500: '#F4D03F', // Authentic Taxi Yellow (warmer, less bright)
          600: '#D68910', // Rich Golden Yellow
          700: '#B7950B', // Deep Gold
          800: '#9A7D0A', // Bronze Gold
          900: '#7D6608'  // Dark Gold
        },
        secondary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f3d4fe',
          300: '#e9b3fd',
          400: '#d946ef',
          500: '#212529', // Dark Gray for text
          600: '#1a1e21',
          700: '#13171a',
          800: '#0c1014',
          900: '#06090d'
        },
        whatsapp: {
          500: '#25D366'
        },
        accent: {
          50: '#fef7ee',
          100: '#fdedd3',
          200: '#fbd5a5',
          300: '#f9b96d',
          400: '#f59132',
          500: '#E67E22', // Professional Orange
          600: '#d35400',
          700: '#af4801',
          800: '#8f3f06',
          900: '#753608'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      screens: {
        'xs': '475px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem'
      }
    },
  },
  plugins: [],
}