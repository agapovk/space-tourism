import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const { pathname } = useLocation();

	return (
		<header className='flex items-center justify-between p-6 sm:p-0 sm:pl-10 md:pl-14 md:pt-10'>
			<Link to={'/'}>
				<img
					src='/assets/shared/logo.svg'
					alt='logo'
					className='duration-300 hover:scale-110 hover:ease-in-out'
				/>
			</Link>
			{!isOpen && (
				<button onClick={() => setIsOpen((prev) => !prev)} className=' inline-flex sm:hidden'>
					<img src='/assets/shared/icon-hamburger.svg' alt='open menu' width={24} height={24} />
				</button>
			)}

			{/* Tablet & Desktop navigation */}
			<nav className='hidden bg-black/[0.04] font-narrow uppercase tracking-[2.7px] backdrop-blur-2xl sm:flex sm:h-24 sm:w-auto sm:flex-row sm:gap-9 sm:p-0 sm:px-8 sm:text-sm md:px-32 md:text-base'>
				<button
					onClick={() => setIsOpen((prev) => !prev)}
					className='absolute top-8 right-6 p-[2px] sm:hidden'>
					<img src='/assets/shared/icon-close.svg' alt='close menu' width={20} height={20} />
				</button>
				<Link
					className={`flex gap-3 border-b-[3px] sm:py-10 ${
						pathname === '/'
							? 'border-white'
							: 'border-white/0 duration-300 ease-in-out hover:border-white/50'
					}`}
					to={'/'}>
					<span className='font-bold sm:hidden md:inline'>00</span>Home
				</Link>
				<Link
					className={`flex gap-3 border-b-[3px] sm:py-10 ${
						pathname === '/destination'
							? 'border-white'
							: 'border-white/0 duration-300 ease-in-out hover:border-white/50'
					}`}
					to={'/destination'}>
					<span className='font-bold sm:hidden md:inline'>01</span>Destination
				</Link>
				<Link
					className={`flex gap-3 border-b-[3px] sm:py-10 ${
						pathname === '/crew'
							? 'border-white'
							: 'border-white/0 duration-300 ease-in-out hover:border-white/50'
					}`}
					to={'/crew'}>
					<span className='font-bold sm:hidden md:inline'>02</span>Crew
				</Link>
				<Link
					className={`flex gap-3 border-b-[3px] sm:py-10 ${
						pathname === '/technology'
							? 'border-white'
							: 'border-white/0 duration-300 ease-in-out hover:border-white/50'
					}`}
					to={'/technology'}>
					<span className='font-bold sm:hidden md:inline'>03</span>Technology
				</Link>
			</nav>

			{/* Mobile navigation */}
			{isOpen && (
				<nav className='absolute top-0 right-0 left-auto flex h-screen w-64 flex-col gap-4 bg-black/[0.04] px-4 pt-32 font-narrow uppercase tracking-[2.7px] backdrop-blur-2xl sm:hidden'>
					<button
						onClick={() => setIsOpen((prev) => !prev)}
						className='absolute top-8 right-6 p-[2px] sm:hidden'>
						<img src='/assets/shared/icon-close.svg' alt='close menu' width={20} height={20} />
					</button>
					<Link
						className={`flex gap-3 p-4 sm:py-10 ${
							pathname === '/'
								? 'text-white'
								: 'text-white/50 duration-300 ease-in-out hover:text-white'
						}`}
						to={'/'}>
						<span className='font-bold sm:hidden md:inline'>00</span>Home
					</Link>
					<Link
						className={`flex gap-3 p-4 sm:py-10 ${
							pathname === '/destination'
								? 'text-white'
								: 'text-white/50 duration-300 ease-in-out hover:text-white'
						}`}
						to={'/destination'}>
						<span className='font-bold sm:hidden md:inline'>01</span>Destination
					</Link>
					<Link
						className={`flex gap-3 p-4 sm:py-10 ${
							pathname === '/crew'
								? 'text-white'
								: 'text-white/50 duration-300 ease-in-out hover:text-white'
						}`}
						to={'/crew'}>
						<span className='font-bold sm:hidden md:inline'>02</span>Crew
					</Link>
					<Link
						className={`flex gap-3 p-4 sm:py-10 ${
							pathname === '/technology'
								? 'text-white'
								: 'text-white/50 duration-300 ease-in-out hover:text-white'
						}`}
						to={'/technology'}>
						<span className='font-bold sm:hidden md:inline'>03</span>Technology
					</Link>
				</nav>
			)}
		</header>
	);
}

export default Header;
