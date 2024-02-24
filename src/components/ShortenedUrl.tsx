import { useState } from 'react';
import { iUrl } from './interfaces';

interface Props {
	url: iUrl;
}

const ShortenedUrl = ({ url }: Props) => {

	const [buttonText, setButtonText] = useState('Copy');

	const handleClick = () => {
		setButtonText('Copied!');
		navigator.clipboard.writeText(url.originalUrl);
		navigator.clipboard.writeText(url.shortUrl);
		setTimeout(() => {
			setButtonText('Copy')
		}, 5000)
	};
	if (!url.shortUrl) {
		return null;
	}
	return (
		<div className='bg-white text-sm rounded-lg lg:flex lg:justify-between lg:text-lg lg:items-center'>
			<p className='p-4 border-b lg:border-b-0 lg:px-6'>{url.originalUrl}</p>
			<div className='p-4 lg:flex lg:items-center lg:space-x-6 lg:px-6'>
				<p className='text-primary-cyan mb-3 lg:mb-0'>{url.shortUrl}</p>
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