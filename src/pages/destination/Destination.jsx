import { useState } from 'react';
import data from '../../../starter-code/data.json';

const { destinations } = data;

function Destination() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<main className='mx-auto max-w-[1100px] px-6 sm:my-10 sm:px-10 md:mt-20'>
			<h2 className='text-center font-narrow text-xl tracking-[4.72px] sm:text-start'>
				<span className='font-bold opacity-25'>01</span> PICK YOUR DESTINATION
			</h2>
			<div>
				<div>
					{destinations.map((destination, index) => {
						if (activeTab === index)
							return (
								<div key={index} className='flex flex-col md:flex-row md:justify-between '>
									<aside className='my-8 flex justify-center sm:my-14 md:mt-24  md:basis-[445px]'>
										<img
											className='aspect-square w-[170px] sm:w-[300px] md:w-[445px]'
											src={destination.images.webp}
											alt={`${destination.name} image`}
										/>
									</aside>
									<div className=' flex flex-col md:basis-[445px]'>
										<ul className='my-5 flex justify-center space-x-5 font-narrow sm:my-8 md:mt-16 md:justify-start'>
											{destinations.map((destination, index) => {
												return (
													<li key={index}>
														<button
															onClick={() => setActiveTab(index)}
															className={`border-b-[3px] px-1 py-2 text-sm uppercase tracking-[2.36px] sm:text-base ${
																index === activeTab
																	? 'border-white text-white'
																	: 'border-white/0 text-light-blue duration-300 ease-in-out hover:border-white/50'
															}`}>
															{destination.name}
														</button>
													</li>
												);
											})}
										</ul>
										<article className='flex flex-col gap-8 divide-y divide-[#383B4B] sm:mx-auto sm:max-w-xl md:gap-14'>
											<div>
												<h1 className='text-center font-serif text-[56px] uppercase leading-[64px] md:mb-3 md:text-start md:text-[100px] md:leading-none'>
													{destination.name}
												</h1>
												<p className='text-center text-[15px] leading-[25px] text-light-blue sm:text-base sm:leading-7 md:text-start md:text-lg'>
													{destination.description}
												</p>
											</div>
											<div className='flex flex-col items-center justify-center gap-8 pt-8 text-center sm:flex-row md:justify-start md:gap-20 md:text-left'>
												<div className='sm:basis-[220px]'>
													<p className='font-narrow text-sm tracking-[2.36px] text-light-blue'>
														AVG. DISTANCE
													</p>
													<p className='font-serif text-[28px] uppercase'>{destination.distance}</p>
												</div>
												<div className='sm:basis-[220px]'>
													<p className='font-narrow text-sm tracking-[2.36px] text-light-blue'>
														EST. TRAVEL TIME
													</p>
													<p className='font-serif text-[28px] uppercase'>{destination.travel}</p>
												</div>
											</div>
										</article>
									</div>
								</div>
							);
					})}
				</div>
			</div>
		</main>
	);
}

export default Destination;
