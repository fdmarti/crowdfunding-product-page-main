/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			boxShadow: {
				hero: '0px 20px 60px 100px rgba(0,0,0,0.45) inset',
			},
		},
	},
	plugins: [],
	safelist: [
		'border-r-2',
		'cursor-not-allowed',
		'bg-teal-600',
		'bg-teal-700',
		'bg-gray-500',
		'opacity-40',
		'border-teal-500',
	],
};
