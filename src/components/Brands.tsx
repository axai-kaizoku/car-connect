'use client';

import { useState } from 'react';
import CustomButton from './CustomButton';
import Link from 'next/link';
import Image from 'next/image';
import { Brand } from '@/types';

export default function Brands({ brands }: { brands: Brand[] }) {
	const [isShowMore, setIsShowMore] = useState<boolean>(false);

	const visibleBrands = !isShowMore ? brands.slice(0, 18) : brands;

	const handleClick = () => {
		setIsShowMore((prevIsShowMore) => !prevIsShowMore);
	};

	return (
		<section>
			<ul className="grid xl:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 w-full gap-4 pt-14">
				{visibleBrands.map((brand) => (
					<Link
						key={brand.name}
						href={`/catalouge?manufacturer=${brand.name}`}>
						<li className="w-full h-full flex flex-col justify-between items-center">
							<div className="w-[104px] align-top h-[100px] sm:w-[175px] flex justify-center items-center">
								<Image
									src={brand.image}
									alt={brand.name}
									width={60}
									height={60}
									className="object-contain"
								/>
							</div>
							<span className="font-thin text-xs capitalize">{brand.name}</span>
						</li>
					</Link>
				))}
			</ul>
			<div className="w-full flex-center gap-5 mt-10">
				<CustomButton
					title={isShowMore ? 'Less' : 'More'}
					btnType="button"
					containerStyles="bg-white rounded-full shadow-md text-gray-600"
					handleClick={handleClick}
				/>
			</div>
		</section>
	);
}
