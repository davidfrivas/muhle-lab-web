/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Lab brand colors (from original style.css)
        'lab-dark': '#1E1926',
        'lab-purple': '#9A89B4',
        'lab-link': '#0000FF',
        'lab-link-hover': '#2C6676',
        'lab-date': '#389CB7',
        'lab-date-alt': '#208CA7',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Responsive font sizes matching original CSS variables
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['1rem', { lineHeight: '1.8' }],
        'base': ['1.25rem', { lineHeight: '1.8' }],
        'lg': ['1.75rem', { lineHeight: '1.4' }],
        'xl': ['2rem', { lineHeight: '1.3' }],
        '2xl': ['2.3rem', { lineHeight: '1.2' }],
        '3xl': ['3rem', { lineHeight: '1.1' }],
        '4xl': ['4rem', { lineHeight: '1.1' }],
        '5xl': ['5rem', { lineHeight: '1' }],
        '6xl': ['6rem', { lineHeight: '1' }],
      },
      screens: {
        // Custom breakpoints matching original CSS
        'xs': '330px',
        'sm': '640px',
        'md': '768px',
        'lg': '1000px',
        'xl': '1150px',
        '2xl': '1400px',
      },
      animation: {
        'fade-in-fast': 'fadeIn 1s ease-in-out',
        'fade-in-slow': 'fadeIn 3s ease-in',
        'slide-down': 'slideDown 900ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-1rem)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      maxWidth: {
        'content': '75rem',
        'prose': '40rem',
        'news': '50rem',
      },
      aspectRatio: {
        'news': '3 / 1.75',
      },
    },
  },
  plugins: [],
}
