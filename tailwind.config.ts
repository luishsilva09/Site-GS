// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}', // Se estiver usando App Router
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}

export default config
