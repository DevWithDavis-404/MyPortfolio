import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://picsum.photos/seed/picsum/600/300'),
      new URL("https://picsum.photos/seed/picsum/300/300"),
    ]
  }
};

export default nextConfig;
