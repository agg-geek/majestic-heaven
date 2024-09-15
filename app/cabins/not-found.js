import Link from 'next/link';

// personalised not found for cabinId page
// needs to be manually called otherwise getting the cabin from supabase
// will return null and the cabinId page will try to read from null
// so error.js will be shown instead of not-found.js
// hence suitably call this notfound in the data-service.js
export default function CabinNotFound() {
	return (
		<main className="text-center space-y-6 mt-4">
			<h1 className="text-3xl font-semibold">
				This Cabin cannot be found :(
			</h1>
			<Link
				href="/cabins"
				className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
			>
				Back to all cabins
			</Link>
		</main>
	);
}
