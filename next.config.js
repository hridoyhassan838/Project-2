/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    // Modern Browsers Only
    legacyBrowsers: false,
    modern: true,
  },
};

module.exports = nextConfig;