import DateSelector from '@/app/_components/DateSelector';
import ReservationForm from '@/app/_components/ReservationForm';
import { getBookedDatesByCabinId, getSettings } from '@/app/_lib/data-service';

export default async function Reservation({ cabin }) {
	const settings = await getSettings();
	const bookedDates = await getBookedDatesByCabinId(cabin.id);

	return (
		<div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
			<DateSelector
				cabin={cabin}
				bookedDates={bookedDates}
				settings={settings}
			/>
			<ReservationForm cabin={cabin} />
		</div>
	);
}
