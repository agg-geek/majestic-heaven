import { Suspense } from 'react';
import CabinList from '@/app/_components/CabinList';
import Spinner from '@/app/_components/Spinner';

// i am using npm run prod which creates a prod build where caching works
// (caching does not work in development build)
// changing the price of the cabin on supabase will not update it
// hence use revalidate to set the time after which server refetches the data
// export const revalidate = 0; // always refetches data

// since always refetching is not reqd either, use ISR
// which will refetch the data periodically (every hour)
export const revalidate = 3600;

export const metadata = {
	title: 'All cabins',
};

export default function CabinsPage() {
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

			<Suspense fallback={<Spinner />}>
				<CabinList />
			</Suspense>
		</div>
	);
}
