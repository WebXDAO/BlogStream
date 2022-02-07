module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['nunito', 'Times New Roman']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
