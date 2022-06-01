/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
		ignoreTranspilerName: true,
		
	},
	images: {
		domains: ['rb.gy', 'image.tmdb.org'],
	},
};

module.exports = nextConfig;
