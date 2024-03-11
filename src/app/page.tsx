import Hero from '@/components/Hero';
import Brands from '@/components/Brands';
import { brands } from '@/constants';

export default async function Home() {
	return (
		<main className="overflow-hidden">
			<Hero />
			<div className="mt-12 sm:px-16 px-6 py-4 max-w-screen-xl mx-auto">
				<div className="flex flex-col items-start justify-start gap-y-2.5 text-black">
					<h1 className="text-4xl font-extralight text-center">
						Search By <span className="font-bold">Brands</span>
					</h1>
				</div>
				<Brands brands={brands} />
			</div>
		</main>
	);
}
