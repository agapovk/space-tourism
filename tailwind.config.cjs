/** @type {import('tailwindcss').Config} */

function withOpacity(color) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `hsl(${color} / ${opacityValue})`;
		}
		return `${color}`;
	};
}

module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			'dark-blue': withOpacity('230 35% 7%'),
			'light-blue': withOpacity('231 77% 90%'),
			white: withOpacity('255 255% 255%'),
			black: withOpacity('0 0% 0%'),
		},
		screens: {
			sm: '550px',
			md: '990px',
			lg: '1440px',
		},
		fontFamily: {
			sans: ['Barlow', 'sans-serif'],
			narrow: ['Barlow Condensed', 'sans-serif'],
			serif: ['Bellefair', 'serif'],
		},
		extend: {
			backgroundImage: {
				homeMobile: "url('/assets/home/background-home-mobile.jpg')",
				homeTablet: "url('/assets/home/background-home-tablet.jpg')",
				homeDesktop: "url('/assets/home/background-home-desktop.jpg')",

				destinationMobile: "url('/assets/destination/background-destination-mobile.jpg')",
				destinationTablet: "url('/assets/destination/background-destination-tablet.jpg')",
				destinationDesktop: "url('/assets/destination/background-destination-desktop.jpg')",

				crewMobile: "url('/assets/crew/background-crew-mobile.jpg')",
				crewTablet: "url('/assets/crew/background-crew-tablet.jpg')",
				crewDesktop: "url('/assets/crew/background-crew-desktop.jpg')",

				technologyMobile: "url('/assets/technology/background-technology-mobile.jpg')",
				technologyTablet: "url('/assets/technology/background-technology-tablet.jpg')",
				technologyDesktop: "url('/assets/technology/background-technology-desktop.jpg')",
			},
		},
	},
	plugins: [],
};
