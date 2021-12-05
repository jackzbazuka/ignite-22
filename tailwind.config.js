const colors = require('tailwindcss/colors')

module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			'current': 'currentColor',
			'transparent': 'transparent',
			'white': colors.white,
			'black': '#01171C',
			'soft-red': '#F14956',
			'yellow': '#F2E206',
			'cyan': {
				lighter: '#35BFB0',
				light: '#19736A',
				DEFAULT: '#175260',
				dark: '#092C34',
				darker: '#011F27',
			},
		},
		extend: {
			backgroundImage: {
				'gradient-radial':
					'radial-gradient(115% 90% at 100% 100%, var(--tw-gradient-stops))',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
