// tailwind.config.cjs
module.exports = {
	content: [
		'./public/**/*.html',
		'./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
	],
theme: {
		fontFamily: {
			sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
	},
plugins: [
	require('@tailwindcss/typography'),
],
}
