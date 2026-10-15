/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          light: '#eef2f6', // Bespoke Himalayan Glacial Alabaster (calibrated cool off-white)
          dark: '#000000',  // Apple OLED deep black
        },
        surface: {
          light: '#ffffff',
          dark: '#121214',  // Elevated Apple dark graphite surface
        },
        surfaceHover: {
          light: '#e2e8f0',
          dark: '#1a1a1e',  // Responsive elevation hover
        },
        border: {
          light: 'rgba(0, 0, 0, 0.06)',
          dark: 'rgba(255, 255, 255, 0.08)',
        },
        accent: {
          DEFAULT: '#000000',
          dark: '#ffffff',
          light: '#000000',
        },
      },
      boxShadow: {
        'apple-card': '0 2px 10px -2px rgba(0, 0, 0, 0.03), 0 12px 28px -6px rgba(0, 0, 0, 0.04)',
        'apple-card-hover': '0 8px 24px -4px rgba(0, 0, 0, 0.07), 0 20px 40px -8px rgba(0, 0, 0, 0.06)',
        'apple-card-dark': '0 4px 24px -2px rgba(0, 0, 0, 0.75), inset 0 1px 0 0 rgba(255, 255, 255, 0.07)',
        'apple-card-dark-hover': '0 12px 36px -4px rgba(0, 0, 0, 0.9), inset 0 1px 0 0 rgba(255, 255, 255, 0.12)',
        'apple-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.06), inset 0 1px 0 0 rgba(255, 255, 255, 0.8)',
        'apple-glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        specular: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.4)',
        'specular-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.95), 0 1px 3px 0 rgba(0, 0, 0, 0.04)',
      },
      letterSpacing: {
        display: '-0.035em',
        title: '-0.02em',
        body: '-0.008em',
        'mono-badge': '0.04em',
      },
      fontFamily: {
        sans: ['Geist', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Geist Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
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
