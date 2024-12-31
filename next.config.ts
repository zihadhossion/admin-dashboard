import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true, // Add this line to disable ESLint during builds
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
