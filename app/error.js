// ERROR BOUNDARY
// Error component always needs to be a client component
'use client';

// this error boundary will catch only rendering errors
// like reading on a null object, eg null.max
// 1. does not catch errors in callback fns
// 2. does not catch errors in the RootLayout (use global-error.js)

// gets access to error and reset
export default function Error({ error, reset }) {
	return (
		<main className="flex justify-center items-center flex-col gap-6">
			<h1 className="text-3xl font-semibold">Something went wrong!</h1>
			<p className="text-lg">{error.message}</p>

			{/* use reset onClick (doesn't do anything right now) */}
			<button
				className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
				onClick={reset}
			>
				Try again
			</button>
		</main>
	);
}
