/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          navy: '#172B3A',
          'navy-dark': '#0F1C26',
          'navy-surface': '#1F374A',
          'navy-border': '#2C475C',
          ivory: '#F5F1E8',
          'ivory-light': '#FAF7F2',
          'ivory-dark': '#EBE5D8',
          'ivory-border': '#DFD7C7',
          orange: '#D97745',
          'orange-hover': '#C46433',
          'orange-light': '#FBF1EB',
          'orange-dark': '#9A4A22',
          slate: '#68747A',
          'slate-light': '#98A4AB',
          'slate-border': '#D8DEE2',
          forest: '#263D36',
          'forest-light': '#EBF2EE',
          'forest-dark': '#1A2B26',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        heading: ['Manrope', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'studio-subtle': '0 2px 8px -2px rgba(23, 43, 58, 0.04)',
        'studio-card': '0 8px 30px -4px rgba(23, 43, 58, 0.06)',
        'studio-hover': '0 16px 40px -6px rgba(23, 43, 58, 0.12)',
        'studio-dark': '0 10px 30px -5px rgba(15, 28, 38, 0.5)',
      }
    },
  },
  plugins: [],
}
