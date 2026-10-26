/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          light: '#e5dcce', // Rich warm coffee parchment / grounded oat craft
          dark: '#0a0a0c',  // Architectural Velvet Obsidian
        },
        surface: {
          light: '#eee5d8', // Soft steamed café latte surface
          dark: '#121215',  // Neutral sculpted titanium graphite
        },
        surfaceHover: {
          light: '#d8ccb8', // Café cream hover
          dark: '#18181c',  // Elevated titanium hover
        },
        surfaceSubtle: {
          light: '#ded3c1', // Badges, inner tags, dividers
          dark: '#151518',  // Subtle titanium inset tile
        },
        border: {
          light: 'rgba(50, 34, 20, 0.15)',
          dark: 'rgba(255, 255, 255, 0.07)',
        },
        accent: {
          DEFAULT: '#1f160f', // Deep roasted espresso
          dark: '#fafafa',    // Soft titanium white in dark mode
          light: '#1f160f',
        },
        coffee: {
          50: '#eee5d8',
          100: '#e5dcce',
          200: '#ded3c1',
          300: '#d0c3af',
          400: '#b09e88',
          500: '#847160',
          600: '#524335',
          700: '#423528',
          800: '#30251c',
          900: '#1f160f',
          950: '#150e09',
        },
      },
      boxShadow: {
        'apple-card': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.85), 0 1px 3px 0 rgba(35, 22, 12, 0.07), 0 6px 16px -2px rgba(35, 22, 12, 0.08), 0 16px 36px -6px rgba(35, 22, 12, 0.06)',
        'apple-card-hover': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.95), 0 2px 5px 0 rgba(35, 22, 12, 0.09), 0 10px 24px -2px rgba(35, 22, 12, 0.11), 0 24px 48px -8px rgba(35, 22, 12, 0.08)',
        'apple-card-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.06)',
        'apple-card-dark-hover': '0 12px 32px -4px rgba(0, 0, 0, 0.75), inset 0 1px 0 0 rgba(255, 255, 255, 0.12)',
        'apple-glass': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.80), 0 2px 4px 0 rgba(35, 22, 12, 0.05), 0 8px 24px -2px rgba(35, 22, 12, 0.08)',
        'apple-glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.07)',
        specular: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.4)',
        'specular-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.75), 0 1px 3px 0 rgba(35, 22, 12, 0.05)',
      },
      letterSpacing: {
        display: '-0.035em',
        title: '-0.02em',
        body: '-0.008em',
        'mono-badge': '0.04em',
      },
      fontFamily: {
        sans: ['"Instrument Sans"', 'Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Geist Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        serif: ['Newsreader', 'Charter', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.35s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
};
