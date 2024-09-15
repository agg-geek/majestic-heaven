/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'wmgtcgsvahqwnwxndxwr.supabase.co',
				port: '',
				pathname: '/storage/v1/object/public/cabin-images/**',
			},
		],
	},
	// since our site is completely static now (no dynamic pages, not even /cabins/cabinId)
	// we can use static site generation (SSG)
	// this would not be possible if there were any dynamic pages
	// npm run build and output: export below will make a out folder (like dist folder)
	// this folder can be directly uploaded as a static site
	output: 'export',
};

export default nextConfig;
