import { useLocation } from 'react-router-dom';

function Wrapper({ children }) {
	const { pathname } = useLocation();

	const background = () => {
		if (pathname === '/') return 'bg-homeMobile  sm:bg-homeTablet md:bg-homeDesktop';
		if (pathname === '/destination')
			return 'bg-destinationMobile  sm:bg-destinationTablet md:bg-destinationDesktop';
		if (pathname === '/crew') return 'bg-crewMobile  sm:bg-crewTablet md:bg-crewDesktop';
		if (pathname === '/technology')
			return 'bg-technologyMobile  sm:bg-technologyTablet md:bg-technologyDesktop';
	};

	return <div className={`min-h-screen bg-cover ${background()}`}>{children}</div>;
}

export default Wrapper;
