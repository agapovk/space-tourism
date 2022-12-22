function Home() {
	return (
		<main className='mx-auto mt-6 grid max-w-[1100px] grid-cols-1 place-items-center gap-6 sm:mt-[106px] md:mt-[250px] md:mb-auto md:grid-cols-2'>
			<article className='grid place-items-center gap-4 px-6 sm:max-w-[450px] sm:gap-6 sm:p-0'>
				<span className='font-narrow text-xl tracking-[4.72px] text-light-blue'>
					SO, YOU WANT TO TRAVEL TO
				</span>
				<h1 className='font-serif text-[5rem] leading-[6.25rem] sm:text-[9.375rem] sm:leading-none'>
					SPACE
				</h1>
				<p className='text-center text-[15px] leading-[25px] text-light-blue sm:text-base md:text-lg'>
					Let’s face it; if you want to go to space, you might as well genuinely go to outer space
					and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
					truly out of this world experience!
				</p>
			</article>
			<aside className='place-self-center pt-14 sm:pt-40 md:place-self-end'>
				<button className='relative grid aspect-square w-[274px] place-content-center rounded-full bg-white font-serif text-[32px] tracking-[2px] text-dark-blue ring-0 ring-white/0 duration-500 ease-out hover:ring-[88px] hover:ring-white/10 active:bg-white/80'>
					EXPLORE
				</button>
			</aside>
		</main>
	);
}

export default Home;
