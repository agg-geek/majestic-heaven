import CabinCard from '@/app/_components/CabinCard';
import { getCabins } from '@/app/_lib/data-service';

// completely opting out of caching on the component level (makes CabinList dynamic)
// remove the revalidate stuff in the cabins page for this to work
// removing caching at component level along with using revalidate at the route level
// is important as it enables Partial pre-rendering
// so the route level stuff (the "shell") is cached more
// but the component is dynamic and not cached
import { unstable_noStore as noStore } from 'next/cache';

export default async function CabinList() {
	noStore();

	const cabins = await getCabins();

	if (!cabins.length) return null;

	return (
		<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
			{cabins.map(cabin => (
				<CabinCard cabin={cabin} key={cabin.id} />
			))}
		</div>
	);
}
