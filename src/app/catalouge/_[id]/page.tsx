import CarDetailComponent from '@/components/CarDetailPageComp';

const car = {
	city_mpg: 31,
	class: 'Midsize Car',
	combination_mpg: 34,
	cylinders: 4,
	displacement: 1.5,
	drive: 'Fwd',
	fuel_type: 'Gas',
	highway_mpg: 38,
	make: 'Honda',
	model: 'Civic 4dr',
	transmission: 'Automatic',
	year: 2022,
};

export default function CarDetailPage() {
	return (
		<div>
			<CarDetailComponent car={car} />
		</div>
	);
}
