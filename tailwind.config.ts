import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#ffffff',
        'canvas-secondary': '#f5f5f7',
        ink: '#1d1d1f',
        'ink-2': '#6e6e73',
        'ink-3': '#86868b',
        'ink-4': '#aeaeb2',
        border: '#d2d2d7',
        'border-light': '#e8e8ed',
        accent: '#0071e3',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"Segoe UI"',
          'system-ui',
          'sans-serif',
        ],
        mono: ['"SF Mono"', '"Menlo"', '"Monaco"', 'Consolas', 'monospace'],
      },
      fontSize: {
        '2xs': ['11px', { lineHeight: '1.4', letterSpacing: '0.08em' }],
        xs: ['12px', { lineHeight: '1.4', letterSpacing: '0.06em' }],
        sm: ['14px', { lineHeight: '1.5' }],
        base: ['17px', { lineHeight: '1.65' }],
        lg: ['20px', { lineHeight: '1.5' }],
        xl: ['24px', { lineHeight: '1.35' }],
        '2xl': ['32px', { lineHeight: '1.2' }],
        '3xl': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '4xl': ['64px', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        '5xl': ['80px', { lineHeight: '1', letterSpacing: '-0.04em' }],
      },
      maxWidth: {
        content: '960px',
        wide: '1200px',
      },
      spacing: {
        section: '120px',
        'section-sm': '80px',
      },
    },
  },
  plugins: [],
}

export default config
