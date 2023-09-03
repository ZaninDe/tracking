import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple-500': '#8A2BE2',
      },
      backgroundImage: {
        'purple-pink': 'linear-gradient(135deg, #000C66 0%, #8A2BE2 50%)',
      },
    },
  },
  plugins: [],
}
export default config
