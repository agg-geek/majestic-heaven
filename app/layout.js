import '@/app/globals.css';

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
			<body>{children}</body>
		</html>
	);
}
