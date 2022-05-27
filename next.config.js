/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['rb.gy', 'image.tmdb.org'],
	},
	eslint:{
		ignoreDuringBuilds:true,
	}
};

module.exports = nextConfig;
