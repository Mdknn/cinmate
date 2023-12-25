module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      'screens':{
        'sm': {'min': '300px', 'max': '1200px'},
      }
    },
  },
  plugins: [],
}