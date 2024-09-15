'use client';

import { createContext, useContext, useState } from 'react';

const ReservationContext = createContext();

const INITIAL_STATE = { from: null, to: null };

function ReservationProvider({ children }) {
	const [dateRange, setDateRange] = useState(INITIAL_STATE);

	function resetDateRange() {
		setDateRange(INITIAL_STATE);
	}

	return (
		<ReservationContext.Provider
			value={{
				dateRange,
				setDateRange,
				resetDateRange,
			}}
		>
			{children}
		</ReservationContext.Provider>
	);
}

function useReservation() {
	const value = useContext(ReservationContext);
	if (!value)
		throw new Error('Reservation context was used outside the Provider');
	return value;
}

export { ReservationProvider, useReservation };
