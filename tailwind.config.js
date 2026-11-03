/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#fafafa',
        surface: '#ffffff',
        'surface-2': '#f4f4f5',
        'surface-hover': '#e4e4e7',
        border: '#e4e4e7',
        'border-subtle': '#f4f4f5',
        'border-hover': '#d4d4d8',
        accent: '#2563eb',
        'accent-secondary': '#0284c7',
        'accent-emerald': '#059669',
        foreground: '#09090b',
        secondary: '#52525b',
        muted: '#71717a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
