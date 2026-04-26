/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Enerama brand palette
        'enerama-navy': '#1B3A6B',
        'enerama-orange': '#E07B39',
        'enerama-teal': '#0D7377',
        'enerama-dark-teal': '#0B3D4C',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '80rem',
      },
    },
  },
  plugins: [],
};
