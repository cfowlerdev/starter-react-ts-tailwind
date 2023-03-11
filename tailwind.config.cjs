/** @type {import('tailwindcss').Config} */
const tailwindColors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: tailwindColors.violet[600],
        primaryText: tailwindColors.gray[50],
        primaryLighter: tailwindColors.violet[400],
        primaryLighterText: tailwindColors.violet[50],
        primaryDarker: tailwindColors.violet[900],
        primaryDarkerText: tailwindColors.violet[50],

        secondary: tailwindColors.teal[600],
        secondaryText: tailwindColors.teal[50],
        secondaryLighter: tailwindColors.teal[400],
        secondaryLighterText: tailwindColors.teal[50],
        secondaryDarker: tailwindColors.teal[900],
        secondaryDarkerText: tailwindColors.teal[50],

        info: tailwindColors.teal[600],
        infoText: tailwindColors.teal[50],
        infoLighter: tailwindColors.teal[400],
        infoLighterText: tailwindColors.teal[50],
        infoDarker: tailwindColors.teal[900],
        infoDarkerText: tailwindColors.teal[50],

        warning: tailwindColors.teal[600],
        warningText: tailwindColors.teal[50],
        warningLighter: tailwindColors.teal[400],
        warningLighterText: tailwindColors.teal[50],
        warningDarker: tailwindColors.teal[900],
        warningDarkerText: tailwindColors.teal[50],

        darkmode: {
          primary: tailwindColors.violet[600],
          primaryText: tailwindColors.gray[50],
          primaryLighter: tailwindColors.violet[400],
          primaryLighterText: tailwindColors.violet[50],
          primaryDarker: tailwindColors.violet[900],
          primaryDarkerText: tailwindColors.violet[50],

          secondary: tailwindColors.teal[600],
          secondaryText: tailwindColors.teal[50],
          secondaryLighter: tailwindColors.teal[400],
          secondaryLighterText: tailwindColors.teal[50],
          secondaryDarker: tailwindColors.teal[900],
          secondaryDarkerText: tailwindColors.teal[50],

          info: tailwindColors.teal[600],
          infoText: tailwindColors.teal[50],
          infoLighter: tailwindColors.teal[400],
          infoLighterText: tailwindColors.teal[50],
          infoDarker: tailwindColors.teal[900],
          infoDarkerText: tailwindColors.teal[50],

          warning: tailwindColors.teal[600],
          warningText: tailwindColors.teal[50],
          warningLighter: tailwindColors.teal[400],
          warningLighterText: tailwindColors.teal[50],
          warningDarker: tailwindColors.teal[900],
          warningDarkerText: tailwindColors.teal[50]
        }
      }
    }
  },
  plugins: []
};
