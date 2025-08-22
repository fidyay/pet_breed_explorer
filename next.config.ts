import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(`${process.env.NEXT_PUBLIC_CATS_IMAGES_BASE_URL}/**`),
      new URL(`${process.env.NEXT_PUBLIC_DOGS_IMAGES_BASE_URL}/**`),
    ],
  },
};

export default nextConfig;
