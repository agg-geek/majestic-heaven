import Link from 'next/link';
import Logo from './_components/Logo';

export default function AppPage() {
	return (
		<div>
			<Logo />
			<h1>Hello World</h1>
			<Link href="/cabins">Explore cabins</Link>
		</div>
	);
}
