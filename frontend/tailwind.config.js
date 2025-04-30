/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        background: 'var(--color-background)',
        card: 'var(--color-card)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'holographic': 'linear-gradient(to right, #7B2CFF20, #00B7FF20)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px #00B7FF, 0 0 10px #00B7FF' },
          '50%': { boxShadow: '0 0 15px #00B7FF, 0 0 20px #00B7FF' },
        },
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00B7FF, 0 0 10px #00B7FF',
        'neon-purple': '0 0 5px #7B2CFF, 0 0 10px #7B2CFF',
      },
    },
  },
  plugins: [],
};