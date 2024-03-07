import CarCard from '@/components/CarCard';
import CustomFilter from '@/components/CustomFilter';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';
import { fetchCars } from '@/utils';

export default async function Home() {
	const allCars = await fetchCars();
	const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
	return (
		<main className="overflow-hidden">
			<Hero />
			<div className="mt-12 sm:px-16 px-6 py-4 max-w-screen-xl mx-auto">
				<div className="flex flex-col items-start justify-start gap-y-2.5 text-black">
					<h1 className="text-4xl font-extrabold">Car Catalogue</h1>
					<p>Explore the cars you might like</p>
				</div>
				<div className="mt-12 w-full flex-between flex-wrap gap-5">
					<SearchBar />
					<div className="flex justify-start flex-wrap items-center gap-2">
						<CustomFilter title="fuel" />
						<CustomFilter title="year" />
					</div>
				</div>

				{/* Cars Catalogue */}

				{!isDataEmpty ? (
					<section>
						<div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
							{allCars?.map((car, i) => (
								<CarCard
									key={i}
									car={car}
								/>
							))}
						</div>
					</section>
				) : (
					<div className="mt-16 flex justify-center items-center flex-col gap-2">
						<h2 className="text-black text-xl font-bold">Oops, no results</h2>
						<p>{allCars?.message}</p>
					</div>
				)}
			</div>
		</main>
	);
}
