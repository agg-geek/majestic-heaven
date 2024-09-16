import ReservationCard from '@/app/_components/ReservationCard';
import { auth } from '@/app/_lib/auth';
import { getBookings } from '@/app/_lib/data-service';

export const metadata = {
	title: 'Your reservations',
};

export default async function ReservationsPage() {
	const session = await auth();
	const reservations = await getBookings(session.user.guestId);

	return (
		<div>
			{reservations.length === 0 ? (
				<p className="text-lg">
					You have no reservations yet. Check out our{' '}
					<a className="underline text-accent-500" href="/cabins">
						luxury cabins &rarr;
					</a>
				</p>
			) : (
				<ul className="space-y-6">
					{reservations.map(reservation => (
						<ReservationCard
							reservation={reservation}
							key={reservation.id}
						/>
					))}
				</ul>
			)}
		</div>
	);
}
