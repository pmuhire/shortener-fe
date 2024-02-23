import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className='relative flex items-center justify-between px-6 pt-9 lg:justify-start lg:max-w-4xl xl:max-w-6xl mx-auto'>
			{/* <img className='flex-none h-8' src='/images/logo.svg' alt='Shortly Logo'/> */}
            <nav className='flex-none'>
                <a href='#' className='font-bold hover:text-very-dark-violet text-gray-violet' >LOGO</a>
            </nav>
			<nav className='lg:hidden'>
				<FaBars
					className='fa-solid fa-bars text-gray-violet text-2xl'
					onClick={() => setOpen(!open)}
				/>
				{open && <NavMenu mobile={true}/>}
			</nav>
            <nav className='hidden lg:block w-full'>
                <NavMenu mobile={false}/>
            </nav>
		</header>
	);
};

const NavMenu = ({ mobile }: { mobile: boolean }) => {
	return (
		<div
			className={`flex font-bold items-center ${
				mobile
					? 'flex-col absolute z-10 top-24 left-1/2 -translate-x-1/2 w-[90%] space-y-6 py-10 rounded-lg text-white bg-dark-violet text-lg'
					: 'space-x-10 justify-between w-full text-gray-violet pl-10'
			}`}
		>
			<a className='hover:text-very-dark-violet' href='#statistics'>Features</a>
			<a className='hover:text-very-dark-violet' href='#shorten'>Shorten</a>
			{/* <a className='hover:text-very-dark-violet' href='#'>Resources</a> */}
			<hr className='w-5/6 h-0.5 opacity-25 lg:opacity-0 lg:w-full'></hr>
			<a className='hover:text-very-dark-violet' href='#'>Login</a>
			<a
				href='#'
				className='rounded-full bg-primary-cyan py-3 w-5/6 mx-6 text-center text-white whitespace-nowrap hover:brightness-110 lg:w-auto lg:px-8 '
			>
				Sign Up
			</a>
		</div>
	);
};