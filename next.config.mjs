/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.credly.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.datacamp.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.cookielaw.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
    basePath: "/portfolio",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
  };

export default nextConfig;