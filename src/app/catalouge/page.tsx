import CarCard from '@/components/CarCard';
import CustomFilter from '@/components/CustomFilter';
import SearchBar from '@/components/SearchBar';
import ShowMore from '@/components/ShowMore';
import { fuels, transmission, yearsOfProduction } from '@/constants';
import { fetchCars } from '@/utils';
import Link from 'next/link';

export default async function CarCatalogue({
	searchParams,
}: {
	searchParams: any;
}) {
	const allCars = await fetchCars({
		manufacturer: searchParams.manufacturer || '',
		year: searchParams.year || 2022,
		fuel: searchParams.fuel || '',
		limit: searchParams.limit || 5,
		model: searchParams.model || '',
		transmission: searchParams.transmission || '',
	});
	const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
	return (
		<div className="overflow-hidden">
			<div
				className="mt-28 sm:px-16 px-6 py-4 max-w-screen-xl mx-auto"
				id="catalouge">
				<div className="flex flex-col items-start justify-start gap-y-2.5 text-black">
					<h1 className="text-4xl font-extrabold">Car Catalogue</h1>
					<Link href="/catalouge">
						<p>Explore the cars you might like</p>
					</Link>
				</div>
				<div className="mt-12 w-full flex-between flex-wrap gap-5">
					<SearchBar />
					<div className="flex justify-start flex-wrap items-center gap-2">
						<CustomFilter
							title="fuel"
							options={fuels}
						/>
						<CustomFilter
							title="year"
							options={yearsOfProduction}
						/>
						<CustomFilter
							title="transmission"
							options={transmission}
						/>
					</div>
				</div>
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
						<ShowMore
							pageNumber={(searchParams.limit || 5) / 5}
							isNext={(searchParams.limit || 5) > allCars.length}
						/>
					</section>
				) : (
					<div className="mt-16 flex justify-center items-center flex-col gap-2">
						<h2 className="text-black text-xl font-bold">Oops, no results</h2>
						<p>{allCars?.message}</p>
					</div>
				)}
			</div>
		</div>
	);
}
