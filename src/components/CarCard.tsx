'use client';

import { CarCardProps } from '@/types';
import { calculateCarRent } from '@/utils';
import Image from 'next/image';
import CustomButton from './CustomButton';
import { useState } from 'react';

export default function CarCard({ car }: CarCardProps) {
	const {
		city_mpg,
		combination_mpg,
		cylinders,
		displacement,
		drive,
		fuel_type,
		highway_mpg,
		make,
		model,
		transmission,
		year,
	} = car;

	const carRent = calculateCarRent(city_mpg, year);

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex flex-col p-6 justify-center items-start text-black bg-slate-100 hover:bg-white hover:shadow-md rounded-3xl">
			<div className="w-full flex justify-between items-start gap-2">
				<h2 className="text-[22px] leading-[26px] font-bold capitalize">
					{make} {model}
				</h2>
			</div>
			<p className="flex mt-6 text-3xl font-extrabold">
				<span className="self-start text-sm font-semibold">$</span>
				{carRent}
				<span className="self-end text-sm font-medium">/day</span>
			</p>
			<div className="relative w-full h-40 my-3 object-contain">
				<Image
					src="/hero.png"
					alt="car model"
					fill
					priority
					className="object-contain"
				/>
			</div>
			<div className="relative flex w-full mt-2 ">
				<div className="flex group-hover:invisible w-full justify-between text-gray">
					<div className="flex flex-col justify-center items-center gap-2">
						<Image
							src="/steering-wheel.svg"
							width={20}
							height={20}
							alt="steering-wheel"
						/>
						<p className="text-sm">
							{transmission === 'a' ? 'Automatic' : 'Manual'}
						</p>
					</div>
					<div className="flex flex-col justify-center items-center gap-2">
						<Image
							src="/tire.svg"
							width={20}
							height={20}
							alt="tire"
						/>
						<p className="text-sm">{drive.toUpperCase()}</p>
					</div>
					<div className="flex flex-col justify-center items-center gap-2">
						<Image
							src="/gas.svg"
							width={20}
							height={20}
							alt="gas"
						/>
						<p className="text-sm">{city_mpg} MLG</p>
					</div>
				</div>
				<div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
					<CustomButton
						title="View More"
						containerStyles="w-full py-[16px] rounded-full bg-primary"
						textStyles="text-white text-sm leading-[17px] font-bold"
						rightIcon="/right-arrow.svg"
						handleClick={() => setIsOpen(true)}
					/>
				</div>
			</div>
		</div>
	);
}
