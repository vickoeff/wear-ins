import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.js',
  },
};

export default nextConfig;
