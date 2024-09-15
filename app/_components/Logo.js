import Image from 'next/image';
import Link from 'next/link';

// import image so you can choose to leave the width and height properties
// this way, additional properties like quality can be specified
// as next.js already knows beforehand about the image
import { logo } from '@/public/logo.png';

export default function Logo() {
	return (
		<Link href="/" className="flex items-center gap-4 z-10">
			{/* width and height properties reqd */}
			<Image
				src="/logo.png"
				width="60"
				height="60"
				alt="The Majestic Heaven logo"
			/>

			{/* this way, additional properties like quality can be specified
				the width and height properties can be omitted in this method */}
			<Image
				src={logo}
				// quality={10}
				width="60"
				height="60"
				alt="The Majestic Heaven logo"
			/>

			<span className="text-xl font-semibold text-primary-100">
				The Majestic Heaven
			</span>
		</Link>
	);
}
