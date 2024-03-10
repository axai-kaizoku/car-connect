'use client';
import Image from 'next/image';
import CustomButton from './CustomButton';
import Link from 'next/link';

export default function Hero() {
	return (
		<div className="flex xl:flex-row flex-col px-10 sm:px-14 md:px-20 gap-5 relative z-0 max-w-screen-2xl mx-auto ">
			<div className="flex-1 pt-36 padding-x">
				<h1 className="2xl:text-7xl sm:text-6xl text-5xl font-extrabold">
					Find, book, or rent a car - quickly and easily
				</h1>
				<p className="text-2xl text-black font-light mt-5">
					Streamline your car rental experience with our efforless booking
					process.
				</p>
				<Link href="#catalouge">
					<CustomButton
						title="Explore Cars"
						containerStyles="bg-primary text-white rounded-full mt-10"
					/>
				</Link>
			</div>
			<div className="xl:flex-1 flex justify-end h-96 sm:h-full items-end w-full xl:h-screen">
				<div className="relative xl:w-full w-full xl:h-full sm:h-[590px] h-[300px] z-0">
					<Image
						src="/hero.png"
						alt="hero"
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute xl:-top-24 xl:-right-1/2 lg:left-2/4 left-20 sm:-right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[260px] sm:h-[590px] overflow-hidden" />
			</div>
		</div>
	);
}
