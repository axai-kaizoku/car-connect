'use client';

import { SearchManufacturerProps } from '@/types';
import { Combobox, Transition } from '@headlessui/react';

import { manufacturers } from '@/constants';
import Image from 'next/image';
import { Fragment, useState } from 'react';

export default function SearchManufacturer({
	manufacturer,
	setManufacturer,
}: SearchManufacturerProps) {
	const [query, setQuery] = useState('');

	const filterManufacturers =
		query === ''
			? manufacturers
			: manufacturers.filter((item) =>
					item
						.toLowerCase()
						.replace(/\s+/g, '')
						.includes(query.toLowerCase().replace(/\s+/g, '')),
			  );

	return (
		<div className="flex-1 max-sm:w-full flex justify-start items-center">
			<Combobox
				value={manufacturer}
				onChange={setManufacturer}>
				<div className="relative w-full">
					<Combobox.Button className="absolute top-3">
						<Image
							src="/car-logo.svg"
							alt="car logo"
							width={20}
							height={20}
							className="ml-4"
						/>
					</Combobox.Button>
					<Combobox.Input
						className="w-full h-12 pl-12 p-4 rounded-l-full max-sm:rounded-full bg-slate-50 outline-none cursor-pointer text-sm"
						placeholder="Volkswagen"
						displayValue={(manufacturer: string) => manufacturer}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery('')}>
						<Combobox.Options className="max-h-48 overflow-y-auto">
							{filterManufacturers.length === 0 && query !== '' ? (
								<Combobox.Option
									value={query}
									className="cursor-default select-none py-2 pl-10 pr-4">
									Not found :(
								</Combobox.Option>
							) : (
								filterManufacturers.map((item) => (
									<Combobox.Option
										value={item}
										key={item}
										className={({ active }) =>
											`relative cursor-default select-none py-2 pl-10 pr-4 ${
												active ? 'bg-primary text-white ' : 'text-gray-900'
											}`
										}>
										{({ selected, active }) => (
											<>
												<span
													className={`block truncate ${
														selected ? 'font-medium' : 'font-normal'
													}`}>
													{item}
												</span>
												{selected ? (
													<span
														className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
															active ? 'text-white' : 'text-teal-600'
														}`}></span>
												) : null}
											</>
										)}
									</Combobox.Option>
								))
							)}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</div>
	);
}
