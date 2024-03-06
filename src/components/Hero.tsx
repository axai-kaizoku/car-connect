'use client';
import Image from 'next/image';
import CustomButton from './CustomButton';

export default function Hero() {
	return (
		<div className="flex xl:flex-row gap-5 relative z-0 max-w-screen-2xl mx-auto ">
			<div className="flex-1 pt-36 padding-x">
				<h1 className="2xl:text-7xl sm:text-6xl text-5xl font-extrabold">
					Find, book, or rent a car - quickly and easily
				</h1>
				<p className="text-2xl text-black font-light mt-5">
					Streamline your car rental experience with our efforless booking
					process.
				</p>
				<CustomButton
					title="Explore Cars"
					containerStyles="bg-primary text-white rounded-full mt-10"
				/>
			</div>
			<div className="xl:flex-1 flex justify-end items-end w-full xl:h-screen">
				<div className="relative xl:w-full w-11/12 xl:h-full h-[590px] z-0">
					<Image
						src="/hero.png"
						alt="hero"
						fill
						className="object-contain"
					/>
					<div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
				</div>
			</div>
		</div>
	);
}
