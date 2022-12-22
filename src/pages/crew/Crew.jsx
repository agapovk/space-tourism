import { useState } from 'react';
import data from '../../data.json';

const { crew } = data;

function Crew() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<main className='mx-auto px-6 sm:mt-10 sm:px-10 md:mt-20 md:max-w-[1186px]'>
			<h2 className='text-center font-narrow text-xl tracking-[4.72px] sm:text-start'>
				<span className='font-bold opacity-25'>02</span> MEET YOUR CREW
			</h2>
			{crew.map((person, index) => {
				if (activeTab === index)
					return (
						<div
							key={index}
							className='my-8 grid grid-cols-1 gap-8 sm:m-0 sm:mt-[60px] md:m-0 md:mt-[150px] md:grid-cols-2'>
							<aside className='flex justify-center border-b border-[#383B4B] sm:order-3 sm:border-0 md:row-span-2 md:mt-[-150px] md:items-end'>
								<img
									src={person.images.webp}
									alt=''
									className='aspect-auto h-[223px] sm:h-[572px] md:h-auto'
								/>
							</aside>
							<ul className='flex justify-center sm:order-2 md:order-3 md:justify-start'>
								{crew.map((person, index) => {
									return (
										<li
											key={index}
											className='cursor-pointer p-2'
											onClick={() => setActiveTab(index)}>
											<div
												className={`aspect-square w-[10px] rounded-full md:w-[15px] ${
													index === activeTab
														? 'bg-white'
														: 'bg-white/20 duration-300 ease-in-out hover:bg-white'
												}`}></div>
										</li>
									);
								})}
							</ul>
							<article className='sm:order-1 sm:mx-auto sm:h-[182px] md:h-auto md:w-full'>
								<p className='mb-2 text-center font-serif uppercase text-white/50 sm:text-2xl md:mb-4 md:text-left md:text-[32px]'>
									{person.role}
								</p>
								<h1 className='mb-4 text-center font-serif text-[24px] uppercase leading-none sm:text-[40px] md:mb-8 md:whitespace-nowrap md:text-left md:text-[56px]'>
									{person.name}
								</h1>
								<p className='text-center text-[15px] leading-[25px] text-light-blue sm:text-base sm:leading-7 md:w-[444px] md:text-left md:text-lg md:leading-8'>
									{person.bio}
								</p>
							</article>
						</div>
					);
			})}
		</main>
	);
}

export default Crew;
