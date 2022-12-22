import { useState } from 'react';
import data from '../../data.json';

const { technology } = data;

function Technology() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<main className='mx-auto sm:my-10 md:mt-20 md:ml-40'>
			<h2 className='text-center font-narrow text-xl tracking-[4.72px] sm:px-10 sm:text-start md:px-0'>
				<span className='font-bold opacity-25'>03</span> SPACE LAUNCH 101
			</h2>

			{technology.map((tech, index) => {
				if (activeTab === index)
					return (
						<div
							key={index}
							className='md:my-6 md:flex md:items-center md:justify-between md:gap-[50px]'>
							<aside className='md:order-1'>
								<img
									src={tech.images.portrait}
									alt=''
									className='my-8 h-[170px] w-full object-cover  sm:my-[60px] sm:h-[310px] md:m-0 md:h-[527px]'
								/>
							</aside>
							<ul className='mt-8 mb-6 flex justify-center gap-5 sm:mb-11 md:m-0 md:flex-col md:items-center md:gap-8 md:text-[32px]'>
								{technology.map((tech, index) => {
									return (
										<li key={index}>
											<button
												onClick={() => setActiveTab(index)}
												className={`aspect-square w-[40px] rounded-full border font-serif sm:w-[60px] md:w-[80px] ${
													activeTab === index
														? 'border-white bg-white text-dark-blue'
														: 'border-white/25 duration-300 ease-in-out hover:border-white'
												}`}>
												{index + 1}
											</button>
										</li>
									);
								})}
							</ul>
							<article className='px-6 sm:mx-auto sm:w-[500px] sm:px-10 md:m-0 md:mr-[50px] md:w-[470px] md:p-0'>
								<p className='mb-2 text-center font-narrow text-sm uppercase tracking-[2.36px] text-light-blue sm:mb-4 sm:text-base md:text-left'>
									THE TERMINOLOGY…
								</p>
								<h1 className='text-center font-serif text-2xl uppercase sm:text-[40px] md:text-left'>
									{tech.name}
								</h1>
								<p className='py-4 text-center text-[15px] leading-[25px] text-light-blue sm:text-base sm:leading-7 md:text-left'>
									{tech.description}
								</p>
							</article>
						</div>
					);
			})}
		</main>
	);
}

export default Technology;
