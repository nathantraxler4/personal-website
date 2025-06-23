/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"], // For placeholder images
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ["@heroicons/react"],
  },
  // Enable React strict mode
  reactStrictMode: true,
  // Disable ETag generation
  generateEtags: false,
  // Enable gzip compression
  compress: true,
  // Disable the static directory in favor of the app directory
  useFileSystemPublicRoutes: true,
};

module.exports = nextConfig;
