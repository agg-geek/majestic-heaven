import { Suspense } from 'react';
import CabinList from '@/app/_components/CabinList';
import Spinner from '@/app/_components/Spinner';
import Filter from '@/app/_components/Filter';

// revalidate will not have any effect now because we use searchParams
// so the route is dynamically generated now
// export const revalidate = 3600;

export const metadata = {
	title: 'All cabins',
};

export default function CabinsPage({ searchParams }) {
	// passing state from client to server
	// searchParams will only be available on the page and not inside components

	// cabins capacity can be: small, medium, large, all
	const filter = searchParams?.capacity ?? 'all';

	return (
		<div>
			<h1 className="text-4xl mb-5 text-accent-400 font-medium">
				Our Luxury Cabins
			</h1>
			<p className="text-primary-200 text-lg mb-10">
				Cozy yet luxurious cabins, located right in the heart of the
				Kashmir Valley. Imagine waking up to beautiful mountain views,
				spending your days exploring the dark forests around, or just
				relaxing in your private hot tub under the stars. Enjoy nature's
				beauty in your own little home away from home. The perfect spot
				for a peaceful, calm vacation. Welcome to paradise.
			</p>

			<div className="flex justify-end mb-8">
				<Filter />
			</div>

			<Suspense fallback={<Spinner />}>
				<CabinList filter={filter} />
			</Suspense>
		</div>
	);
}
