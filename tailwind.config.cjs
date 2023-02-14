/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#bb86fc',
        darkmode: {
          primary: '#3aceca',
          primaryVariant: '#328aa7',
          secondary: '#7982f3',
          secondaryVariant: '#424476',
          background: '#121212',
          surface: '#2c2c2c',
          error: '#cf6679',
          primaryText: '#000000',
          primaryVariantText: '#000000',
          secondaryText: '#000000',
          secondaryVariantText: '#000000',
          backgroundText: '#ffffff',
          surfaceText: '#d4cce1',
          errorText: '#000000'
        }
      }
    }
  },
  darkMode: 'class',
  plugins: []
};
