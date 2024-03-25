/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
  theme: {
    screens: {
      "xs": "480px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1120px",
      "2xl": "1344px",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Source Serif Pro", "serif"],
      display: ["Open Sans", "sans-serif"],
    },
    extend: {
      typography: {
        bqfree: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          }
        }
      }
    },
  },
	plugins: [
		require("@tailwindcss/forms"),
    require('@tailwindcss/typography')
	],
}
