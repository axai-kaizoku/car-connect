import Image from 'next/image';
import { footerLinks } from '@/constants';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="flex flex-col text-black mt-5 border-t border-gray-100">
			<div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
				<div className="flex flex-col justify-start items-start gap-6">
					<Image
						src="/logo.png"
						alt="logo"
						width={100}
						height={20}
						className="object-contain"
					/>
					<p className="text-base text-gray-700 ">
						CarConnect 2023 <br />
						&copy; All rights reserved
					</p>
				</div>
				<div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-10 sm:gap-20">
					{footerLinks.map((link) => (
						<div
							key={link.title}
							className="flex flex-col gap-3 sm:gap-6 text-base min-w-40">
							<h3 className="font-bold">{link.title}</h3>
							{link.links.map((item) => (
								<Link
									href={item.url}
									key={item.title}
									className="text-gray-500">
									{item.title}
								</Link>
							))}
						</div>
					))}
				</div>
			</div>
			<div className="flex-between flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
				<p>@2023 CarConnect. All Rights Reserved &copy;</p>
				<div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
					<Link
						href="/"
						className="text-gray-500">
						Privacy Policy
					</Link>
					<Link
						href="/"
						className="text-gray-500">
						Terms of Use
					</Link>
				</div>
			</div>
		</footer>
	);
}
