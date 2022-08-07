const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        rollout: {
          '0%': { transform: 'translateX(100px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        rollout: 'rollout .6s',
      },
    },
  },
};
