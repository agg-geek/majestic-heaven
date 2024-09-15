import DateSelector from '@/app/_components/DateSelector';
import ReservationForm from '@/app/_components/ReservationForm';
import { getBookedDatesByCabinId, getSettings } from '@/app/_lib/data-service';

export default async function Reservation({ cabin }) {
	const settings = await getSettings();
	const bookedDates = await getBookedDatesByCabinId(cabin.id);

	return (
		<div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
			{/* since the dates selected in DateSelector is reqd by ReservationForm, we need to share state 
                1. store state in url (bad as page navigation so refetching data)
                2. lift state up (easy, nothing new to learn)
                3. Use context API (Provider added to global layout.js) */}
			<DateSelector
				cabin={cabin}
				bookedDates={bookedDates}
				settings={settings}
			/>
			<ReservationForm cabin={cabin} />
		</div>
	);
}
