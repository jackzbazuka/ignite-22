const colors = require('tailwindcss/colors')

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			'current': 'currentColor',
			'transparent': 'transparent',
			'white': colors.white,
			'black': colors.black,
			'rich-black': '#040C0E',
			'jungle-green': '#132227',
			'feldgrau': '#525B56',
			'shadow': '#87776C',
			'coffee': '#714D35',
			...colors,
		},
		extend: {
			backgroundImage: {
				'gradient-radial':
					'radial-gradient(115% 90% at 100% 100%, var(--tw-gradient-stops))',
				'bg01': "url('/img/hero-pattern.svg')",
				'bg02': "url('/img/hero-pattern.svg')",
				'bg03': "url('/img/hero-pattern.svg')",
				'bg04': "url('/img/hero-pattern.svg')",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
