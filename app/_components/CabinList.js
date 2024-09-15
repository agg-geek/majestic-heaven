import CabinCard from '@/app/_components/CabinCard';
import { getCabins } from '@/app/_lib/data-service';

export default async function CabinList({ filter }) {
	const cabins = await getCabins();

	if (!cabins.length) return null;

	const displayedCabins = cabins.filter(cabin => {
		const { maxCapacity } = cabin;
		if (
			filter === 'all' ||
			(filter === 'small' && maxCapacity >= 1 && maxCapacity <= 3) ||
			(filter === 'medium' && maxCapacity >= 4 && maxCapacity <= 7) ||
			(filter === 'large' && maxCapacity >= 8 && maxCapacity <= 10)
		) {
			return true;
		}

		return false;
	});

	return (
		<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
			{displayedCabins.map(cabin => (
				<CabinCard cabin={cabin} key={cabin.id} />
			))}
		</div>
	);
}
