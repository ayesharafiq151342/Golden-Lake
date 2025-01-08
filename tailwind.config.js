/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custompink: '#583c50', // Replace with your desired hex code
        customBlue: '#1B9AAA',
        customBlack: '#2E2E2E',
        
      },
    },
  },
  plugins: [],
}