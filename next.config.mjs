/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/portfolio',
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
