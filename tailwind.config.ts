import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF6F0',
        sage: '#7A9E7E',
        brown: '#8B5E3C',
        offwhite: '#FFFDF9',
        gold: '#C9A84C',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(139, 94, 60, 0.12)',
      },
    },
  },
  plugins: [],
}

export default config
