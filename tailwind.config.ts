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
        ink: '#2F241D',
        muted: '#756A60',
        sand: '#EFE4D6',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(139, 94, 60, 0.12)',
      },
      borderRadius: {
        '3xl': '1.75rem',
      },
    },
  },
  plugins: [],
}

export default config
