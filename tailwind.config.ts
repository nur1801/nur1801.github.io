import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#172B4D',
        white: '#FFFFFF',
        mist: '#EEF1F5',
        slate: '#5B7C99',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 8px 24px rgb(23 43 77 / 6%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
