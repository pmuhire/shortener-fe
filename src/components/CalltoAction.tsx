import illustration from "../assets/home.svg";

export const CallToAction = () => {
	return (
		<div className='grid grid-cols-1 px-6 pb-32 lg:text-left lg:max-w-4xl xl:max-w-6xl lg:mx-auto lg:grid-cols-2 lg:items-center lg:pb-24'>
			<img
				src={illustration}
				className='max-w-[300px] my-8 mx-auto lg:order-2 lg:relative lg:max-w-none lg:pt-8 xl:left-32'
				alt='Illustration of person working at desk'
			></img>
			<div className='space-y-6 lg:order-1'>
				<h1 className='text-very-dark-violet text-4xl font-bold lg:text-5xl xl:text-7xl'>
					More than just shorter links
				</h1>
				<h2 className='text-gray-violet text-lg font-medium'>
					Build your brand’s recognition and get detailed insights on how your
					links are performing.
				</h2>
				<button className='rounded-full bg-primary-cyan py-3 px-8 text-white font-bold hover:brightness-110'>
					Get Started
				</button>
			</div>
		</div>
	);
};