/** @type {import('next').NextConfig} */
const nextConfig = {
  // Don't advertise the framework in response headers.
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
