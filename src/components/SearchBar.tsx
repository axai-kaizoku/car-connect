'use client';

import { FormEvent, useState } from 'react';
import SearchManufacturer from './SearchManufacturer';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function SearchButton({ otherClasses }: { otherClasses: string }) {
	return (
		<button
			className={`-ml-3 z-10 ${otherClasses}`}
			type="submit">
			<Image
				src="/magnifying-glass.svg"
				alt="search"
				width={40}
				height={40}
				className="object-contain"
			/>
		</button>
	);
}

export default function SearchBar() {
	const router = useRouter();
	const [manufacturer, setManufacturer] = useState('');
	const [model, setModel] = useState('');
	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (manufacturer === '' && model === '') {
			return;
		}

		updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
	}

	const updateSearchParams = (model: string, manufacturer: string) => {
		const searchParams = new URLSearchParams(window.location.search);

		if (model) {
			searchParams.set('model', model);
		} else {
			searchParams.delete('model');
		}

		if (manufacturer) {
			searchParams.set('manufacturer', manufacturer);
		} else {
			searchParams.delete('manufacturer');
		}

		const newPathname = `${
			window.location.pathname
		}?${searchParams.toString()}`;

		router.push(newPathname);
	};

	return (
		<form
			className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
			onSubmit={handleSubmit}>
			<div className="flex-1 max-sm:w-full flex justify-start items-center relative">
				<SearchManufacturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
				<SearchButton otherClasses="sm:hidden" />
			</div>
			<div className="flex-1 max-sm:w-full flex justify-start items-center relative">
				<Image
					src="/model-icon.png"
					alt="car"
					width={25}
					height={25}
					className="absolute w-5 h-5 ml-4 "
				/>
				<input
					type="text"
					name="model"
					value={model}
					onChange={(e) => setModel(e.target.value)}
					placeholder="Tiguan"
					className="w-full h-12 pl-12 p-4 bg-slate-50 rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm"
				/>
				<SearchButton otherClasses="sm:hidden" />
			</div>
			<SearchButton otherClasses="max-sm:hidden" />
		</form>
	);
}
