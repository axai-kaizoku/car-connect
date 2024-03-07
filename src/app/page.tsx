import CustomFilter from '@/components/CustomFilter';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';

export default function Home() {
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
			</div>
		</main>
	);
}
