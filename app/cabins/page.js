import { Suspense } from 'react';
import CabinList from '@/app/_components/CabinList';
import Spinner from '@/app/_components/Spinner';

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

			{/* the loading.js in cabins will block the complete cabins page
				since the above cabins page desc can be shown without a loader
				use a supsense for the cabinlist
				this suspense will override the global loading.js with Spinner
				for the cabinlist component */}
			<Suspense fallback={<Spinner />}>
				<CabinList />
			</Suspense>
		</div>
	);
}
