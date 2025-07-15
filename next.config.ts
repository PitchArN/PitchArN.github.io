import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  distDir: "out",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
