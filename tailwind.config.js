/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6C5CE7',
          50: '#F1F0FE',
          100: '#E3E1FD',
          200: '#C7C3FB',
          300: '#ABA5F9',
          400: '#8F87F7',
          500: '#6C5CE7',
          600: '#5749B9',
          700: '#42378C',
          800: '#2C255E',
          900: '#171330'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms')],
}
