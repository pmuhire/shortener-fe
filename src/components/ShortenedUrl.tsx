import { useState } from 'react';
import { iUrl } from './interfaces';

interface Props {
	url: iUrl;
}

const ShortenedUrl = ({ url }: Props) => {
	const [buttonText, setButtonText] = useState('Copy');
	console.log(url);

	const handleClick = () => {
		setButtonText('Copied!');
		navigator.clipboard.writeText(url.result.full_short_link);
        setTimeout(()=>{
            setButtonText('Copy')
        }, 5000)
	};

	return (
		<div className='bg-white text-sm rounded-lg lg:flex lg:justify-between lg:text-lg lg:items-center'>
			<p className='p-4 border-b lg:border-b-0 lg:px-6'>{url.result.original_link}</p>
			<div className='p-4 lg:flex lg:items-center lg:space-x-6 lg:px-6'>
				<p className='text-primary-cyan mb-3 lg:mb-0'>{url.result.full_short_link}</p>
				<button
					className='rounded-md bg-primary-cyan py-2 w-full text-white font-bold lg:w-32 focus:bg-dark-violet hover:brightness-110'
					onClick={() => handleClick()}
				>
					{buttonText}
				</button>
			</div>
		</div>
	);
};

export default ShortenedUrl;