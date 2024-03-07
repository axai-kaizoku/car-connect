import Image from 'next/image';
import Link from 'next/link';
import CustomButton from './CustomButton';

export default function Navbar() {
	return (
		<header className="w-full  absolute z-10">
			<nav className="max-w-screen-2xl mx-auto flex-between sm:px-16 px-6 py-4">
				<Link
					href="/"
					className="flex-center">
					<Image
						src="/logo.svg"
						alt="carlogo"
						width={118}
						height={18}
						className="object-contain"
					/>
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
