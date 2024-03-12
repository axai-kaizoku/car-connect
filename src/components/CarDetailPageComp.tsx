'use client';
import { CarProps } from '@/types';
import Image from 'next/image';
import { useState } from 'react';

export default function CarDetailComponent(car: CarProps) {
	const [selectedImage, setSelectedImage] = useState('/hero.png');

	const handleImageClick = (newImage: any) => {
		setSelectedImage(newImage);
	};
	return (
		<div className="overflow-hidden">
			<div className="mt-20 border-2 border-black w-full overflow-hidden h-full flex flex-col justify-center items-center sm:flex-row ">
				{/* left-section-start */}
				<div className="border border-red-500 w-full sm:w-2/4 h-5/6 sm:p-4">
					<div className="flex flex-col justify-center items-center">
						<div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] flex justify-center items-center">
							<Image
								src={selectedImage}
								alt="car"
								width={500}
								height={500}
								className="object-contain"
							/>
						</div>
						<div className="flex flex-row  items-center">
							<div className="border border-yellow-400 m-4">
								<Image
									src="/hero.png"
									alt="car"
									width={100}
									height={100}
									className="object-contain"
									onClick={() => handleImageClick('/hero.png')}
								/>
							</div>
							<div className="border border-yellow-400 m-4">
								<Image
									src="/car-manufacturers/subaru.png"
									alt="car"
									width={100}
									height={100}
									className="object-contain"
									onClick={() =>
										handleImageClick('/car-manufacturers/subaru.png')
									}
								/>
							</div>
							<div className="border border-yellow-400 m-4">
								<Image
									src="/car-manufacturers/kia.png"
									alt="car"
									width={100}
									height={100}
									className="object-contain"
									onClick={() => handleImageClick('/car-manufacturers/kia.png')}
								/>
							</div>
						</div>
					</div>
				</div>
				{/* left-section-end */}

				{/* right-section-start */}
				<div className="border border-green-500 w-full mt-10 sm:mt-0 sm:w-2/4 sm:p-4 h-5/6">
					<div className="flex-1 flex flex-col gap-2">
						<h2 className="font-semibold sm:px-20 px-4 text-3xl capitalize">
							{car.make} {car.model}
						</h2>
						<div className="mt-3 px-8 sm:px-32 pb-10 flex flex-wrap gap-3">
							{Object.entries(car).map(([key, value]) => (
								<div
									className="flex justify-between gap-5 w-full text-right"
									key={key}>
									<h4 className="text-gray-900 capitalize">
										{key.split('_').join(' ')}
									</h4>
									<p className="text-black capitalize">
										{key === 'transmission'
											? value === 'a'
												? 'Automatic'
												: 'Manual'
											: value}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
				{/* right-section-end */}
			</div>
		</div>
	);
}
