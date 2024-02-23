import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { iUrl, iError } from './interfaces';
import ShortenedUrl from './ShortenedUrl';

export const Shortener = () => {
	const [firstRender, setFirstRender] = useState(true);
	const [url, setUrl] = useState('');
	const [validateInput, setValidateInput] = useState('');
	const [urls, setUrls] = useState<iUrl[]>([]);

	const endpoint = 'https://api.shrtco.de/v2/shorten?url=' + url;

	const { data, error, loading, getData } = useFetch<iUrl, iError>(endpoint, {
		immediate: false,
	});

	useEffect(() => {
		const localUrls = localStorage.getItem('urls');
		if (firstRender) {
			if (localUrls) {
				setUrls(JSON.parse(localUrls));
			}
			setFirstRender(false);
		}
		if (data && !loading) {
			setUrls(urls => [...urls, data]);
			localStorage.setItem('urls', JSON.stringify([...urls, data]));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, loading, firstRender]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
		if (validateInput) {
			setValidateInput('');
		}
		setUrl(e.target.value);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!url) {
			setValidateInput('Please add a link');
			return;
		}
		await getData();
	};

	return (
		<div id='shorten' className='relative -top-32 py-12 px-6 space-y-6 lg:max-w-4xl xl:max-w-6xl mx-auto'>
			<form
				className='bg-dark-violet flex flex-col p-6 rounded-lg bg-no-repeat bg-right-top lg:flex-row lg:items-center lg:p-12 lg:px-16 shorten'
				onSubmit={e => handleSubmit(e)}
			>
				<div className='relative w-full mb-4 lg:mb-0'>
					<input
						type='text'
						value={url}
						onChange={e => handleChange(e)}
						className={`rounded-md p-3 w-full ${
							(error || validateInput) ?
							'text-secondary-red placeholder-secondary-red outline outline-secondary-red'
                            : 'focus:outline-primary-cyan'
						}`}
						placeholder='Shorten a link here...'
					/>
					{(error || validateInput) && (
						<h3 className='text-secondary-red text-xs text-left italic mt-2 lg:absolute lg:-bottom-6'>
							{validateInput ? validateInput : error?.error}
						</h3>
					)}
				</div>
				<button
					className='bg-primary-cyan rounded-md p-3 text-white w-full lg:w-48 lg:ml-6 lg:h-full lg:text-lg lg:px-12 lg:whitespace-nowrap hover:brightness-110
                '
				>
					Shorten It!
				</button>
			</form>
			<div className='space-y-6 text-left'>
				{urls?.map(url => (
					<ShortenedUrl key={url.result.code} url={url} />
				))}
			</div>
		</div>
	);
};