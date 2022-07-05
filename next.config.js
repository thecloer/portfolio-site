/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.notion.so', 'images.unsplash.com', 's3.us-west-2.amazonaws.com', 'cdn.jsdelivr.net', 'raw.githubusercontent.com'],
  },
};

module.exports = nextConfig;
