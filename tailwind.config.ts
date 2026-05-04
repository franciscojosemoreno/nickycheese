import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50:  '#fdf2f2',
          900: '#7D1A1A',
          950: '#5C1010',
        },
        cream: {
          100: '#FAF6EE',
          200: '#F5F0E8',
          300: '#EDE5D6',
          400: '#D6C9B4',
        },
      },
      fontFamily: {
        sans:    ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        serif:   ['var(--font-playfair)', 'Georgia', 'serif'],
        display: ['var(--font-lobster)', 'cursive'],
      },
    },
  },
  plugins: [],
}
export default config
