import SVG from "../assets/svg1.svg";
import SVG2 from "../assets/svg2.svg";
import SVG3 from "../assets/svg3.svg";
export const Statistics = () => {
	return (
		<div id="statistics" className='space-y-20 -mt-28 px-6 pb-16 lg:-mt-16 lg:max-w-4xl xl:max-w-6xl mx-auto lg:pb-48'>
			<div className='space-y-4'>
				<h2 className='text-very-dark-violet text-2xl font-bold lg:text-3xl'>
					Advanced Statistics
				</h2>
				<p className='text-gray-violet text-sm font-medium leading-6 lg:text-base lg:max-w-md lg:mx-auto'>
					Track how your links are performing across the web with our advanced
					statistics dashboard.
				</p>
			</div>

			<div className='relative space-y-20 grid lg:grid-cols-3 lg:space-y-0 lg:text-left lg:space-x-6'>
				<div className='relative z-10 flex flex-col items-center bg-white pb-6 lg:items-start lg:p-7'>
					<div className='relative -top-9 bg-dark-violet p-4 rounded-full lg:-top-16'>
						<img
							className='scale-90'
							src={SVG}
							alt='Brand Recognition'
						></img>
					</div>
					<h3 className='text-very-dark-violet text-lg font-bold -mt-3 mb-3 lg:-mt-8 lg:text-xl'>
						Brand Recognition
					</h3>
					<p className='text-gray-violet text-xs font-medium leading-6 px-10 lg:px-0 lg:text-sm lg:leading-6'>
						Boost your brand recognition with each click. Generic links don’t
						mean a thing. Branded links help instil confidence in your content.
					</p>
				</div>

				<div className='relative z-10 flex flex-col items-center bg-white pb-6 lg:items-start lg:p-8 lg:top-10'>
					<div className='relative -top-9 bg-dark-violet p-4 rounded-full lg:-top-16'>
						<img
							className='scale-90'
							src={SVG2}
							alt='Detailed Records'
						></img>
					</div>
					<h3 className='text-very-dark-violet text-lg font-bold -mt-3 mb-3 lg:-mt-8 lg:text-xl'>
						Detailed Records
					</h3>
					<p className='text-gray-violet text-xs font-medium leading-6 px-10 lg:px-0 lg:text-sm lg:leading-6'>
						Gain insights into who is clicking your links. Knowing when and
						where people engage with your content helps inform better decisions.
					</p>
				</div>

				<div className='relative z-10 flex flex-col items-center bg-white pb-6 lg:items-start lg:p-8 lg:top-20'>
					<div className='relative -top-9 bg-dark-violet p-4 rounded-full lg:-top-16'>
						<img
							className='scale-90'
							src={SVG3}
							alt='Fully Customizable'
						></img>
					</div>
					<h3 className='text-very-dark-violet text-lg font-bold -mt-3 mb-3 lg:-mt-8 lg:text-xl'>
						Fully Customizable
					</h3>
					<p className='text-gray-violet text-xs font-medium leading-6 px-10 lg:px-0 lg:text-sm lg:leading-6'>
						Improve brand awareness and content discoverability through
						customizable links, supercharging audience engagement.
					</p>
				</div>

				<div className='absolute z-0 bottom-0 left-1/2 -translate-x-1/2 w-[7px] h-full bg-primary-cyan lg:h-[7px] lg:w-full lg:!mx-0 lg:left-0 lg:top-[55%] lg:translate-x-0 lg:bottom-auto'></div>
			</div>
		</div>
	);
};