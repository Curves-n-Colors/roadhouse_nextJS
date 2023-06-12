/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        default: '#142131',
        primary: '#a10115',
        secondary: '#293945',
        'inverse': '#fff'
      },
      backgroundColor: {
        default:'#f4ede5',
        muted:'#f5f5f5',
        primary: '#601a22',
        secondary: '#0f0f0f'
      },
    },
  },
  plugins: [],
}
