import { Suspense } from 'react';
import Image from 'next/image';
import { EyeSlashIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/solid';
import { getCabin, getCabins } from '@/app/_lib/data-service';
import TextExpander from '@/app/_components/TextExpander';
import Reservation from '@/app/_components/Reservation';
import Spinner from '@/app/_components/Spinner';

export async function generateMetadata({ params }) {
	const { name } = await getCabin(params.cabinId);
	return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
	const cabins = await getCabins();
	const cabinIds = cabins.map(cabin => ({ cabinId: String(cabin.id) }));
	return cabinIds;
}

export default async function CabinPage({ params }) {
	const { cabinId } = params;
	const cabin = await getCabin(cabinId);
	const { name, maxCapacity, image: imageUrl, description } = cabin;

	return (
		<div className="max-w-6xl mx-auto mt-8">
			<div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
				<div className="relative scale-[1.15] -translate-x-3">
					<Image
						src={imageUrl}
						fill
						className="object-cover"
						alt={`Cabin ${name}`}
					/>
				</div>

				<div>
					<h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
						Cabin {name}
					</h3>

					<p className="text-lg text-primary-300 mb-10">
						<TextExpander>{description}</TextExpander>
					</p>

					<ul className="flex flex-col gap-4 mb-7">
						<li className="flex gap-3 items-center">
							<UsersIcon className="h-5 w-5 text-primary-600" />
							<span className="text-lg">
								For up to{' '}
								<span className="font-bold">
									{' '}
									{maxCapacity}{' '}
								</span>{' '}
								guests
							</span>
						</li>
						<li className="flex gap-3 items-center">
							<MapPinIcon className="h-5 w-5 text-primary-600" />
							<span className="text-lg">
								Located in the heart of the{' '}
								<span className="font-bold">Dolomites</span>{' '}
								(Italy)
							</span>
						</li>
						<li className="flex gap-3 items-center">
							<EyeSlashIcon className="h-5 w-5 text-primary-600" />
							<span className="text-lg">
								Privacy <span className="font-bold">100%</span>{' '}
								guaranteed
							</span>
						</li>
					</ul>
				</div>
			</div>

			<div>
				<h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
					Reserve {name} today. Pay on arrival.
				</h2>

				{/* to implement DateSelector and ReservationForm, we need the cabin, 
					bookings (to block dateselector dates for which cabin is already booked)
					and supabase table 'settings' to get min, maxBookingLength 
					both these components should be client components as they have state
					instead of blocking this page by first fetching this date and then rendering the page,
					create a component that fetches the data and streams whatever things are available */}

				<Suspense fallback={<Spinner />}>
					<Reservation cabin={cabin} />
				</Suspense>
			</div>
		</div>
	);
}
