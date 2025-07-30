const { heroui } = require('@heroui/react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundColor: {
        'glass': 'rgba(255, 255, 255, 0.1)',
        'glass-dark': 'rgba(0, 0, 0, 0.1)',
      },
      borderColor: {
        'glass': 'rgba(255, 255, 255, 0.2)',
        'glass-dark': 'rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          primary: {
            50: '#fef7ee',
            100: '#fdedd3',
            200: '#fbd9a5',
            300: '#f8be6d',
            400: '#f59932',
            500: '#f37c0a',
            600: '#e46005',
            700: '#bd4508',
            800: '#97380e',
            900: '#7a2f0f',
            foreground: '#ffffff',
            DEFAULT: '#f37c0a',
          }
        }
      },
      dark: {
        colors: {
          primary: {
            50: '#7a2f0f',
            100: '#97380e',
            200: '#bd4508',
            300: '#e46005',
            400: '#f37c0a',
            500: '#f59932',
            600: '#f8be6d',
            700: '#fbd9a5',
            800: '#fdedd3',
            900: '#fef7ee',
            foreground: '#000000',
            DEFAULT: '#f59932',
          }
        }
      }
    }
  })],
  darkMode: 'class',
}