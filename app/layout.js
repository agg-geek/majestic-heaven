import '@/app/globals.css';

import { Josefin_Sans } from 'next/font/google';

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
			<body className={josefinFont.className}>{children}</body>
		</html>
	);
}
