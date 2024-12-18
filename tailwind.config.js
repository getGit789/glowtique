/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '30%, 60%': { width: '100%' },
          '90%, 100%': { width: '0' }
        },
        pulse: {
          '0%': { 
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(147, 51, 234, 0.4)'
          },
          '70%': {
            transform: 'scale(1.05)',
            boxShadow: '0 0 0 15px rgba(147, 51, 234, 0)'
          },
          '100%': {
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(147, 51, 234, 0)'
          }
        }
      },
      animation: {
        typing: 'typing 4s steps(20) infinite',
        pulse: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    },
  },
  plugins: [],
};
