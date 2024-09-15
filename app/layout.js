import '@/app/globals.css';

import { Josefin_Sans } from 'next/font/google';
import Header from './_components/Header';
import { ReservationProvider } from '@/app/_components/ReservationContext';

const josefinFont = Josefin_Sans({
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	title: {
		template: '%s | Majestic Heaven',
		default: 'Majestic Heaven',
	},
	description: 'Luxurious hotel located in the beautiful Kashmir valley',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${josefinFont.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
			>
				<Header />

				<div className="flex-1 px-8 py-12 grid">
					<main className="max-w-7xl mx-auto w-full">
						{/* we provide this ReservationProvider here as we implement ReservationReminder
							also, when user selects a date for a cabin and goes back and selects another cabin,
							the dates will be stored in the context itself (hence again use context)
							also, the provider is a client component but the children are server components
							this will work as the children will have already been rendered so this 
							server comp. inside client comp. is okay */}
						<ReservationProvider>{children}</ReservationProvider>
					</main>
				</div>
			</body>
		</html>
	);
}
