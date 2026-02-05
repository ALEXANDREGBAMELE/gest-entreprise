/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#f97316',
        secondary: '#111827',
        surface: '#f9fafb',
        muted: '#9ca3af'
      }
    }
  },
  plugins: []
}
