/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prestigio-mz.s3.us-east-1.amazonaws.com',
        pathname: '/**',
      },
    ],
  }
};

export default nextConfig;
