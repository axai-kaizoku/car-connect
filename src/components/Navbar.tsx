import Image from 'next/image';
import Link from 'next/link';
import CustomButton from './CustomButton';

export default function Navbar() {
	return (
		<header className="w-full  absolute z-10">
			<nav className="max-w-screen-2xl mx-auto flex-between sm:px-16 px-6 py-4">
				<Link
					href="/"
					className="flex-center items-baseline">
					<div className="w-[118px] h-[18px] flex justify-center items-center font-bold text-2xl  leading-none">
						Car <span className="text-xl font-light">Connect</span>
					</div>
				</Link>
				<CustomButton
					title="Sign In"
					btnType="button"
					containerStyles="text-primary rounded-full bg-white min-w-9"
				/>
			</nav>
		</header>
	);
}
