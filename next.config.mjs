/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	webpack: (config) => {
		config.module.rules.push({
			test: /\.(wav|mp3)$/,
			use: ["file-loader"],
		});
		return config;
	},
};

export default nextConfig;
