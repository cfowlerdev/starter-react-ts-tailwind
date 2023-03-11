/** @type {import('tailwindcss').Config} */
const tailwindColors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#181923',
        text: tailwindColors.gray[50],

        primary: tailwindColors.violet[600],
        'primary-text': tailwindColors.gray[50],
        'primary-lighter': tailwindColors.violet[400],
        'primary-lighter-text': tailwindColors.violet[50],
        'primary-darker': tailwindColors.violet[900],
        'primary-darker-text': tailwindColors.violet[50],

        secondary: tailwindColors.teal[600],
        'secondary-text': tailwindColors.teal[50],
        'secondary-lighter': tailwindColors.teal[400],
        'secondary-lighter-text': tailwindColors.teal[50],
        'secondary-darker': tailwindColors.teal[900],
        'secondary-darker-text': tailwindColors.teal[50],

        info: tailwindColors.teal[600],
        'info-text': tailwindColors.teal[50],
        'info-lighter': tailwindColors.teal[400],
        'info-lighter-text': tailwindColors.teal[50],
        'info-darker': tailwindColors.teal[900],
        'info-darker-text': tailwindColors.teal[50],

        warning: tailwindColors.teal[600],
        'warning-text': tailwindColors.teal[50],
        'warning-lighter': tailwindColors.teal[400],
        'warning-lighter-text': tailwindColors.teal[50],
        'warning-darker': tailwindColors.teal[900],
        'warning-darker-text': tailwindColors.teal[50],

        paper: '#2a2b35',
        'paper-text': tailwindColors.stone[50],
        'paper-lighter': tailwindColors.stone[700],
        'paper-lighter-text': tailwindColors.stone[50],
        'paper-darker': '#21222d',
        'paper-darker-text': tailwindColors.stone[50],

        darkmode: {
          background: '#181923',
          text: tailwindColors.gray[50],

          primary: tailwindColors.violet[600],
          'primary-text': tailwindColors.gray[50],
          'primary-lighter': tailwindColors.violet[400],
          'primary-lighter-text': tailwindColors.violet[50],
          'primary-darker': tailwindColors.violet[900],
          'primary-darker-text': tailwindColors.violet[50],

          secondary: tailwindColors.teal[600],
          'secondary-text': tailwindColors.teal[50],
          'secondary-lighter': tailwindColors.teal[400],
          'secondary-lighter-text': tailwindColors.teal[50],
          'secondary-darker': tailwindColors.teal[900],
          'secondary-darker-text': tailwindColors.teal[50],

          info: tailwindColors.teal[600],
          'info-text': tailwindColors.teal[50],
          'info-lighter': tailwindColors.teal[400],
          'info-lighter-text': tailwindColors.teal[50],
          'info-darker': tailwindColors.teal[900],
          'info-darker-text': tailwindColors.teal[50],

          warning: tailwindColors.teal[600],
          'warning-text': tailwindColors.teal[50],
          'warning-lighter': tailwindColors.teal[400],
          'warning-lighter-text': tailwindColors.teal[50],
          'warning-darker': tailwindColors.teal[900],
          'warning-darker-text': tailwindColors.teal[50],

          paper: tailwindColors.gray[800],
          'paper-text': tailwindColors.gray[50],
          'paper-lighter': tailwindColors.gray[700],
          'paper-lighter-text': tailwindColors.gray[50],
          'paper-darker': tailwindColors.gray[900],
          'paper-darker-text': tailwindColors.gray[50]
        }
      }
    }
  },
  plugins: []
};
