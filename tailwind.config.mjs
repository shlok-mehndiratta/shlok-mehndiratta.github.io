/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          light: '#fafaf9', // warm studio alabaster
          dark: '#08090b',  // deep obsidian
        },
        surface: {
          light: '#ffffff',
          dark: '#0f1217',  // machined graphite surface
        },
        surfaceHover: {
          light: '#f4f4f5',
          dark: '#161a22',  // elevated hover
        },
        border: {
          light: 'rgba(0, 0, 0, 0.08)',
          dark: 'rgba(255, 255, 255, 0.08)',
        },
        accent: {
          DEFAULT: '#ffffff', // pure titanium white
          dark: '#ffffff',
          light: '#09090b',
        },
      },
      boxShadow: {
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
