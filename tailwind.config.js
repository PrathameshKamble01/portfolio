module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F4C81', // Deep navy (enterprise / trust)
          dark: '#0B3A60'     // Darker variant for hover/gradients
        },
        accent: '#14B8A6',     // Teal accent for highlights
        surface: '#F3F4F6',    // Light surface
        neutral: '#64748b'
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'system-ui', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};
