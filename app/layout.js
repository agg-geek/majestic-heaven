export const metadata = {
	title: 'Majestic Heaven',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
